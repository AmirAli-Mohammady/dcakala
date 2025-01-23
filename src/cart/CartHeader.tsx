import CallIcon from "@mui/icons-material/Call";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CartHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <img
        style={{ width: "150px", height: "40px" }}
        src="https://dashboard.dcakala.com/public/images/setting/new-logo-dcakala/2024/10/new-logo-dcakala_original.webp"
        alt=""
      />
      <Box sx={{ display: "flex" }}>
        <CallIcon sx={{ color: "#009688" }} />
        <Typography variant="h6">
          &nbsp; مرکز تماس و پشتیبانی: &nbsp;
          <Link
            style={{ color: "#009688", textDecoration: "none" }}
            to="tel:02172195"
          >
            02172195
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
export default CartHeader;
