import { Box, IconButton, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStype from "./style"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch } from 'react-redux';
import { removeFromCart, addCquantity } from '../../../store/cart';


export const CartItem = ({ product }) => {
    const classes = useStype()
    const dispatch = useDispatch()
    const handeleDelteItm = () => {
        dispatch(removeFromCart(product._id))
    }
    const handeleQtychange = (e) => {
        const qty = e.target.value
        dispatch(addCquantity(product._id, qty))
    }
    return (
        <div>
            <Box p={1} m={1} bgcolor="background.paper" className={classes.cartItem} >

                <img className={classes.image} src={product.imageUrl} alt="alt" />



                <Typography variant="h6" className={classes.title}>
                    {product.name}
                </Typography>

                <Box className={classes.price}>
                    <Typography >
                        {product.price}£
                    </Typography>
                </Box>
                <div className={classes.grow} />
                <Box>
                    <TextField
                        className={classes.textField}
                        size="small"
                        id="Qty"
                        type="Number"
                        onChange={handeleQtychange}
                        value={product.qte}
                        inputProps={{ min: 1 }}

                    />
                </Box>
                <IconButton onClick={handeleDelteItm} >
                    <DeleteOutlineIcon />
                </IconButton>

            </Box>
        </div>
    )
}
