import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({

    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        width: "80%",
        textTransform: "none",
        marginLeft: theme.spacing(1),
        fontSize: '18px',
    },
}))