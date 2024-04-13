import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Header";
import { Product } from "../models/Product";
import { useIsFocused } from "@react-navigation/native";
import { getUserDetail, placeOrder } from "../apis/UserApi";
import { getPayment } from "../apis/Payment";
import { Payment } from "../models/Payment";
import RNPickerSelect from 'react-native-picker-select';
import { OrderDTO } from "../dtos/OrderDTO";
import { OrderDetailDTO } from "../dtos/OrderDetailDTO";
import { deleteCart } from "../services/CartService";

const OrderConfirm = (props:any) => {
  const { products, quantities,calculateTotal } = props.route.params;
  const [userId,setUserId] = useState(0);
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phoneNumber,setPhoneName] = useState('');
  const [email,setEmail] = useState('');
  const [payments,setPayments] = useState<Payment[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<number | undefined>(0);

  const isFocused = useIsFocused(); 

    useEffect(() => {
        getUserDetail()
        .then(
            (data) => {
                setUserId(data.id);
                setPhoneName(data.phone_number);
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setEmail(data.email);
            }
        )
        .catch(error => console.log(`${error}`))

        getPayment()
        .then(
          (paymentResponse) => {
            setPayments(paymentResponse);
          }
        )
        .catch(error => console.log(`${error}`))
    },[isFocused])


  const handleConfirmOrder = async () => {

    const orderDetailDTO:OrderDetailDTO[] = products.map((product:Product) => ({
      quantity: quantities[product.product_id],
      price: product.price,
      product_id: product.product_id,
    }))

    let totalPrice = calculateTotal();

    const orderDTO:OrderDTO = {
      total_price: totalPrice,
      customer_id: userId,
      payment_id: selectedPayment,
      order_details: orderDetailDTO
    }

    const response = await placeOrder(orderDTO);
    if(response.includes("create order success")){
      await deleteCart();
      alert("Đơn hàng của bạn đã được xác nhận!");
      props.navigation.navigate('Home');
    }
    else{
      alert(response);
      console.log(response);
    }
  };

  return (
    <ScrollView style={styles.container}>
        <Header navigation={props.navigation}></Header>
        <View style={styles.scrollView}>
            <Text style={{ fontSize: 20, fontWeight: "bold",textAlign:'center',marginBottom:20 }}>Xác nhận đơn hàng</Text>
                
            {
            products.map((product: Product, index: number) => (
              <View key={index} style={styles.item}>
                <Image style={styles.image} source={{uri : `http://10.0.2.2:8080/api/v1/products/images/${product.image}`}} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.name}>{product.name}</Text>
                  <Text style={styles.price}>{product.price} $</Text>
                  <Text style={styles.quantity}>Số lượng: {quantities[product.product_id]}</Text>
                </View>
              </View>
            ))}


            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                <Text style={{ fontSize: 16 }}>Thông tin khách hàng:</Text>
            </View>
            <View style={styles.item}>
                <Text style={{ fontSize: 16 }}>Tên:</Text>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>{lastName} {firstName}</Text>
            </View>
            <View style={styles.item}>
                <Text style={{ fontSize: 16 }}>Số điện thoại:</Text>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>{phoneNumber}</Text>
            </View>
            <View style={styles.item}>
                <Text style={{ fontSize: 16 }}>Email:</Text>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>{email}</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
              <Text style={{ fontSize: 16 }}>Phương thức thanh toán:</Text>
            </View>
            <View style={{width:300,height:50,borderRadius:5,borderColor:"gray",borderWidth:1,marginBottom:50}}>
            <RNPickerSelect
              onValueChange={(value) => {
                const selected = payments.find((payment) => payment.payment_id === value);
                setSelectedPayment(selected?.payment_id);
              }}
              items={payments.map((payment) => ({
                label: payment.payment_method,
                value: payment.payment_id,
              }))}
              value={selectedPayment}
            />
            </View>

            <View style={styles.confirm}>
                <TouchableOpacity style={styles.button} onPress={handleConfirmOrder}>
                <Text style={{ color: "white" }}>Xác nhận</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 50,marginTop:10 }}>
                <Text style={styles.total}>Tổng tiền: {calculateTotal()}  $</Text>
            </View>
            </View>
        </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
    container: {
      width:"100%",
      marginBottom:10
    },
    scrollView:{
      marginTop:20,
      marginLeft:30,
      marginBottom:50

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