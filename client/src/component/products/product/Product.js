import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, CardActionArea } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AddShoppingCart } from "@material-ui/icons"
import useStyle from "./style"
import { addToCart } from '../../../store/cart'
import { Link } from 'react-router-dom'
import { addProductDetails } from '../../../store/product'
const Product = ({ product }) => {
    const classes = useStyle()
    const dispatch = useDispatch()

    const handeleAddtoCART = () => {
        dispatch(addToCart(product))
    }
    const handelProductClick = () => {
        dispatch(addProductDetails(product))

    }
    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to="/ProductScreen" onClick={handelProductClick}>
                <CardMedia className={classes.media} image={product.imageUrl} tiltle={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5" >
                            ${product?.price}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button variant="contained" className={classes.button} onClick={handelProductClick}>View</Button>
                <IconButton aria-label="add to card" onClick={handeleAddtoCART}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}
export default Product