import axiosInstance from "../base.api";

const createOrder = async (requestBody: unknown) => {
  try {
    const response = await axiosInstance.post("/orders", requestBody);
    return response.data;
  } catch (error) {
    console.error("API Error", error);
    throw error;
  }
};

const getOrderByOrderId = async (orderId: string): Promise<any> => {
  try {
    const response = await axiosInstance.get(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("API Error", error);
    throw error;
  }
};

const getOrderDetailByOrderDetailId = async (
  orderDetailId: number
): Promise<any> => {
  try {
    const response = await axiosInstance.get(`/orders/detail/${orderDetailId}`);
    return response.data;
  } catch (error) {
    console.error("API Error", error);
    throw error;
  }
};

const deleteOrder = async (orderId: number): Promise<any> => {
  try {
    const response = await axiosInstance.delete(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("API Error", error);
    throw error;
  }
};

export default {
  createOrder,
  getOrderByOrderId,
  getOrderDetailByOrderDetailId,
  deleteOrder,
};
