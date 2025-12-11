import { CardContent, Button, Typography, IconButton } from '@mui/material';
// Icon Imports (icons moved to -material package)
// Corrected Icon Import
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';

// Import the styled components from the rewritten styles.js
import {
    StyledCard,
    StyledCardMedia,
    OverlayBox, 
    DetailsBox,
    StyledTitleContainer,
    StyledCardActions
} from './style.js';

export default function Post ({ post, setCurrentId }) {

    const dispatch = useDispatch();
    

    return (
        
        <StyledCard elevation={6}>            
            <StyledCardMedia
                image={post.selectedFile}
                title={post.title}
            />
            <OverlayBox sx={{ top: 20, left: 20 }}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </OverlayBox>

            
            <OverlayBox sx={{ top: 20, right: 20 }}>
                {/* Use IconButton for standard icon buttons */}
                <IconButton
                    aria-label="edit post"
                    size="small"                    
                    sx={{ color: 'inherit' }}
                    onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizIcon fontSize="medium" />
                </IconButton>
            </OverlayBox>

            
            <DetailsBox>
                <Typography variant="body2" color="textSecondary" component="h2">
                    { (post.tags) ? (post.tags.map((tag) => `#${tag} `)) : null}
                </Typography>
            </DetailsBox>

            
            <StyledTitleContainer>
                <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
            </StyledTitleContainer>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>

            
            <StyledCardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(likePost(post._id))}
                >
                    <ThumbUpAltOutlined fontSize="small" sx={{ mr: 1 }} />
                    Like {post.likeCount}
                </Button>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(deletePost(post._id))}
                >
                    <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
                    Delete
                </Button>
            </StyledCardActions>

        </StyledCard>
    );
};

