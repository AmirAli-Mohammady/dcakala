import { Box, Typography, Container, Breadcrumbs, Link } from '@mui/material';

const InstallmentPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box fontFamily={'dana light'} pt={4}>
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            خانه
          </Link>
          <Typography color="text.primary">خرید اقساطی</Typography>
        </Breadcrumbs>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{ color: '#ff6f00', fontWeight: 'bold', textAlign: 'center', mt: 3 }}
        >
          خرید اقساطی از دی سی ای کالا
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          sx={{ color: '#00bcd4', textAlign: 'center', mt: 2, mb: 3 }}
        >
          مزایای خرید اقساطی چیست؟
        </Typography>

        {/* Description Text */}
        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2, lineHeight: 2 }}>
          در شرایط اقتصادی کنونی که هزینه های خرید کالا سرسام آور است، قدرت خرید را بالاتر برد. در واقع همانند
          این است که وام با بازپرداخت بلند مدت دریافت کرده اید و در این صورت به راحتی می توانید کالای مورد
          نیازتان را خریدارى کرده و هزینه ها را طی چند ماه تا یک سال پرداخت کنید.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2, lineHeight: 2 }}>
          خرید اقساطی به شما کمک می کند خیلی زیرکانه تر هزینه های خود را کنترل کنید و نیازی نیست نقدا به صورت یک
          جا هزینه ی کالای مورد نظرتان را پرداخت کنید.
        </Typography>

        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2, lineHeight: 2 }}>
          خرید اقساطی به شما امکان خرید آنی را می دهد به این صورت که در خریدهای ضروری و برنامه ریزی نشده نیاز
          نیست به مدت ها از قبل پس انداز کنید و می توانید در یک بازه زمانی مشخص هزینه های خود را مدیریت کنید.
        </Typography>
      </Box>
    </Container>
  );
};

export default InstallmentPage;