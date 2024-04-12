import { OrderDetail } from "./OrderDetail";

export interface Order{
    id:number;
    order_date:Date;
    total_price:number;
    customer_id:number;
    payment_id:number;
    order_details:OrderDetail[];
}