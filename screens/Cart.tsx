import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Cart = () => {

  const handleIncreaseQuantity = (id:number) => {
   
  };

  const handleDecreaseQuantity = (id:number) => {
   
  };

  const calculateTotal = () => {
   
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Giỏ hàng</Text>
        <ScrollView style={styles.scrollView}>
                <View  style={styles.item}>
                <Image style={styles.image} source={require("../designs/brands/casio.jpg")} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.name}>test name</Text>
                    <Text style={styles.price}>3999 VNĐ</Text>
                    <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Text style={styles.quantity}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>15</Text>
                    <TouchableOpacity>
                        <Text style={styles.quantity}>+</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>

                <View  style={styles.item}>
                <Image style={styles.image} source={require("../designs/brands/citizen.jpg")} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.name}>test name</Text>
                    <Text style={styles.price}>3999 VNĐ</Text>
                    <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Text style={styles.quantity}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>15</Text>
                    <TouchableOpacity>
                        <Text style={styles.quantity}>+</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>


                <View  style={styles.item}>
                <Image style={styles.image} source={require("../designs/brands/citizen.jpg")} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.name}>test name</Text>
                    <Text style={styles.price}>3999 VNĐ</Text>
                    <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Text style={styles.quantity}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>15</Text>
                    <TouchableOpacity>
                        <Text style={styles.quantity}>+</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>



                

            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                <Text style={styles.total}>Tổng tiền: 1000 VNĐ</Text>
                <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white" }}>Đặt hàng</Text>
                </TouchableOpacity>
                </View>
        </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title:{
        marginTop:100,
        fontStyle:"italic",
        fontSize:50,
        color:"black"
    },
    scrollView:{
        marginTop:50,
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
      width: 50,
      height: 50,
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