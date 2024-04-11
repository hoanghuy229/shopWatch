import React from "react";
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ProductDetail = () => {
    // Dữ liệu chi tiết sản phẩm (tĩnh)
    const productDetailData = {
        image: require('../designs/brands/casio.jpg'),
        category: 'Casio',
        name: 'Product 1 là đồng hồ casio',
        price: '$100',
        quantity: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu ex vitae turpis placerat semper. Integer eleifend arcu eget consectetur aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu ex vitae turpis placerat semper. Integer eleifend arcu eget consectetur aliquet'
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={productDetailData.image} style={styles.productImage} />
            </View>
            <View style={styles.productDetailContainer}>
                <Text style={styles.productCategory}>Đồng hồ {productDetailData.category}</Text>
                <Text style={styles.productName}>{productDetailData.name}</Text>

                <View style={styles.separator}></View>

                <Text style={styles.productPrice}>{productDetailData.price}</Text>
                <Text style={styles.productQuantity}>Số lượng: {productDetailData.quantity} sản phẩm</Text>

                <View style={styles.separator}></View>

                <Text style={styles.productCategory}>Description</Text>
                <Text style={styles.productDescription}>{productDetailData.description}</Text>

                <View style={styles.separator}></View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.addToCartButton}>
                        <Ionicons name="cart" size={20} color="darkorange" />
                        <Text style={styles.cartText}>giỏ hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyNowButton}>
                        <Ionicons name="basket" size={20} color="green" />
                        <Text style={styles.buyText}>Mua ngay</Text>
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
        marginTop:70,
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
