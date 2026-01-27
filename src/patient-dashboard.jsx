
import { Box, Typography, Grid, styled } from '@mui/material';
import { DotLottiePlayer } from '@dotlottie/react-player';
import Appointment from './Animation/Appointment.json';
import Emergency from './Animation/Emergency.json';
import Bed from './Animation/Hospitalbed.json';
import  Document from './Animation/document.json';
import  Billing from './Animation/abouthospital.json';

import Abouthospital from './Animation/abouthospital.json';


import { StyledDashboardButton } from './Common/StyledButton.jsx';

const LottieContainer = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});


const Dashboard = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h4" gutterBottom sx={{marginLeft:"40%",marginBottom:"70px",color:"black",fontWeight:"700"}}>
        Patient Dashboard
      </Typography>
      <Grid container spacing={4}>
        {/* First Row */}
        <Grid size={{ xs: 12, sm: 6, md:4  }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledDashboardButton href='patient-dashboard/appointment'>
              <LottieContainer>
                <DotLottiePlayer
                  src={Appointment}
                  autoplay
                  loop
                  style={{background:"#fff",
                    width:"100%",
                    height:"100%",
                    borderRadius:"20px",
                  }}
                />
              </LottieContainer>
            </StyledDashboardButton>
            <Typography variant="h5" align="center">Appointment</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledDashboardButton href='patient-dashboard/emergency'>
              <LottieContainer>
                <DotLottiePlayer
                  src={Emergency}
                  autoplay
                  loop
                  style={{background:"#fff",
                    width:"100%",
                    height:"100%",
                    borderRadius:"20px",
                  }}
                />
              </LottieContainer>
            </StyledDashboardButton>
            <Typography variant="h5" align="center">Emergency</Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md:4  }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledDashboardButton href='/patient-dashboard/availablebedhospital'>
              <LottieContainer>
                <DotLottiePlayer
                  src={Bed}
                  autoplay
                  loop
                  style={{background:"#fff",
                    width:"100%",
                    height:"100%",
                    borderRadius:"20px",
                  }}
                />
              </LottieContainer>
            </StyledDashboardButton>
            <Typography variant="h5" align="center">Available Bed</Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledDashboardButton href='/patient-dashboard/issued-document'>
              <LottieContainer>
                <DotLottiePlayer
                  src={Document}
                  autoplay
                  loop
                  style={{background:"#fff",
                    width:"100%",
                    height:"100%",
                    borderRadius:"20px",
                  }}
                />
              </LottieContainer>
            </StyledDashboardButton>
            <Typography variant="h5" align="center">Issued Document</Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md:4  }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledDashboardButton href='/patient-dashboard/billing'>
              <LottieContainer>
                <DotLottiePlayer
                  src={Billing}
                  autoplay
                  loop
                  style={{background:"#fff",
                    width:"100%",
                    height:"100%",
                    borderRadius:"20px",
                  }}
                />
              </LottieContainer>
            </StyledDashboardButton>
            <Typography variant="h5" align="center">Billing</Typography>
          </Box>
        </Grid>
        
        

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledDashboardButton href='/patient-dashboard/about-hospital'>
              <LottieContainer>
                <DotLottiePlayer
                  src={Abouthospital}
                  autoplay
                  loop
                  style={{background:"#fff",
                    width:"100%",
                    height:"100%",
                    borderRadius:"20px",
                  }}
                />
              </LottieContainer>
            </StyledDashboardButton>
            <Typography variant="h5" align="center">About Hospital</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
