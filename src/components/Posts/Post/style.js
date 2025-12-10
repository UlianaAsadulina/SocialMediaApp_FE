import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardActions } from '@mui/material';


export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
  
}));

export const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});


export const OverlayBox = styled('div')({
    position: 'absolute',
    color: 'white',
  
});



export const DetailsBox = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});


export const StyledTitleContainer = styled('div')({
    padding: '0 16px',
});


export const StyledCardActions = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});

