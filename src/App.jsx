import './App.css'
import { 
  Button,
  Grid,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import useStyles from './styles';
import React, { useEffect, useState } from 'react';
const data = [1,2,3,4,5,6,7,8,9,10];

function App() {
  const [classess, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('https://epress-api-mysql-jpd.vercel.app/classes'); // Use your deployed backend URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
              <AccountCircleOutlinedIcon className={classes.icons}/>
              <Typography variant='h6' >Seav Seyla</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container className={classes.container}  maxWidth="sm">
              <Typography variant="h2" align='center'  color="textPrimary" gutterBottom>This is section</Typography>
              <Typography variant="body1"  color="secondPrimary" align='center' paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores expedita fugiat sapiente. Facere repellendus blanditiis ex velit modi, mollitia quam perferendis quisquam quas quia illo animi fuga dignissimos ipsa rerum.</Typography>
            </Container>
          </div>
          <div className={classes.buttons}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant='contained' color='primary'>This button 1</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>This button 2</Button>
              </Grid>
            </Grid>
          </div>
          <Container className={classes.cardGrid}>
            <Grid container spacing={4} justifyContent={"center"}>
              {classess.map((item) => (
              <Grid key={item.class_id} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                  className={classes.cardMedia}
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390"
                    alt="green iguana"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.class_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
                
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
