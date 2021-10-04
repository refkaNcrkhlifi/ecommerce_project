import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './cartItem/CartItem'
import useStyle from "./style"

const Cart = () => {
    const classes = useStyle()
    const cartItems = useSelector((state) => state?.cart);
    const getCardCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qte), 0)
    }
    const getCardtotal = () => {
        return cartItems.reduce((total, item) => total + Number(item.price * item.qte), 0);
    };
    return (
        <div >
            <div className={classes.toolbar} />
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={9} >
                    <Typography variant="h4">
                        Shopping cart
                    </Typography>
                    {cartItems.map((item) => (
                        <CartItem product={item} />
                    ))}

                </Grid>
                <Grid item xs={12} sm={3} >
                    <Box p={1} m={1} bgcolor="background.paper">
                        <Typography variant="subtitle1" paragraph>
                            subtotal of({getCardCount()}) itms
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                            {getCardtotal()}£
                        </Typography>
                    </Box>
                    <Box p={1} m={1} bgcolor="background.paper">
                        <Button variant="contained" className={classes.button}>Proceed to checkout</Button>

                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cart


