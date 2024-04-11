import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity, TouchableHighlight } from 'react-native';

const PopularProducts = () => {
    // Dữ liệu sản phẩm nổi bật (tĩnh)
    const popularProductsData = [
        {
            id: 1,
            name: 'Product 1',
            price: '$100',
            image: require('../designs/brands/casio.jpg'),
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$150',
            image: require('../designs/brands/citizen.jpg'),
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$120',
            image: require('../designs/brands/hublot.jpg'),
        },
        {
            id: 4,
            name: 'Product 4',
            price: '$200',
            image: require('../designs/brands/rolex.jpg'),
        },
        {
            id: 5,
            name: 'Product 5',
            price: '$180',
            image: require('../designs/brands/citizen.jpg'),
        },
        {
            id: 6,
            name: 'Product 6',
            price: '$90',
            image: require('../designs/brands/casio.jpg'),
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productContainer}>
                {popularProductsData.map((product, index) => (
                    <TouchableOpacity key={index} style={styles.productCard}>
                        <Image source={product.image} style={styles.productImage} />
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price} $</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.cart}>
                                <Ionicons name="cart" size={20} color="darkorange" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.detail}>
                            <Ionicons name="eye" size={20} color="green" />
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
