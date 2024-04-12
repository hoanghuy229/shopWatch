import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from 'react-native';
import { Product } from "../models/Product";
import { getPopularProducts } from "../apis/ProductApi";

const PopularProducts = (props:any) => {
    const [popularProductsData,setPopularProductsData] = useState<Product[]>([]);

    useEffect(() => {
        getPopularProducts()
        .then(
            (data) => {
                setPopularProductsData(data);
            }
        )
        .catch(error => console.log(error));
    },[]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productContainer}>
                {popularProductsData.map((product, index) => (
                    <TouchableOpacity key={index} style={styles.productCard}>
                        <Image source={{uri : `http://10.0.2.2:8080/api/v1/products/images/${product.image}`}} style={styles.productImage} alt="product img"/>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price} $</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.cart}>
                                <Ionicons name="cart" size={20} color="darkorange" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.detail}>
                            <Ionicons name="eye" size={20} color="green" onPress={() => props.navigation.navigate('ProductDetail', { productId: product.product_id })}/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        marginBottom:50,
        backgroundColor: '#fff',
    },
    titles: {
        marginTop: 40,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    productCard: {
        width: '48%',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
    },
    productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    productName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        marginTop: 5,
        fontSize: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    cart: {
        backgroundColor: 'transparent',
        borderWidth: 1, // Độ rộng của viền
        borderColor: 'darkorange', // Màu viền
        borderRadius: 5, // Độ cong của góc
        paddingVertical: 10, // Khoảng cách dọc của phần padding
        paddingHorizontal: 20, // Khoảng cách ngang của phần padding
        width: '45%',
        alignItems: 'center',
    },
    detail: {
        backgroundColor: 'transparent',
        borderWidth: 1, // Độ rộng của viền
        borderColor: '#28a745', // Màu viền
        borderRadius: 5, // Độ cong của góc
        paddingVertical: 10, // Khoảng cách dọc của phần padding
        paddingHorizontal: 20, // Khoảng cách ngang của phần padding
        width: '45%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default PopularProducts;
