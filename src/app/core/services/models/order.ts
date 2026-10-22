
export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  userId: number;
  orderDate: string;
  totalAmount: number;
  status: string;
  orderItems: OrderItem[];
}
