import React from "react";
import { Box, Typography, Stack, Divider, Button } from "@mui/material";

interface CartDetailsProps {
  totalPrice: number;
  shippingCost: number;
  discount: number;
}

const CartDetails: React.FC<CartDetailsProps> = ({
  totalPrice,
  shippingCost,
  discount,
}) => {
  const finalPrice = totalPrice + shippingCost - discount;

  return (
    <Box
      sx={{
        flex: "0 0 30%",
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        p: 3,
        boxShadow: "1",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}>
        جزئیات سفارش
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack spacing={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>مبلغ کل:</Typography>
          <Typography>{totalPrice.toLocaleString()} تومان</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>هزینه ارسال:</Typography>
          <Typography>{shippingCost.toLocaleString()} تومان</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography>تخفیف:</Typography>
          <Typography color="error">-{discount.toLocaleString()} تومان</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            مبلغ نهایی:
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {finalPrice.toLocaleString()} تومان
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "#ff5722", fontWeight: "bold" }}
        >
          ادامه ثبت سفارش
        </Button>
      </Stack>
    </Box>
  );
};

export default CartDetails;
