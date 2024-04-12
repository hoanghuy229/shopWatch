import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Header";


const OrderConfirm = (props:any) => {

  const handleConfirmOrder = () => {
    // Gọi API để xác nhận đơn hàng
    // ...
    alert("Đơn hàng của bạn đã được xác nhận!");
  };

  return (
    <View style={styles.container}>
        <Header navigation={props.navigation}></Header>
        <ScrollView style={styles.scrollView}>
            <Text style={{ fontSize: 20, fontWeight: "bold",textAlign:'center',marginBottom:20 }}>Xác nhận đơn hàng</Text>
                
            <View style={styles.item}>
            <Image style={styles.image} source={require("../designs/brands/rolex.jpg")} />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.name}>test</Text>
                <Text style={styles.price}>3000 $</Text>
                <Text style={styles.quantity}>Số lượng:15</Text>
            </View>
            </View>


            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                <Text style={{ fontSize: 16 }}>Thông tin khách hàng:</Text>
            </View>
            <View style={styles.item}>
                <Text style={{ fontSize: 16 }}>Tên:</Text>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>huy ne</Text>
            </View>
            <View style={styles.item}>
                <Text style={{ fontSize: 16 }}>Số điện thoại:</Text>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>123456789</Text>
            </View>
            <View style={styles.item}>
                <Text style={{ fontSize: 16 }}>Email:</Text>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>hehehehehehehe</Text>
            </View>
            <View style={styles.confirm}>
                <TouchableOpacity style={styles.button} onPress={handleConfirmOrder}>
                <Text style={{ color: "white" }}>Xác nhận</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 50,marginTop:10 }}>
                <Text style={styles.total}>Tổng tiền: 500 $</Text>
            </View>
            </View>
        </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      width:"100%"
    },
    scrollView:{
      marginTop:20,
      marginLeft:30
    },
    confirm:{
        flexDirection:"row",
        marginLeft:10
    },
    item: {
      flexDirection: "row",
      width: 300,
      height: 100,
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
      width: 150,
      height: 30,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      textAlign: "center",
      marginTop:10
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
    },
  });

export default OrderConfirm;