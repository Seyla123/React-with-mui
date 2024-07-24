import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
// Create a theme
export const theme = createTheme();
const useStyles = makeStyles({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  icons : {
    marginRight : '10px'
  },
  buttons : {
    marginTop  : '20px'
  },
  card:{
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
  },
  cardGrid:{
    marginTop  : '20px',
    padding:"20px 0px"
  },
  cardContent:{
    flexGrow:'1'
  },
  cardMedain:{
    paddingTop:'56.25%',
  },
});

export default useStyles;