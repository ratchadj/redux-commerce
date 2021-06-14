import { combineReducers } from "redux";

import { loadingReducer } from "./loadingReducer";
import { productReducer, selectedProductReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  allProduct: productReducer,
  selectedProduct: selectedProductReducer,
  loading: loadingReducer,
  cart: cartReducer
});

export default reducers;
