import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
const Content = () => {
  return (
    <Container maxWidth='xl'>
      <Outlet />
    </Container>
  );
};

export default Content;
