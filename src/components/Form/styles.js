import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';


export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}));


export const RootContainer = styled('div')(({ theme }) => ({
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
    },
}));


export const StyledForm = styled('form')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
});


export const FileInputDiv = styled('div')({
    width: '97%',
    margin: '10px 0',
});


export const SubmitButtonStyles = {
    marginBottom: 10,
};

