import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Header from './Header';
import { getOrdersByCustomerId } from '../apis/UserApi';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { getProductByIds } from '../apis/ProductApi';
import { useIsFocused } from '@react-navigation/native';

const OrderHistoryScreen = (props:any) => {
  const [orders,setOrders] = useState<Order[]>([]);
  const [products,setProducts] = useState<Product[]>([]);

  const isFocused = useIsFocused(); // Sử dụng useIsFocused để kiểm tra trạng thái focus

  useEffect(() => {
    getOrdersByCustomerId()
    .then(
      (data) => setOrders(data)
    )
    .catch(error => console.log(`${error}`))
  },[isFocused])

  useEffect(() => {
    const productIds:number[] = [];
    orders.forEach((order) => {
      if(order.order_details){
        order.order_details.forEach((orderDetail) => {
          productIds.push(orderDetail.product_id);
        });
      }
    });

    getProductByIds(productIds)
    .then(
      (productResponse) => {
        setProducts(productResponse);
      }
    )
    .catch(error => console.log(`${error}`))
  },[orders])


  return (
    <View style={styles.container}>
        <Header navigation={props.navigation}></Header>
        <ScrollView>
          <Text style={styles.title}>Lịch sử đặt hàng</Text>
          {
            orders.map((order,index) => (
              <View style={styles.orderItem} key={index}>
                <Text>Total Price: {order.total_price} $</Text>
                <Text>Order Date: {new Date(order.order_date).toLocaleDateString()}</Text>
                <ScrollView horizontal>
                  {order.order_details?.map((orderDetail) => {
                    const product = products.find((p) => orderDetail.product_id === p.product_id);
                    return (
                      <View style={styles.productCard} key={product?.product_id}>
                        <Text>{product?.name}</Text>
                        <Text>Quantity: {orderDetail.quantity}</Text>
                        <Text>Price: {product?.price} $</Text>
                        <Image source={{uri : `http://10.0.2.2:8080/api/v1/products/images/${product?.image}`}} style={styles.productImage} />
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            ))
          }
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
