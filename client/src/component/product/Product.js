import { Container, Grid, Grow, Paper, Box, Typography, TextField } from '@material-ui/core'
import React from 'react'
import useStyle from "./style"

const src = "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
export const Product = ({ product = {} }) => {
    const classes = useStyle()
    return (

        <Container >
            <div className={classes.toolbar} />
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} >
                    <Paper variant="outlined" >
                        <img className={classes.image} src={src} alt="alt" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box p={1} m={1} bgcolor="background.paper">
                        <Typography variant="h6" color="textPrimary">
                            pruduct
                        </Typography>
                    </Box>
                    <Box display="flex" p={1} m={1} bgcolor="background.paper">
                        <Typography >
                            Price :2550£
                        </Typography>
                    </Box>
                    <Box display="flex" p={1} m={1} bgcolor="background.paper">
                        <Typography variant="subtitle1" paragraph>
                            Discription :Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.
                        </Typography>
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
                                2550£
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
                                In Stock
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
                                defaultValue="1"
                                variant="outlined"
                                inputProps={{ min: 1 }}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
