import React from 'react';
import {OrderDetailDTO} from './OrderDetailDTO'
  
export interface OrderDTO {
    total_price: number;
    customer_id: number;
    payment_id?: number;
    order_details: OrderDetailDTO[];
}
