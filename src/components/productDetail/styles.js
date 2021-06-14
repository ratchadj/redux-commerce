import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  cardroot: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  cardmedia: {
    padding: theme.spacing(20),
    backgroundSize: "contain"
  },
}));