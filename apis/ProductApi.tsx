import axios from "axios";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

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