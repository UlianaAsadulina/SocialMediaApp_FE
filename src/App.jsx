import { Container, Grow } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2.jsx';

import Form from "./components/Form/Form.jsx"
import Posts from './components/Posts/Posts.jsx';
import camera from "./images/photo-camera_9195411.png"

import { StyledAppBar, HeadingStyle, ImageStyle } from './styles.js';

function App() {



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
