import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0px",
            marginRight: "0px",
        },

    },
    title: {
        marginRight: theme.spacing(3),
    },
    price: {
        marginRight: theme.spacing(3),
    },
    image: {
        width: "150px",
        height: "100px",
        marginRight: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(1),
            width: "50px",
            height: "50px",
        },
    },
    textField: {
        marginLeft: theme.spacing(3),
        width: "60px",
        // height: "30px",
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(1),
            width: "auto",
            // height: "25px",
        },
    },
    grow: {
        flexGrow: 1,
    },
}))