import { cartActionTypes } from "../constants/ActionTypes";
import axios from "axios";

export const setCartQty = (cartQty) => {
  return {
    type: cartActionTypes.SET_CART_QTY,
    payload: cartQty,
  };
};

export const addToCart = (product) => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const handleSetCartQty = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        return dispatch(setCartQty(response.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
};

export const handleAddToCart = (product) => {
  const qty = 1;
  const today = new Date();
  const date_ = today.getFullYear + "-" + today.getMonth +"-"+ today.getDate;
  return (dispatch) => {
    axios
      .put("https://fakestoreapi.com/carts/7", {
        userId: 3,
        date: date_,
        products: [{ productId: product.id, quantity: qty }],
      })
      .then((response) => {
        return dispatch(addToCart({ productId: product.id, qty }));
      })
      .catch((err) => {
        console.log("Err", err);
        alert(err);
      });
  };
};
