import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    button: {
        margin: theme.spacing(1),
        fontSize: '30px'
    },

    drawerPaper: {
        width: '30%',
        justifyContent: 'center',
        alignItems: "center"

    },
}))