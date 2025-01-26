import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#333", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#ff7900", ml: 1 }}
          >
            dcaKala
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", fontFamily: "'Vazir', sans-serif" }}
          >
            فروشگاه سیستم‌های حفاظتی
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ color: "#333", fontFamily: "'Vazir', sans-serif", ml: 1 }}
          >
            مرکز تماس و پشتیبانی:
          </Typography>
          <Typography variant="body1" sx={{ color: "#00796b", fontWeight: "bold" }}>
            0217195
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
