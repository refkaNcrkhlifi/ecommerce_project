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
import { Product } from "./component/productScreen/Product";
function App() {
  const classes = useStyle()
  const [products, setProducts] = useState([])
  const [sideToggle, setSideToggle] = useState(false)
  const fetchProdicts = async () => {
    const { data } = await axios.get('http://localhost:3103/products')
    setProducts(data)
  }

  useEffect(() => {
    fetchProdicts()
  }, [])
  const showSideDrawer = () => setSideToggle(true)
  return (
    <Router>
      <NavBar showSideDrawer={showSideDrawer} />
      <SideDrawer show={sideToggle} setSideToggle={setSideToggle} />
      <Switch>
        <Route exact path="/"  >
          <Products products={products} />

        </Route>
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Product" component={Product} />
      </Switch>
    </Router >
  );
}

export default App;
