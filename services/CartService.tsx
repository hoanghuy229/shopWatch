import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const addtoCart = async (productId:number) => {
    try{
        let cartItemsString = await AsyncStorage.getItem('cart');
        let cartItems = cartItemsString ? JSON.parse(cartItemsString) : {};

        if(cartItems[productId]){
            cartItems[productId] += 1;
        }
        else{
            cartItems[productId] = 1;
        }

        await AsyncStorage.setItem('cart',JSON.stringify(cartItems));
    }
    catch(error){
        console.log(`${error}`);
    }
}

export const getQuantity = async (productId: number) => {
    try {
        let cartItemsString = await AsyncStorage.getItem('cart');
        let cartItems = cartItemsString ? JSON.parse(cartItemsString) : {};

        return cartItems[productId] || 0;
    } catch (error) {
        console.log(`${error}`);
        return 0;
    }
}


export const removeFromCart = async (productId:number) => {
    try{
        let cartItemsString = await AsyncStorage.getItem('cart');
        let cartItems = cartItemsString ? JSON.parse(cartItemsString) : {};

        if(cartItems[productId] && cartItems[productId] > 1){
            cartItems[productId] -= 1;
        }
        else{
            delete cartItems[productId];
        }

        await AsyncStorage.setItem('cart',JSON.stringify(cartItems));
    }
    catch(error){
        console.log(`${error}`);
    }
}

export const getCart = async () => {
    try{
        let cartItemsString = await AsyncStorage.getItem('cart');
        let cartItems = cartItemsString ? JSON.parse(cartItemsString) : {};
        return cartItems;
    }
    catch(error){
        console.log(`${error}`);
        return {};
    }
}

export const deleteCart = async () => {
    try {
        await AsyncStorage.removeItem('cart');
    }
    catch (error) {
        console.error(`${error}`);
    }
}