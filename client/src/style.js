import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    image: {
        width: "100%"
    },
    container: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0px",
            marginRight: "0px",
        },
    },
}))