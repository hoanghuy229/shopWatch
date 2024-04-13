import React from "react";
import axios from "axios";
import { Payment } from "../models/Payment";

export async function getPayment():Promise<Payment[]> {
    try{
        const url:string = `http://10.0.2.2:8080/api/v1/payments`;

        const response = await axios.get(url);

        const data:Payment[] = response.data;

        return data;
    }
    catch(error){
        console.log(`${error}`);
        return [];
    }
}