import Post from "./Post/Post.jsx";
import useStyles from "./styles.js"
 

export default function Posts() {
    const classes = useStyles();
    return (<>
        <h1> POSTS </h1>
        <Post />
        <Post />
    </>);
};