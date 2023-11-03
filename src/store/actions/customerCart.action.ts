import { createAction } from "@reduxjs/toolkit";

const addToCart = createAction<any>("ADD_TO_CART");
const deleteFromCart = createAction<string>("DELETE_TO_CART");
const changeQuantity = createAction<{ productId: string; quantity: number }>(
  "CHANGE_QUANTITY"
);
const checkOut = createAction<void>("CHECK_OUT");
const deleteFromOrder = createAction<string>("DELETE_FROM_ORDER");

export { addToCart, deleteFromCart, changeQuantity, checkOut, deleteFromOrder };
