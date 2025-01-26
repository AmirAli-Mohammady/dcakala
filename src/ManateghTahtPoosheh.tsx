import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';

const IranServiceMap = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Box>
        <Typography variant='h6' align='center' gutterBottom>
          شهرها و استان‌هایی که فروشگاه دی سی ای کالا قادر می‌باشد در آن نواحی
          خدمات نصب و گارانتی انجام دهد
        </Typography>
        <Box
          component='img'
          src='./assets/IranMap'
          alt='Iran service map'
          sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 2 }}
        />
      </Box>
      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            به طور معمول خدمات نصب مربوط به جک درب اتوماتیک، آیفون تصویری،
            دوربین مداربسته، درب شیشه‌ای، آژیرمند و قفل برقی در شهرهایی که در
            زیر نام برده می‌شود انجام می‌پذیرد.
          </Typography>
          <Typography variant='body1' gutterBottom>
            البته در هر زمان می‌توانید با تماس با فروشگاه دی سی ای کالا اطلاعات
            مربوط به نصب و گارانتی را از کارشناسان ما دریافت نمایید.
          </Typography>

          <Typography variant='body1' gutterBottom>
            <b>تهران و البرز:</b> تمام خدمات مربوط به نصب و گارانتی در شهرهای
            استان تهران و البرز توسط خدمات مرکزی دی سی ای کالا انجام می‌پذیرد.
          </Typography>

          <Typography variant='body1' gutterBottom>
            <b>آذربایجان شرقی:</b> شهرهای تبریز، دیبترسانسکو، آذرشهر، مراغه
            مبیان، سراب تحت پوشش نصب دی سی ای کالا می‌باشد.
          </Typography>

          <Typography variant='body1' gutterBottom>
            <b>اردبیل:</b> شهر اردبیل و شهرهای اطراف.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IranServiceMap;
