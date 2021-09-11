import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    image: {
        width: "100%",
        height: "100%",
    },
    label: {
        width: "50%"
    },
}))