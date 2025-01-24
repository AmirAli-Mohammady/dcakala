import { Box, Button, TextField, Typography, Container } from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Box
        
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        {/* Logo */}
        <img
          src="https://www.dcakala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.34a07b94.png&w=256&q=75" 
          alt="Logo"
          style={{ marginBottom: '1rem', width: '120px', height: 'auto' }}
        />

        {/* Login Box */}
        <Box
          sx={{
            padding: '2rem',
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: '#fff',
            textAlign: 'center',
            fontFamily:'dana light'
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            ورود | ثبت نام
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            سلام! لطفا شماره تماس خود را وارد نمایید
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="شماره تماس"
            sx={{ marginBottom: '1.5rem' }}
          />

          <Button
            fullWidth
            variant="contained"
            color="warning"
            sx={{
              padding: '0.75rem',
              fontSize: '1rem',
              backgroundColor: '#ff6f00',
              '&:hover': {
                backgroundColor: '#ff8f00',
              },
            }}
          >
            ورود
          </Button>

          <Typography
            variant="caption"
            display="block"
            sx={{ marginTop: '1rem', color: 'gray' }}
          >
            ورود شما به معنی پذیرش شرایط دی‌سی‌ای کالا و قوانین حریم خصوصی است
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;