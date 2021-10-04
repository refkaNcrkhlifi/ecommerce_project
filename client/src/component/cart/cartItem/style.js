import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    cartItem: {
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center',

        alignContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0px",
            marginRight: "0px",
        },

    },
    title: {
        marginRight: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            fontSize: "14px"
        },

    },
    price: {
        marginRight: theme.spacing(3),
        alignSelf: "centre"
    },
    image: {
        width: "100px",
        height: "75",
        marginRight: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(1),
            width: "50px",
            height: "50px",
        },
    },
    textField: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: "60px",
        // height: "30px",
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(1),
            width: "30px",
            // height: "25px",
        },
    },
    grow: {
        flexGrow: 1,
    },
}))