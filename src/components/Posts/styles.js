import { styled } from '@mui/material/styles';

// This is the container holding the grid of posts.
export const MainContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

// This is a utility style often applied to Grid components for spacing.

export const SmallMarginStyle = (theme) => ({
    margin: theme.spacing(1),
});

//This is a utility style often applied to a container for actions (like a loading indicator).
export const ActionDiv = styled('div')({
    textAlign: 'center',
});

