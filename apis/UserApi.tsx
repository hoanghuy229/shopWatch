import axios from "axios";
import { LoginDTO } from "../dtos/LoginDTO";

export async function login(phoneNumber:string,password:string):Promise<any> {
    const url:string = `http://10.0.2.2:8080/api/v1/customers/login`;
    
    const loginDTO:LoginDTO = {
        phone_number:phoneNumber,
        password:password
    }

    try{
        const response = await axios.post(url,{
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(loginDTO)
        });

        const result:string = response.data;

        return result;
    }
    catch(error){
        throw new Error(`${error}`);
    }
}