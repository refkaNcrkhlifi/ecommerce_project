import { Container } from "@material-ui/core";
import axios from "axios"
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import useStyle from "./style"
import Cart from "./component/cart/Cart";
import Drawer from '@material-ui/core/Drawer';
import NavBar from "./component/navBar/NavBar";
import Products from "./component/products/Products"
import SideDrawer from "./component/sideDrawer/SideDrawer";
import { ProductScreen } from "./component/productScreen/ProductScreen";
import { getProducts } from "./store/product";
import { useDispatch } from "react-redux";
function App() {
  const classes = useStyle()
  const dispatch = useDispatch()
  const [sideToggle, setSideToggle] = useState(false)


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  const showSideDrawer = () => setSideToggle(true)

  return (
    <Router>
      <NavBar showSideDrawer={showSideDrawer} />
      <SideDrawer show={sideToggle} setSideToggle={setSideToggle} />
      <Switch>
        <Route exact path="/"  >
          <Products />

        </Route>
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/ProductScreen" component={ProductScreen} />
      </Switch>
    </Router >
  );
}

export default App;
