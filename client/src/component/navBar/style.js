import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    image: {
        marginRight: '10px',
        height: "50px",
    },
    menu: {
        marginRight: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    links: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    menuIcon: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    grow: {
        flexGrow: 1,
    },

}));
