import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Services: React.FC = () => {
  const services = [
    { icon: <LocalShippingIcon sx={{ color: "#ff7900", fontSize: 40 }} />, text: "ارسال سریع به سراسر کشور" },
    { icon: <MonetizationOnIcon sx={{ color: "#ff7900", fontSize: 40 }} />, text: "تضمین بازگشت وجه" },
    { icon: <PaymentIcon sx={{ color: "#ff7900", fontSize: 40 }} />, text: "تنوع در روش‌های پرداخت" },
    { icon: <SupportAgentIcon sx={{ color: "#ff7900", fontSize: 40 }} />, text: "پشتیبانی حین و بعد از فروش" },
  ];

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          color: "#ff7900",
          fontWeight: "bold",
          mb: 3,
          fontFamily: "'Vazir', sans-serif",
        }}
      >
        خدمات ما
      </Typography>
      <Grid container spacing={2} sx={{ direction: "rtl" }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                backgroundColor: "#f9f9f9",
                boxShadow: "1",
                borderRadius: 2,
              }}
            >
              {service.icon}
              <Typography variant="body1" sx={{ fontWeight: "bold", ml: 2 }}>
                {service.text}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
