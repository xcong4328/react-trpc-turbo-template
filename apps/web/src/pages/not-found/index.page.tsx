import {
    Box,
    Card,
    CardMedia,
    Container,
    Link as MuiLink,
    type Theme,
    Typography,
    useMediaQuery,
  } from '@mui/material';
  import { createLink } from '@tanstack/react-router';
  
  const RouterLink = createLink(MuiLink);
  
  export const NotFoundPage = () => {
    const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
    return (
      <Container>
        <Card
          sx={{
            maxWidth: 600,
            mx: 'auto',
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardMedia component="img" src="/undraw/page-not-found.svg" />
          <Box sx={{ m: 4, textAlign: 'center' }}>
            <Typography variant="h4" align="center">
              ページが
              {isMobile && <br />}
              見つかりません
            </Typography>
            <Typography align="center" sx={{ mt: 2 }}>
              <RouterLink to="/">トップへ</RouterLink>
            </Typography>
          </Box>
        </Card>
      </Container>
    );
  };
  