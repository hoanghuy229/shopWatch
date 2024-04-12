import axios from "axios";
import { LoginDTO } from "../dtos/LoginDTO";
import { RegisterDTO } from "../dtos/RegisterDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Customer } from "../models/Customer";
import { CustomerDTO } from "../dtos/CustomerDTO";
import { Order } from "../models/Order";

export async function login(loginDTO:LoginDTO): Promise<any> {
    const url: string = `http://10.0.2.2:8080/api/v1/customers/login`;

    try {
        const response = await axios.post(url, {
            phone_number: loginDTO.phone_number,
            password: loginDTO.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result: string = response.data;

        return result;
    }
    catch (error) {
        throw new Error(`${error}`);
    }
}

export async function register(registerDTO:RegisterDTO):Promise<any> {
    const url:string = `http://10.0.2.2:8080/api/v1/customers/register`;

    try{
        const response = await axios.post(url,{
            phone_number:registerDTO.phone_number,
            first_name:registerDTO.first_name,
            last_name:registerDTO.last_name,
            email:registerDTO.email,
            password:registerDTO.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result: string = response.data;

        return result;
    }
    catch(error){
        throw new Error( 'số điện thoại đã tồn tại');
    }
}

export async function getUserDetail():Promise<any> {
    const token = await AsyncStorage.getItem('token');
    
    const url:string = `http://10.0.2.2:8080/api/v1/customers/details`;

    try{
        const response = await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const result:Customer = response.data;

        return result;
    }
    catch(error){
        throw new Error(`${error}`);
    }
}

export async function updateUserDetail(id:number,customerDTO:CustomerDTO):Promise<any> {
    const token = await AsyncStorage.getItem('token');
    
    const url:string = `http://10.0.2.2:8080/api/v1/customers/details/${id}`;
    try{
        const response = await axios.put(url,{
            first_name:customerDTO.first_name,
            last_name:customerDTO.last_name,
            email:customerDTO.email,
            password:customerDTO.password,
            phone_number:customerDTO.phone_number,
            },
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const result:Customer = response.data;

        return result;
    }
    catch(error){
        throw new Error(`${error}`);
    }
}

export async function getOrdersByCustomerId():Promise<any> {
    try{
        const token = await AsyncStorage.getItem('token');

        const url:string = `http://10.0.2.2:8080/api/v1/orders/customer`;

        const response = await axios.get(url,{
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        })

        const result:Order[] = response.data;

        return result;
    }
    catch(error){
        throw new Error(`${error}`);
    }
}