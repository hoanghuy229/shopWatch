import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Header from './Header';

const OrderHistoryScreen = (props:any) => {
  // Dữ liệu lịch sử đặt hàng
  const orderHistoryData = [
    {
      orderId: 1,
      totalPrice: 500000,
      orderDate: '2024-04-10',
      products: [
        {
          productId: 1,
          productName: 'Đồng hồ Rolex',
          quantity: 1,
          price: 250000,
          imageUrl: '../designs/brands/casio.jpg',
        },
        {
          productId: 2,
          productName: 'Đồng hồ Casio',
          quantity: 2,
          price: 125000,
          imageUrl: 'h../designs/brands/casio.jpg',
        },
      ],
    },
    {
        orderId: 1,
        totalPrice: 500000,
        orderDate: '2024-04-10',
        products: [
          {
            productId: 1,
            productName: 'Đồng hồ Rolex',
            quantity: 1,
            price: 250000,
            imageUrl: '../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
        ],
      },
      {
        orderId: 1,
        totalPrice: 500000,
        orderDate: '2024-04-10',
        products: [
          {
            productId: 1,
            productName: 'Đồng hồ Rolex',
            quantity: 1,
            price: 250000,
            imageUrl: '../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
        ],
      },
      {
        orderId: 1,
        totalPrice: 500000,
        orderDate: '2024-04-10',
        products: [
          {
            productId: 1,
            productName: 'Đồng hồ Rolex',
            quantity: 1,
            price: 250000,
            imageUrl: '../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
        ],
      },
      {
        orderId: 1,
        totalPrice: 500000,
        orderDate: '2024-04-10',
        products: [
          {
            productId: 1,
            productName: 'Đồng hồ Rolex',
            quantity: 1,
            price: 250000,
            imageUrl: '../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
        ],
      },
      {
        orderId: 1,
        totalPrice: 500000,
        orderDate: '2024-04-10',
        products: [
          {
            productId: 1,
            productName: 'Đồng hồ Rolex',
            quantity: 1,
            price: 250000,
            imageUrl: '../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
        ],
      },
      {
        orderId: 1,
        totalPrice: 500000,
        orderDate: '2024-04-10',
        products: [
          {
            productId: 1,
            productName: 'Đồng hồ Rolex',
            quantity: 1,
            price: 250000,
            imageUrl: '../designs/brands/casio.jpg',
          },
          {
            productId: 2,
            productName: 'Đồng hồ Casio',
            quantity: 2,
            price: 125000,
            imageUrl: 'h../designs/brands/casio.jpg',
          },
        ],
      },
  ];

  return (
    <View style={styles.container}>
        <Header navigation={props.navigation}></Header>
        <Text style={styles.title}>Lịch sử đặt hàng</Text>
        <ScrollView>
            {
                orderHistoryData.map(order => (
                    <View style={styles.orderItem}>
                    <Text>Total Price: {order.totalPrice} $</Text>
                    <Text>Order Date: {order.orderDate}</Text>
                        <ScrollView horizontal>
                            {order.products.map((product) => (
                            <View style={styles.productCard} key={product.productId}>
                                <Text>{product.productName}</Text>
                                <Text>Quantity: {product.quantity}</Text>
                                <Text>Price: {product.price} $</Text>
                                <Image source={require('../designs/brands/casio.jpg')} style={styles.productImage} />
                            </View>
                            ))}
                        </ScrollView>
                    </View>
                ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  orderItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  productCard: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
  },
  title:{
    fontSize:50,
    marginBottom:50,
    marginTop:50,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default OrderHistoryScreen;
