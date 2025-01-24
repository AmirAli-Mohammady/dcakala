import { Box, Container, Typography } from "@mui/material";

const GiftCard = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: "10rem" }}>
        <Typography
          variant="h4"
          sx={{
            color: "var(--title-color)",
            fontWeight: "bold",
            textAlign: "center",
            mt: 3,
          }}
        >
          هدیه نقدی دی سی ای کالا چیست؟
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "700", wordSpacing: "3px", mt: 5 }}
        >
          هدیه نقدی به صورت کارت می باشد که در یکسری از محصولات دی سی ای کالا در
          جشنواره های فروش ارائه می گردد. <br />
          <br />
          دارنده این کارت می تواند به میزان اعتبار این کارت در خرید بعدی خود یا
          دوستانش تخفیف نقدی دریافت کند.دی سی ای کالا به ازای هر عدد از محصولات
          خود یک عدد کارت هدیه به خریدار خواهد داد.
        </Typography>
      </Box>
      <Box sx={{ pt: "1rem" }}>
        <Typography
          variant="h4"
          sx={{
            color: "var(--title-color)",
            fontWeight: "bold",
            textAlign: "center",
            mt: 3,
          }}
        >
          هدیه نقدی در آیفون تصویری
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "700", wordSpacing: "3px", mt: 5 }}
        >
          در آیفون های تصویری به علت اینکه امکان انتخاب یک پک چند واحدی وجود
          دارد ، دی سی ای کالا به ازای هر مانیتور یک کارت هدیه کلی خواهد داد.{" "}
          <br />
          <br /> به طور مثال با خرید یک پک ده واحدی آیفون تصویری ، ده عدد کارت
          هدیه 5000 تومانی به ازای هر واحد داده خواهد شد که مبلغی معالد 50000
          تومان خواهد شد. <br />
          <br />
          این هدیه به صورت تخفیف نقدی در خرید بعدی شما اعمال خواهد شد. این کارت
          قابل واگذاری می باشد به این نحو که هر کسی که دارنده این کارت باشد می
          تواند از این تخفیف استفاده نماید.
        </Typography>
      </Box>
      <Box sx={{ pt: "1rem" }}>
        <Typography
          variant="h4"
          sx={{
            color: "var(--title-color)",
            fontWeight: "bold",
            textAlign: "center",
            mt: 3,
          }}
        >
          چگونه دریافت وجه هدیه نقدی
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "700", wordSpacing: "3px", mt: 5 }}
        >
          ددر زمان خرید ، بعد از اینکه محصولات انتخاب شد و جهت پرداخت به صفحه
          سبد خرید منتقل شدید. <br />
          <br /> کد دریافتی بر روی کارت هدیه نقدری را طبق تصویر زیر وارد و تایید
          نمایید
        </Typography>
      </Box>
    </Container>
  );
};

export default GiftCard;
