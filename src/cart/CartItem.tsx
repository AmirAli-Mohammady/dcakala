import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  color: string;
  quantity: number;
  onQuantityChange: (id: number, delta: number) => void;
  onDelete: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  color,
  quantity,
  onQuantityChange,
  onDelete,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          رنگ: {color}
        </Typography>
      </Box>
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton onClick={() => onQuantityChange(id, 1)}>
          <AddIcon />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton onClick={() => onQuantityChange(id, -1)}>
          <RemoveIcon />
        </IconButton>
      </Stack>
      <Typography>{(price * quantity).toLocaleString()} تومان</Typography>
      <IconButton onClick={() => onDelete(id)} color="error">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem;
