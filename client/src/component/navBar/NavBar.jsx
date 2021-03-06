import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import commerce from "../../asset/commerce.jpg";
import useStyle from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar({ showSideDrawer }) {
  const cartItems = useSelector((state) => state?.cart);
  const classes = useStyle();
  const getCardCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qte), 0);
  };
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="textPrimary" className={classes.title}>
          <img src={commerce} alt="RefNcr shop" className={classes.image} />
          RefNcr shop
        </Typography>
        <div className={classes.grow} />
        <div className={classes.menu}>
          <div className={classes.links}>
            <IconButton
              // edge="start"
              component={Link}
              to="/Cart"
              color="inherit"
              aria-label="shoping card"
            >
              <Badge badgeContent={getCardCount()} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Button component={Link} to="/">
              shop
            </Button>
          </div>
          <IconButton
            className={classes.menuIcon}
            onClick={() => showSideDrawer()}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
