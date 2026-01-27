import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StyledDashboardButton = styled(Button)(({ theme,width,height,radius }) => ({
  width: width || '220px',
  borderRadius:radius||'20px',
  height: height || '200px',
  // backgroundColor: theme.palette.primary.main || '#F0F0F0',
  color: theme.palette.primary.contrastText || '#000',
  textAlign: 'center',
  border:"1px solid black",
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark || '#E0E0E0',
  },
}));