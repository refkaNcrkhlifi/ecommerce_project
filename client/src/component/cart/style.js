import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    button: {
        width: "100%",
        textTransform: "none",
        marginRight: theme.spacing(1),
        padding: theme.spacing(1),
        fontSize: '18px',
    },
}))