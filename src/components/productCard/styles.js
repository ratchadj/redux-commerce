import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        padding: theme.spacing(20),
        backgroundSize: "contain"
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));