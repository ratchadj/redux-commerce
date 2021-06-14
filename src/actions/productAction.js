import { productActionTypes } from "../constants/ActionTypes";
import axios from "axios";

export const setAllProduct = (products) => {
  return {
    type: productActionTypes.SET_ALL_PRODUCT,
    payload: products,
  };
};

export const setSelectedProduct = (product) => {
  return {
    type: productActionTypes.SET_SELECTED_PRODUCT,
    payload: product,
  };
};

export const handleSetAllProduct = () => {
  return async (dispatch) => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
          return dispatch(setAllProduct(response.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }
};

export const handleSetSelectedProduct = (productId) => {
  return async (dispatch) => {
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log(response.data)
          return dispatch(setSelectedProduct(response.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }
};
