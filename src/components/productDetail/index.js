import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { useEffect, useState } from "react";
import { handleSetSelectedProduct } from "../../actions/productAction";

const ProductDescription = () => {
  const classes = useStyles();
  const {id} = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  // const [loading, setLoading] = useState(false);
  // console.log(id);

  useEffect(() => {
    const fetchProduct = () => {
      console.log("handleSetSelectedProduct");
      dispatch(handleSetSelectedProduct(id));
    };
    fetchProduct();
  }, [dispatch,id]);
  console.log(selectedProduct)
  return ((Object.keys(selectedProduct).length <= 0)) ? (
    <div>Loading...</div>
  ) : (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2}>
        <Grid item key={1} xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.cardroot}>
            <CardMedia
              className={classes.cardmedia}
              image={selectedProduct[0].image}
              title={selectedProduct[0].title}
            />
          </Card>
        </Grid>
        <Grid item key={2} xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" component="h2">
            {selectedProduct[0].title}
          </Typography>

          <Typography variant="h4" component="h2">
            <Box fontWeight="fontWeightBold" m={1}>
              $ {selectedProduct[0].price}
            </Box>
          </Typography>

          <Typography
            dangerouslySetInnerHTML={{ __html: selectedProduct[0].description }}
            variant="body2"
            color="textSecondary"
          />

          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
          >
            add to cart
          </Button>
        </Grid>
      </Grid>
    </main>
  );
};

export default withRouter(connect((state) => ({
  selectedProduct: state.selectedProduct,
  loading: state.loading,
}))(ProductDescription));
