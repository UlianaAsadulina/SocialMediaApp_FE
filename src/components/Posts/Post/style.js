import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

// 1. media: Styled on the MUI CardMedia component
export const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});


export const BorderDiv = styled('div')({
  border: 'solid',
});
// fullHeightCard: Styled on the MUI Card component
export const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%', // from fullHeightCard
  position: 'relative',
});

// overlay: Styled on a container div
export const OverlayDiv = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

// overlay2: Styled on a container div
export const OverlayDiv2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});


export const GridContainer = styled('div')({
  display: 'flex',
});

// details: Styled on a CardContent
export const DetailsDiv = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});


export const TitleTypography = styled('h2')({
  padding: '0 16px',
});

// Styled on the MUI CardActions component
export const StyledCardActions = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});