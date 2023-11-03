import { createReducer } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  product_id: string;
  unit_price: number;
  quantity: number;
  subTotal: number;
}

interface OrderItem {
  product_id: string;
}

interface State {
  cart: CartItem[];
  order: OrderItem[];
  total: number;
  numberOfItem: number;
  orderList: any[];
}

const calculateTotal = (cart: CartItem[]): number => {
  let total = 0;
  for (let item of cart) {
    total = total + item.unit_price * item.quantity;
  }
  return total;
};

const customerCartReducer = createReducer<State>(
  { cart: [], order: [], total: 0, numberOfItem: 0, orderList: [] },
  {
    ADD_TO_CART: (state, action) => {
      let isExist = false;
      let addCart = state.cart.map((item) => {
        if (item.product_id === action.payload.product_id) {
          isExist = true;
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
            subTotal: item.unit_price * item.quantity,
          };
        }
        return item;
      });

      if (!isExist) {
        addCart = [
          ...addCart,
          {
            ...action.payload,
            subTotal: action.payload.unit_price * action.payload.quantity,
          },
        ];
      }

      return { ...state, cart: addCart, total: calculateTotal(addCart) };
    },

    DELETE_TO_CART: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item.product_id !== action.payload
      );
      return {
        ...state,
        cart: newCart,
        numberOfItem: newCart.length,
        total: calculateTotal(newCart),
      };
    },

    CHANGE_QUANTITY: (state, action) => {
      let cart = state.cart.map((item) => {
        if (item.product_id === action.payload.product_id) {
          return {
            ...item,
            quantity: action.payload.quantity,
            subTotal: item.unit_price * item.quantity,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: cart,
        numberOfItem: cart.length,
        total: calculateTotal(cart),
      };
    },

    CHECK_OUT: (state, action) => {
      const newOrder: OrderItem = {
        ...action.payload,
        date: new Date().toISOString(),
      };

      return {
        ...state,
        cart: [],
        order: [...state.order, newOrder],
        total: 0,
        numberOfItem: 0,
      };
    },

    DELETE_FROM_ORDER: (state, action) => {
      const newOrder = state.order.filter(
        (item) => item.product_id !== action.payload
      );
      return {
        ...state,
        order: newOrder,
      };
    },
  }
);

export default customerCartReducer;
