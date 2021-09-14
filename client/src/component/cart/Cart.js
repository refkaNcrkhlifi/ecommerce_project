import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { CartItem } from './cartItem/CartItem'
import useStyle from "./style"

const Cart = () => {
    const classes = useStyle()
    return (
        <div >
            <div className={classes.toolbar} />
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={9} >
                    <Typography variant="h4">
                        Shopping cart
                    </Typography>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Box p={1} m={1} bgcolor="background.paper">
                        <Typography variant="subtitle1" paragraph>
                            subtotal of(1) itms
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                            2550£
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


