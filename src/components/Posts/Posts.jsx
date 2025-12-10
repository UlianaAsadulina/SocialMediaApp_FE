import { useSelector } from "react-redux";
import { Grid, CircularProgress, Box } from '@mui/material';

import Post from "./Post/Post.jsx";

export default function Posts({ setCurrentId }) {






    //get state from Redux
    const posts = useSelector((state) => state.posts);



    return (
        // Check if posts are loaded. If not, show the spinner.

        !posts?.length ? (
            // Using Box for centering that spinner
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        ) : (
            <Grid
                container
                alignItems="stretch"
                spacing={3}
            // sx={{ margin: '30px 0', padding: 0 }} 
            >
                {posts.map((post) => (

                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};