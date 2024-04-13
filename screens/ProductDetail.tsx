import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Header from "./Header";
import { Product } from "../models/Product";
import { getCategory, getProductDetail } from "../apis/ProductApi";
import { Category } from "../models/Category";
import { addtoCart } from "../services/CartService";


const ProductDetail = (props:any) => {

    const {productId} = props.route.params;
    const productIdInt = parseInt(productId);


    const [product,setProduct] = useState<Product>();
    const [category,setCategory] = useState<Category>();

    useEffect(() => {
        getProductDetail(productIdInt)
        .then(
            data => setProduct(data)
        )
        .catch(error => console.log(error));
    },[productIdInt])

    useEffect(() => {
        getCategory(product?.category_id)
        .then(
            category => setCategory(category)
        )
        .catch(error => console.log(error));
    },[])


    const addThisToCart = async (productId:number) => {
        try{
            await addtoCart(productId);
            alert(`thêm thành công`)
        }
        catch(error){
            console.log(`${error}`)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Header navigation={props.navigation}></Header>
            <View style={styles.imageContainer}>
                <Image source={{uri : `http://10.0.2.2:8080/api/v1/products/images/${product?.image}`}} style={styles.productImage} />
            </View>
            <View style={styles.productDetailContainer}>
                <Text style={styles.productCategory}>Đồng hồ {category?.name}</Text>
                <Text style={styles.productName}>{product?.name}</Text>

                <View style={styles.separator}></View>

                <Text style={styles.productPrice}>$ {product?.price}</Text>
                <Text style={styles.productQuantity}>Số lượng: {product?.quantity} sản phẩm</Text>

                <View style={styles.separator}></View>

                <Text style={styles.productCategory}>Description</Text>
                <Text style={styles.productDescription}>{product?.description}</Text>

                <View style={styles.separator}></View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.addToCartButton}>
                        <Ionicons name="cart" size={20} color="darkorange" onPress={() => addThisToCart(productIdInt)}/>
                        <Text style={styles.cartText}>giỏ hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyNowButton}>
                        <Ionicons name="basket" size={20} color="green" />
                        <Text style={styles.buyText} onPress={() => props.navigation.navigate('Home')}>Mua ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    imageContainer:{
        alignItems:"center",
        marginTop:10,
        width:"100%",
        height:250,
    },
    productDetailContainer: {
        borderRadius:40,
        marginTop:0,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor:"#edf1e1",
        height:"100%",
    },
    buttonView:{
        flexDirection:"row"
    },
    productImage: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        marginBottom: 20,
    },
    productCategory: {
        fontSize: 30,
        fontStyle:"italic",
        fontWeight: 'bold',
        color:"#747370",
        marginBottom: 20,
    },
    productName: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productPrice: {
        fontSize: 30,
        fontStyle:"italic",
        marginBottom: 20,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        marginBottom: 30,
        marginTop:40,
    },
    productQuantity: {
        fontSize: 25,
        marginBottom: 20,
    },
    productDescription: {
        fontSize: 20,
        borderTopColor:"black",
        textAlign: 'center',
    },
    addToCartButton: {
        width: '50%',
        alignItems: 'center',
        justifyContent:"center",
        flexDirection:"row",
        height:"100%",
        marginBottom: 0,
        marginRight:5,
        backgroundColor: 'white',
        borderWidth: 1, // Độ rộng của viền
        borderColor: 'darkorange', // Màu viền
        borderRadius: 5, // Độ cong của góc
        paddingVertical: 10, // Khoảng cách dọc của phần padding
        paddingHorizontal: 20, // Khoảng cách ngang của phần padding
        marginTop:10,
    },
    buyNowButton: {
        width: '50%',
        height:"100%",
        marginTop:10,
        alignItems: 'center',
        justifyContent:"center",
        flexDirection:"row",
        marginBottom: 0,
        marginLeft:5,
        backgroundColor: 'white',
        borderWidth: 1, // Độ rộng của viền
        borderColor: '#28a745', // Màu viền
        borderRadius: 5, // Độ cong của góc
        paddingVertical: 10, // Khoảng cách dọc của phần padding
        paddingHorizontal: 20, // Khoảng cách ngang của phần padding
    },
    cartText: {
        color: 'darkorange',
        fontWeight: 'bold',
    },
    buyText: {
        color: 'green',
        fontWeight: 'bold',
    },
});

export default ProductDetail;
