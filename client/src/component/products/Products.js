import { Grid, CircularProgress, Typography } from '@material-ui/core'
import React from 'react'
import Product from "./product/Product"
import { useSelector } from "react-redux";
import useStyle from "./style"

const Products = () => {
    const classes = useStyle()
    const products = useSelector((state) => state?.product);
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            {!products.length ? <div>
                <Typography variant="h3" gutterBottom>Loding...</Typography>
                <CircularProgress />
            </div> :
                <Grid container spacing={2} justifyContent="center">
                    {products.map((product) => (
                        <Grid key={product._id} item xs={12} sm={6} md={4} lg={3} >
                            <Product product={product} />
                        </Grid>
                    ))}
                </Grid>
            }
        </main>
    )
}
export default Products