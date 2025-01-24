import { Box, Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WalletIcon from "@mui/icons-material/Wallet";
import { useParams } from "react-router-dom";
import React from "react";

const hrStyle: React.CSSProperties = {
  border: "none",
  height: "6px",
  backgroundColor: "rgb(217, 217, 217)",
  width: "37%",
  marginTop: "2.7rem",
};
const style: React.CSSProperties = {
  color: "rgb(217, 217, 217)",
};
function PathContainer() {
  const { id } = useParams<{ id: string }>();
  const hrCondition =
    id === "address" ? { ...hrStyle, backgroundColor: "var(--theme-color)" } : hrStyle;
  const dynamicCondition =
    id === "address" ? { ...style, color: "var(--theme-color)" } : style;
  return (
    <Box
      sx={{
        border: `1px solid var(--border-color)`,
        borderRadius: "10px",
        marginTop: "1rem",
        padding: "3rem .7rem",
      }}
    >
      <Container
        sx={{ display: "flex", justifyContent: "space-between" }}
        maxWidth="xl"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ShoppingCartIcon sx={{ color: "var(--theme-color)", fontSize: "2rem" }} />
          <CheckCircleIcon sx={{ color: "var(--theme-color)", fontSize: "3rem" }} />
          <Typography
            sx={{ color: "orange", fontSize: "20px", fontWeight: "bold" }}
          >
            سبد خرید
          </Typography>
        </Box>
        <hr className="checkout-divider" style={hrCondition} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LocationOnIcon sx={[dynamicCondition, { fontSize: "2rem" }]} />
          <CheckCircleIcon sx={[dynamicCondition, { fontSize: "3rem" }]} />
          <Typography
            sx={[dynamicCondition, { fontSize: "20px", fontWeight: "bold" }]}
          >
            آدرس و نحوه ارسال
          </Typography>
        </Box>
        <hr className="checkout-divider" style={hrCondition} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <WalletIcon sx={[dynamicCondition, { fontSize: "2rem" }]} />
          <CheckCircleIcon sx={[dynamicCondition, { fontSize: "3rem" }]} />
          <Typography
            sx={[dynamicCondition, { fontSize: "20px", fontWeight: "bold" }]}
          >
            روش پرداخت
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default PathContainer;
