import { footerFirstSectionData, foooterSecendSectionData, img } from "./data";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PinDropIcon from "@mui/icons-material/PinDrop";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box dir="rtl">
      {/* First Section */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {footerFirstSectionData.map((data) => (
            <Grid item key={data.title} xs={12} sm={6} md={4} lg={3}>
              <Box display="flex" alignItems="center" gap={2}>
                <Stack>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    fontWeight="bold"
                    className="footer-title"
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="footer-text"
                  >
                    {data.paragraf}
                  </Typography>
                </Stack>
                <img
                  src={data.img}
                  style={{ width: 45, height: 45 }}
                  alt={data.title}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Second Section */}
<<<<<<< HEAD
      <Box className="second-section" sx={{ backgroundColor: "#72777A", color: "#fff", py: 4 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Images */}
            <Grid item xs={12} sm={6} md={3} order={{ xs: 4, md: 1 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {img.map((data) => (
                  <Box key={data.firstImg} sx={{ mb: 2 }}>
                    <img src={data.secendImg} alt="Second Img" />
                    <img src={data.firstImg} alt="First Img" />
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Last Categories */}
            <Grid item xs={12} sm={6} md={3} order={{ xs: 1, md: 2 }}>
              <Typography variant="h6" gutterBottom>{foooterSecendSectionData[1]?.firstTitle}</Typography>
              <ul className="footer-list">
                {foooterSecendSectionData[1]?.firstlistItem?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Grid>

            {/* About */}
            <Grid item xs={12} sm={6} md={3} order={{ xs: 2, md: 3 }}>
              <Typography variant="h6" gutterBottom>{foooterSecendSectionData[2]?.secendTitle}</Typography>
              <ul className="footer-list">
                {foooterSecendSectionData[2]?.secendListItem?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Grid>

            {/* Customer Services */}
            <Grid item xs={12} sm={6} md={3} order={{ xs: 3, md: 4 }}>
              <Typography variant="h6" gutterBottom>{foooterSecendSectionData[3]?.thirdTitle}</Typography>
              <ul className="footer-list">
                {foooterSecendSectionData[3]?.thirdListItem?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Container>
=======
      <Box>
        <Box
          sx={{
            backgroundColor: "#72777A",
            color: "#fff",
            fontSize: "16px",
            width: "100%",
          }}
          className="secendSection pt-4 pb-4 d-flex justify-content-between"
        >
          {img.map((data) => (
            <Box className="order-4 mt-4 ms-4 pt-4 ">
              <img src={data.secendImg} alt="" />
              <img src={data.firstImg} alt="" />
            </Box>
          ))}
          <div className=" first order-3">
            {foooterSecendSectionData.map((data) => (
              <div>
                <b>{data.firstTitle}</b>
                <ul className="mt-3">
                  {data.firstlistItem?.map((item) => (
                    <li className="pb-3 " key ={item.length}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="order-2">
            {foooterSecendSectionData.map((data) => (
              <div>
                <b className="mb-3">{data.secendTitle}</b>
                <ul className="mt-3">
                  {data.secendListItem?.map((item) => (
                    <li className="pb-3">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="order-1 me-5">
            {foooterSecendSectionData.map((data) => (
              <div>
                <b className="pb-3">{data.thirdTitle}</b>
                <ul className="mt-3">
                  {data.thirdListItem?.map((item) => (
                    <li className="pb-3">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Box>
>>>>>>> b4c232b (finished)
      </Box>

      {/* Contact Section */}
      <Box sx={{ backgroundColor: "#ff7900", py: 3 }}>
        <Container maxWidth="xl" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              px: 4,
              py: 1,
              fontFamily: "dana light",
            }}
          >
            پرداخت سریع
          </Button>
          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
            {[XIcon, FacebookIcon, LinkedInIcon, YouTubeIcon, InstagramIcon].map(
              (Icon, idx) => (
                <IconButton key={idx}>
                  <Icon sx={{ color: "#fff", width: "35px", height: "35px" }} />
                </IconButton>
              )
            )}
          </Stack>
        </Container>
      </Box>

      {/* Address Section */}
      <Box sx={{ backgroundColor: "#A1A3A8", py: 3, color: "white" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {/* Map and Address */}
            <Grid item xs={12} sm={6} md={4}>
              <Stack alignItems="center">
                <img
                  src="https://dashboard.dcakala.com/public/img/cms-new/google-map/2024/09/googlemap-dcakala.webp"
                  alt="Map"
                  style={{ maxWidth: "100%" }}
                />
                <Stack direction="row" alignItems="center" gap={1}>
                  <PinDropIcon />
                  <Typography variant="h6">آدرس:</Typography>
                </Stack>
                <Typography>تهران,نارمک,ضلع جنوبی میدان 47 ,پلاک 8</Typography>
              </Stack>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} sm={6} md={4}>
              <Stack alignItems="center">
                <Stack direction="row" alignItems="center" gap={1}>
                  <PhoneInTalkIcon />
                  <Typography variant="h5">02172195</Typography>
                </Stack>
                <Typography variant="body2" textAlign="center">
                  اگر سوالی دارید با ما تماس بگیرید <br />
                  ساعت کاری ما: شنبه تا چهارشنبه 9 الی 18 پنج شنبه 9 الی 14
                  <br />
                  021-77132831-32 / 021-72195
                </Typography>
              </Stack>
            </Grid>

            {/* Logo */}
            <Grid item xs={12} sm={6} md={4}>
              <Stack alignItems="center">
                <img
                  src="../../public/logo/dcakala-logo-new-ns_2x.png"
                  alt="logo"
                  style={{ width: "156px", height: "66px" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Note */}
      <Box sx={{ backgroundColor: "#72777A", py: 2 }}>
        <Typography textAlign="center" color="white" fontFamily="dana light">
          کلیه حقوق این سایت متعلق به دی سی ای کالا می باشد
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
