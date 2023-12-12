import { createReducer } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  id: string;
  unitPrice: number;
  quantity: number;
  subTotal: number;
}

interface OrderItem {
  id: string;
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
    total = total + item.unitPrice * item.quantity;
  }
  return total;
};

const customerCartReducer = createReducer<State>(
  { cart: [], order: [], total: 0, numberOfItem: 0, orderList: [] },
  {
    ADD_TO_CART: (state, action) => {
      let isExist = false;
      let addCart = state.cart.map((item) => {
        if (item.id == action.payload.id) {
          isExist = true;
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
            subTotal: item.unitPrice * item.quantity,
          };
        }
        return item;
      });

      if (!isExist) {
        addCart = [
          ...addCart,
          {
            ...action.payload,
            subTotal: action.payload.unitPrice * action.payload.quantity,
          },
        ];
      }

      return { ...state, cart: addCart, total: calculateTotal(addCart) };
    },

    DELETE_TO_CART: (state, action) => {
      const newCart = state.cart.filter((item) => item.id != action.payload);
      return {
        ...state,
        cart: newCart,
        numberOfItem: newCart.length,
        total: calculateTotal(newCart),
      };
    },

    CHANGE_QUANTITY: (state, action) => {
      let cart = state.cart.map((item) => {
        if (item.id == action.payload.productId) {
          return {
            ...item,
            quantity: action.payload.quantity,
            subTotal: item.unitPrice * item.quantity,
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
      const newOrder = state.order.filter((item) => item.id != action.payload);
      return {
        ...state,
        order: newOrder,
      };
    },
  }
);

export default customerCartReducer;
