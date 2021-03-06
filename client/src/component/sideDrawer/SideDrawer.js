import { Badge, Button, Drawer, IconButton, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useStyle from './style'

const SideDrawer = ({ show, setSideToggle }) => {
    const classes = useStyle()
    const cartItems = useSelector((state) => state?.cart);

    const getCardCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qte), 0);
    };
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setSideToggle(open);
    };
    return (

        <Drawer open={show} onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)} className={classes.drawer} classes={{
                paper: classes.drawerPaper,
            }}>

            <IconButton
                // edge="start"
                component={Link}
                to="/Cart"
                color="inherit"
                aria-label="shoping card"
                fontSize="large"
            >
                <Badge badgeContent={getCardCount()} color="secondary" >
                    <ShoppingCart fontSize="large" />
                </Badge>
            </IconButton  >
            <Button component={Link} to="/" size="large" className={classes.button} >
                shop
            </Button>

        </Drawer>

    )
}
export default SideDrawer