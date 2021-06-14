import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Link,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();
  const cartURL = "";
  const totalCart = 1;
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link href="/">
              <img
                src={logo}
                alt="ratchada.commerce"
                height="25px"
                className={classes.image}
              />
              Commerce
            </Link>
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton
              aria-label="Show cart items"
              color="inherit"
              href={cartURL}
              target="_blank"
            >
              <Badge badgeContent={totalCart} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
