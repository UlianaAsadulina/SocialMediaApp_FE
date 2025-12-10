import { Container, Grid, Grow } from '@mui/material';

import Form from "./components/Form/Form.jsx"
import Posts from './components/Posts/Posts.jsx';
import camera from "./images/photo-camera_9195411.png";

import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { getPosts } from './actions/posts.js';

import { StyledAppBar, HeadingStyle, ImageStyle } from './styles.js';


function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Container maxWidth='lg'>

        <StyledAppBar position='static' color='inherit'>

          <HeadingStyle variant='h2' align='center'>
            Journal

            <ImageStyle src={camera} alt="memories" height='80' />
          </HeadingStyle>
        </StyledAppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  )
}

export default App
