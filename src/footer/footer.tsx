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
  // List,
  // ListItem,
  // ListItemText,
} from "@mui/material";
import "./Footer.css"; 

const Footer = () => {
  return (
    <Box dir="rtl">
      <Container maxWidth="xl" sx={{ py: 4 }} >
        <Grid container spacing={4} justifyContent="center" >
          {footerFirstSectionData.map((data) => (
            <Grid item key={data.title} xs={12} sm={6} md={4} lg={3} >
              <Box display="flex" alignItems="center" gap={1} >
                <Stack >
                  <Typography
                    fontFamily={"dana light"}
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
                    fontFamily={'dana light'}
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
      </Box>
      <Box
        sx={{
          bgcolor: "#ff7900",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "30px",
            backgroundColor: "white",
            color: "black",
            width: "320px",
            height: "40px",
            alignSelf: "center",
            fontWeight: "bold",
            fontFamily: "dana light",
            marginRight: "10px",
          }}
        >
          پرداخت سریع
        </Button>
        <Stack direction={"row"} sx={{ fill: "white" }}>
          <Stack gap={"20px"} direction={"row"} sx={{ padding: "15px 15px" }}>
            <IconButton>
              <XIcon sx={{ color: "#fff", width: "35px", height: "35px" }} />
            </IconButton>
            <IconButton>
              <FacebookIcon
                sx={{ color: "#fff", width: "35px", height: "35px" }}
              />
            </IconButton>
            <IconButton>
              <LinkedInIcon
                sx={{ color: "#fff", width: "35px", height: "35px" }}
              />
            </IconButton>
            <IconButton>
              <YouTubeIcon
                sx={{ color: "#fff", width: "35px", height: "35px" }}
              />
            </IconButton>
            <IconButton>
              <InstagramIcon
                sx={{ color: "#fff", width: "35px", height: "35px" }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-evenly",
            backgroundColor: "#A1A3A8",
            gap: "50px",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Stack color={"white"}>
            <img
              src="https://dashboard.dcakala.com/public/img/cms-new/google-map/2024/09/googlemap-dcakala.webp"
              alt=""
            />
            <Stack direction={"row"} justifyContent={"center"}>
              <PinDropIcon />
              <Typography gutterBottom fontFamily={"dana light"} variant="h6">
                آدرس:
              </Typography>
            </Stack>
            <Typography justifySelf={"center"} fontFamily={"dana light"}>
              تهران,نارمک,ضلع جنوبی میدان 47 ,پلاک 8
            </Typography>
          </Stack>
          <Stack color={"white"}>
            <Stack direction={"row"} sx={{ justifyContent: "center" }}>
              <Typography
                sx={{ fontFamily: "dana light" }}
                gutterBottom
                variant="h5"
              >
                02172195
              </Typography>
              <PhoneInTalkIcon />
            </Stack>
            <br />
            <Typography
              variant="body1"
              sx={{
                wordWrap: "wrap",
                textAlign: "center",
                fontFamily: "dana light",
              }}
            >
              اگر سوالی دارید با ما تماس بگیرید <br />
              ساعت کاری ما: شنبه تا چهارشنبه 9 الی 18 پنج شنبه 9 الی 14
              <br />
              021-77132831-32 / 021-72195
            </Typography>
          </Stack>
          <Stack>
            <img
              style={{ width: "156px", height: "66px" }}
              src="../../public/logo/dcakala-logo-new-ns_2x.png"
              alt="logo"
            />
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Stack sx={{ backgroundColor: "#72777A" }}>
          <Typography
            sx={{ padding: "15px 0px" }}
            fontFamily={"dana light"}
            variant="body2"
            textAlign={"center"}
            color="white"
          >
            کلیه حقوق این سایت متعلق به دی سی ای کالا می باشد
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
