import React from "react";
import { Container, Typography, Grid, Box, Divider } from "@mui/material";

const Takhfif: React.FC = () => {
  return (
    <Container   maxWidth="md">
      {/* Breadcrumbs */}
      <Box  mb={4} pt={10}>
        <Typography color="orange" variant="body2">
          خانه / تخفیف ها و پیشنهادات
        </Typography>
      </Box>

      {/* هدیه نقدی دی سی ای کالا */}
      <Grid  spacing={2}>
        <Grid  item xs={12}>
          <Typography textAlign={'center'} variant="h5" color="primary" gutterBottom>
            هدیه نقدی دی سی ای کالا چیست؟
          </Typography>
          <Typography variant="body1">
            هدیه نقدی به صورت کارت می‌باشد که در یکی‌سری از محصولات دی سی ای
            کالا در جشنواره های فروش ارائه می‌گردد. دارنده این کارت می‌تواند به
            میزان اعتبار این کارت در خرید بعدی خود یا دوستانش تخفیف نقدی دریافت
            کند. دی سی ای کالا به ازای هر عدد از محصولات خود یک عدد کارت هدیه به
            خریدار خواهد داد.
          </Typography>
        </Grid>

        {/* هدیه نقدی در آیفون تصویری */}
        <Grid item xs={12}>
          <Typography textAlign={'center'} variant="h5" color="primary" gutterBottom>
            هدیه نقدی در آیفون تصویری
          </Typography>
          <Typography variant="body1">
            در آیفون‌های تصویری به علت اینکه امکان انتخاب یک پک چند واحدی وجود
            دارد، دی سی ای کالا به ازای هر مانیتور یک کارت هدیه کلی خواهد داد.
          </Typography>
          <Typography variant="body1">
            به طور مثال با خرید یک پک ده واحدی آیفون تصویری، ده عدد کارت هدیه
            داده خواهد شد که مبلغی معادل ۵۰۰۰۰۰ تومان خواهد شد.
          </Typography>
          <Typography variant="body1">
            این هدیه به صورت تخفیف نقدی در خرید بعدی شما اعمال خواهد شد. این
            نحوه که هر کسی که دارنده این کارت باشد می‌تواند از این تخفیف استفاده
            نماید.
          </Typography>
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
        </Grid>

        {/* چگونه دریافت وجه هدیه نقدی */}
        <Grid item xs={12}>
          <Typography textAlign={'center'} variant="h5" color="primary" gutterBottom>
            چگونه دریافت وجه هدیه نقدی
          </Typography>
          <Typography variant="body1">
            در زمان خرید، بعد از اینکه محصولات انتخاب شد و جهت پرداخت به صفحه
            سبد خرید منتقل شدید. کد دریافتی بر روی کارت هدیه نقدی را طبق تصویر
            زیر وارد و تایید نمایید.
          </Typography>
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Takhfif;
