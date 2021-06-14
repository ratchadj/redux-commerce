import React from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "../components";
import { handleAddToCart } from "../actions/cartAction";

const Home = () => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(handleAddToCart(product));
  };
  return (
    <div>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
