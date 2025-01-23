import CartHeader from "./CartHeader";
import PathContainer from "./PathContainer";
import CartSection from "./CartSection";
import { Container } from "@mui/material";

function CartPage ()  {

  return (
    <Container maxWidth="xl">
      <CartHeader />
      <PathContainer />
      <CartSection />
    </Container>
  );
};

export default CartPage;
