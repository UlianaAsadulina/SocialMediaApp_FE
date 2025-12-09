import { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


export default function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        // store the actual File object here temporarily
        selectedFile: null
    });

    // State to hold the file object from the input
    const [selectedFile, setSelectedFile] = useState(null);

    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: null });
        setSelectedFile(null); // Clear the file state as well
        // Reset the file input visually
        document.getElementById("file-input-cloudinary").value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new FormData object to combine text and file data
        // FormData is the standard way to send files in a web request
        const formData = new FormData();
        formData.append('creator', postData.creator);
        formData.append('title', postData.title);
        formData.append('message', postData.message);
        // Join tags back into a comma-separated string for the backend
        formData.append('tags', Array.isArray(postData.tags) ? postData.tags.join(',') : postData.tags);

        // Append the file object
        if (selectedFile) {
            formData.append('selectedFile', selectedFile);
        }

        // In your Redux action (createPost/updatePost), you will need to handle 
        // the FormData object and send it to your backend with the file.

        if (currentId === 0) {
            // Pass the FormData object to the action
            dispatch(createPost(formData));
        } else {
            // Pass the ID and the FormData object to the action
            dispatch(updatePost(currentId, formData));
        }

        clear();
    };

    const handleFileChange = (e) => {
        // Store the actual file object, not the Base64 string
        setSelectedFile(e.target.files[0]);
    };

    return (
        <Paper sx={{ padding: '20px', margin: '20px 0' }} elevation={3}>
            <form
                autoComplete="off"
                noValidate
                // Note: The form needs to support multipart/form-data for file uploads, 
                // which the browser handles automatically when sending FormData
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': {
                        margin: '10px 0',
                    },
                }}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {currentId ? `Editing "${post?.title || 'Memory'}"` : 'Creating a Memory'}
                </Typography>

                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (comma separated)"
                    fullWidth
                    value={postData.tags}
                    // When loading from Redux, tags is an array. 
                    // When typing, it's a string.
                    // This handles both, converting a string to an array for submission.
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />

                {/* File Input for Cloudinary Upload */}
                <div style={{ width: '97%', margin: '10px 0 0 0' }}>
                    <input
                        id="file-input-cloudinary"
                        type="file"
                        onChange={handleFileChange}
                        style={{ width: '100%' }}
                    />
                </div>

                <Button
                    sx={{ marginBottom: '10px', marginTop: '10px' }}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

