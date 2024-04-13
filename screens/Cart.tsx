import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Header";
import { Product } from "../models/Product";
import { addtoCart, getCart, getQuantity, removeFromCart } from "../services/CartService";
import { getProductByIds } from "../apis/ProductApi";
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cart = (props:any) => {
  const [products,setProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const isFocused = useIsFocused();

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const cartItems = await getCart();
        const ids: number[] = Object.keys(cartItems).map(Number);
  
        if (ids.length === 0) {
          setProducts([]);
          return;
        }
  
        getProductByIds(ids)
          .then((data) => {
            setProducts(data);
          })
          .catch((error) => {
            console.log(error);
          });
  
        const newQuantities: { [key: number]: number } = {};
        ids.forEach(async (productId) => {
          const productQuantity = await getQuantity(productId);
          newQuantities[productId] = productQuantity;
        });
  
        setQuantities(newQuantities); 
      } catch (error) {
        console.log(`${error}`);
      }
    };
  
    getCartItems();
  },[isFocused]);
  

  const handleIncreaseQuantity = async (id:number,ProductQuantity:number) => {
    if(quantities[id] < ProductQuantity){
      const newQuantity = quantities[id] + 1;
      const updateQuantites = {...quantities,[id]:newQuantity};
      setQuantities(updateQuantites);
      await addtoCart(id);
    }
  };

  const handleDecreaseQuantity = async (id:number) => {
    const newQuantity = quantities[id] - 1;
    const updateQuantites = {...quantities,[id]:newQuantity};
    setQuantities(updateQuantites);
    await removeFromCart(id);
  };

  const calculateTotal = () => {
    let total = 0;
    products.forEach((product) => {
      total += (product.price * quantities[product.product_id]);
    });
    return total;
  };

  const createOrder = async () => {

    const getMyCart = await AsyncStorage.getItem('cart');
    const getToken = await AsyncStorage.getItem('token');

    if (getMyCart === '{}') {
      alert("không có sản phẩm");
      return;
    }
    if(getToken === null){
      alert("đăng nhập để đặt hàng");
      return;
    }

    props.navigation.navigate('OrderConfirm', { products, quantities,calculateTotal });
    
  }

  return (
    <ScrollView style={styles.container}>
      <Header navigation={props.navigation}></Header>
        <View style={styles.Cart}>
        <Text style={styles.title}>Giỏ hàng</Text>
        <View style={styles.scrollView}>
          {
            products.filter(product => quantities[product.product_id] > 0).map((product, index) => (
              <View key={index} style={styles.item}>
                <Image style={styles.image} source={{uri : `http://10.0.2.2:8080/api/v1/products/images/${product.image}`}} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.name}>{product.name}</Text>
                  <Text style={styles.price}>{product.price} $</Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => handleDecreaseQuantity(product.product_id)}>
                      <Text style={styles.quantity}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantities[product.product_id]}</Text>
                    <TouchableOpacity onPress={() => handleIncreaseQuantity(product.product_id, product.quantity)}>
                      <Text style={styles.quantity}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          }
          <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
            <Text style={styles.total}>Tổng tiền: {calculateTotal()} $</Text>
            <TouchableOpacity style={styles.button} onPress={() => createOrder()}>
              <Text style={{ color: "white" }}>Đặt hàng</Text>
            </TouchableOpacity>
          </View>
        </View>

        </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
    container: {
      width:"100%",
    },
    Cart:{
      alignItems:"center",
      justifyContent:"center"
    },
    title:{
        marginTop:30,
        fontStyle:"italic",
        fontSize:50,
        color:"black"
    },
    scrollView:{
        marginTop:20,
    },
    item: {
      flexDirection: "row",
      width: 350,
      height: 120,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      margin: 10,
    },
    image: {
      width: 60,
      height: 70,
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
    },
    price: {
      fontSize: 14,
    },
    quantity: {
      width: 50,
      height: 30,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      textAlign: "center",
      marginTop:20
    },
    total: {
      fontSize: 18,
      fontWeight: "bold",
    },
    button: {
      width: 100,
      height: 40,
      backgroundColor: "blue",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      marginRight:20
    },
  });
  
export default Cart;