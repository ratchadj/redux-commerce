import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../productCard";
import { handleSetAllProduct } from "../../actions/productAction";

import useStyles from "./styles";

const ProductList = ({addToCart}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProduct);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    const fetchProduct = () => {
      dispatch(handleSetAllProduct());
    };
    fetchProduct();
  }, [dispatch]);
  return (loading === true || (Object.keys(products[0]).length <= 0)) ? (
    <div>Loading...</div>
  ) : (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products[0].map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default withRouter(connect((state) => ({
  allProduct: state.allProduct,
  loading: state.loading,
}))(ProductList));
