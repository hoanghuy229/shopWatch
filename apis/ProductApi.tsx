import axios from "axios";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

interface AllProduct{
    result:Product[],
    totalPage:number;
}

export async function getPopularProducts(): Promise<Product[]> {
    const url: string = `http://10.0.2.2:8080/api/v1/products/popular`;
   
    try {
        const response = await axios.get(url);

        const result: Product[] = response.data;
        
        return result;

    } catch (error) {
        throw new Error(`${error}`); 
    }
}

export async function getAllProduct(currentPage:number,categoryId:number,keyword:string,minPrice:number,maxPrice:number):Promise<AllProduct> {
    const url:string = `http://10.0.2.2:8080/api/v1/products?keyword=${keyword}&category_id=${categoryId}&page=${currentPage}&limit=4&min_price=${minPrice}&max_price=${maxPrice}`;

    const result:Product[] = [];

    const response = await axios.get(url);

    const products:Product[] = response.data.product_responses;
    const totalPages:number = response.data.total_pages;

    for(const key in products){
        result.push({
            product_id:products[key].product_id,
            name:products[key].name,
            price:products[key].price,
            quantity:products[key].quantity,
            description:products[key].description,
            image:products[key].image,
            category_id:products[key].category_id,
        });
    }

    return {result:result,totalPage:totalPages}
}

export async function getProductDetail(productId:number):Promise<Product> {
    const url:string = `http://10.0.2.2:8080/api/v1/products/${productId}`;

    try {
        const response = await axios.get(url);

        const result:Product = response.data;
        
        return result;

    } catch (error) {
        throw new Error(`${error}`); 
    }
}

export async function getCategory(categoryId:number | undefined):Promise<Category> {
    const url:string = `http://10.0.2.2:8080/api/v1/categories/${categoryId}`;

    try {
        const response = await axios.get(url);

        const result:Category = response.data;
        
        return result;

    } catch (error) {
        throw new Error(`${error}`); 
    }
    
}

export async function getProductByIds(ids:number[]):Promise<Product[]> {
    const idsString:string = ids.join(",");

    const url:string = `http://10.0.2.2:8080/api/v1/products/by-ids?ids=${idsString}`;

    try{
        const response = await axios.get(url);

        const result:Product[] = response.data;

        return result;
    }
    catch(error){
        throw new Error(`${error}`)
    }
}

export async function getAllCategory():Promise<Category[]> {
    const url:string = `http://10.0.2.2:8080/api/v1/categories`;

    const response = await axios.get(url);

    const result:Category[] = response.data;

    return result;
    
}