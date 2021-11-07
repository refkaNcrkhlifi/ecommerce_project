import { Container, Grid, Grow, Paper, Box, Typography, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cart'
import useStyle from "./style"

export const ProductScreen = () => {
    const [qty, setqty] = useState(1)
    const product = useSelector((state) => state?.productDetails);
    const classes = useStyle()
    const dispatch = useDispatch()

    const handeleAddtoCART = () => {
        dispatch(addToCart(product, qty))
    }
    return (

        <Container >
            <div className={classes.toolbar} />
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} >
                    <Paper variant="outlined" >
                        <img className={classes.image} src={product.imageUrl} alt="alt" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box p={1} m={1} bgcolor="background.paper">
                        <Typography variant="h6" color="textPrimary">
                            {product.name}
                        </Typography>
                    </Box>
                    <Box display="flex" p={1} m={1} bgcolor="background.paper">
                        <Typography >
                            ${product?.price}
                        </Typography>
                    </Box>
                    <Box display="flex" p={1} m={1} bgcolor="background.paper">
                        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />

                    </Box>

                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box display="flex" p={1} m={1} bgcolor="background.paper">
                        <Box p={1} className={classes.label}>
                            <Typography >
                                Price:
                            </Typography>
                        </Box>
                        <Box p={1} >
                            <Typography >
                                ${product?.price}
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" p={1} m={1} bgcolor="background.paper">
                        <Box p={1} className={classes.label}>
                            <Typography >
                                Status:
                            </Typography>
                        </Box>
                        <Box p={1} >
                            <Typography >
                                {product?.inStock === true ? "In Stock" : "not in stock"}
                            </Typography>

                        </Box>
                    </Box>
                    <Box display="flex" p={1} m={1} bgcolor="background.paper">
                        <Box p={1} className={classes.label}>
                            <Typography >
                                Qty:
                            </Typography>

                        </Box>
                        <Box p={1} >
                            <TextField
                                id="Qty"
                                label="Qty"
                                type="Number"
                                defaultValue={qty}
                                variant="outlined"
                                inputProps={{ min: 1 }}
                                onChange={(e) => { setqty(e.target.value) }}
                            />
                        </Box>
                    </Box>
                    <Box display="flex" p={1} m={1} bgcolor="background.paper">
                        <Box p={1} >
                            <Button variant="contained" className={classes.button} onClick={handeleAddtoCART}>Add to card</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
