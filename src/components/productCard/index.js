import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import UseStyles from "./styles";

const ProductCard = ({ product, addToCart }) => {
  const classes = UseStyles();
  const { id, image, title, price, category } = product;
  return (
    <Card className={classes.root}>
      <Link to={`/product/${id}`}>
        <CardMedia className={classes.media} image={image} title={title} />
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6">
            <Box fontWeight="fontWeightBold" m={1}>
              ${price}
            </Box>
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: category }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => addToCart(product)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withRouter(ProductCard);
