import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Header from "./Header";
import CartItem from "./CartItem";
import CartDetails from "./CartDetails";
import Services from "./Services";
import CustomStepper from "./CustomStepper"; // Adjust the path as needed

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "آیفون تصویری تابا مدل TVD-5-43",
      price: 1960000,
      color: "سفید",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCost = 30000;
  const discount = 50000;

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <CustomStepper activeStep={0} />
        {cartItems.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              mt: 5,
              p: 4,
              borderRadius: 2,
              backgroundColor: "#f9f9f9",
              boxShadow: "1",
            }}
          >
            <Typography variant="h4" sx={{ color: "#ff7900", fontWeight: "bold" }}>
              سبد خرید شما خالی است!
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: "flex", mb: 4 }}>
            <Box
              sx={{
                flexGrow: 1,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                p: 3,
                mr: 1,
                boxShadow: "1",
                backgroundColor: "#ffffff",
              }}
            >
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onQuantityChange={handleQuantityChange}
                  onDelete={handleDelete}
                />
              ))}
            </Box>
            <CartDetails
              totalPrice={totalPrice}
              shippingCost={shippingCost}
              discount={discount}
            />
          </Box>
        )}
        <Services />
      </Container>
    </>
  );
};

export default CartPage;
