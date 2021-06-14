import { productActionTypes } from "../constants/ActionTypes";

export function loadingReducer(state = true, action){
  switch (action.type) {
    case productActionTypes.SET_ALL_PRODUCT:
      return false;
    case productActionTypes.SET_SELECTED_PRODUCT:
        return false;
    default:
      return state;
  }
};
