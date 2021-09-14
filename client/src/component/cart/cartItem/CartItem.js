import { Box, IconButton, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStype from "./style"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const src = "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"

export const CartItem = () => {
    const classes = useStype()
    return (
        <div>
            <Box p={1} m={1} bgcolor="background.paper" className={classes.cartItem} >

                <img className={classes.image} src={src} alt="alt" />



                <Typography variant="h6" className={classes.title}>
                    pruduct 1
                </Typography>


                <Typography className={classes.price}>
                    2550£
                </Typography>


                <Typography >
                    <TextField
                        className={classes.textField}
                        size="small"
                        id="Qty"
                        type="Number"
                        defaultValue="1"
                        // variant="outlined"
                        inputProps={{ min: 1 }}
                    />
                </Typography>


                <div className={classes.grow} />
                <IconButton >
                    <DeleteOutlineIcon />
                </IconButton>

            </Box>
        </div>
    )
}
