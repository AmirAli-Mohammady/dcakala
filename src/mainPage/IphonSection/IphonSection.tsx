import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { IphonProductCard } from "./data";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function FastSend() {
  return (
    <Button
      variant="contained"
      startIcon={<RocketLaunchIcon />}
      sx={{
        padding: "4px 8px",
        display:'flex',
        gap:'10px',
        justifyContent: "center",
        backgroundColor: "#009688",
        fontFamily: "dana light",
        fontWeight: "500",
        borderRadius: "20px",
        top: "50%",
        right: "10px",
        position: "absolute",
      }}
      onClick={(e) => e.preventDefault()}
    >
      ارسال سریع
    </Button>
  );
}

export const IphonSection = () => {
  return (
    <Box mt={"50px"}>
      <Grid container spacing={2}>
        {IphonProductCard.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card
              variant="outlined"
              sx={{ height: "400px", position: "relative" }}
            >
              <CardMedia
                component="img"
                image={data.imgUrl}
                alt={data.description}
                sx={{ height: "200px" }} 
              />
              <CardContent>
                {data.fastSend && <FastSend />}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mt: data.fastSend ? "50px" : "20px" }} 
                >
                  {data.description}
                </Typography>
                <Typography
                  mt={"10px"}
                  textAlign={"end"}
                  variant="h6"
                  fontWeight={"bold"}
                  fontFamily={"dana light"}
                >
                  {data.price} <span>تومان</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
