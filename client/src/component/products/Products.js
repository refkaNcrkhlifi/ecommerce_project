import { Grid } from '@material-ui/core'
import React from 'react'
import Product from "./product/Product"
import useStyle from "./style"
// const products = [
//     { id: 1, name: "phone", description: "sumsung mobile phone", price: "$10" },
//     { id: 2, name: "labtop", description: "asus labtop", price: "$20" },
// ]
const Products = ({ products }) => {
    const classes = useStyle()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container spacing={2} justifyContent="center">
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default Products