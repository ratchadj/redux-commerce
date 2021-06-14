import { productActionTypes } from "../constants/ActionTypes";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case productActionTypes.SET_ALL_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const selectedProductReducer = (state = [], action) => {
  switch (action.type) {
    case productActionTypes.SET_SELECTED_PRODUCT:
      return [action.payload]
    default:
      return state;
  }
};
