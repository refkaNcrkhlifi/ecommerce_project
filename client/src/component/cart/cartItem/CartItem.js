import { Box, IconButton, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStype from "./style"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch } from 'react-redux';
import { removeFromCart, addCquantity } from '../../../store/cart';
import { addProductDetails } from '../../../store/product';
import { Link } from 'react-router-dom';


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
    const handelProductClick = () => {
        dispatch(addProductDetails(product))

    }
    return (
        <div>
            <Box p={1} m={1} bgcolor="background.paper" className={classes.cartItem} onClick={handelProductClick}  >

                <img className={classes.image} src={product.imageUrl} alt="alt" component={Link} to="/ProductScreen" />



                <Typography variant="h6" className={classes.title} component={Link} to="/ProductScreen">
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
