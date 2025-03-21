import { Container, AppBar, Typography, Grow, Grid2, SpeedDialIcon} from '@mui/material';

import Form from "./components/Form/Form.jsx"
import Posts from './components/Posts/Posts.jsx';
import camera from "./images/photo-camera_9195411.png"

import useStyles from "./styles.js"

function App() {

  const classes = useStyles();

  return (
    <>
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar}  position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>Journal
            <img className={classes.image} src={camera} alt="memories" height='80'  />
          </Typography>
          
        </AppBar>
        <Grow in>
          <Container>
            <Grid2 container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid2 item xs={12} sm={7}>
                <Posts />

              </Grid2>
              <Grid2 item xs={12} sm={4}>
                <Form />
              </Grid2>
            </Grid2>
          </Container>

        </Grow>
      </Container>
    </>
  )
}

export default App
