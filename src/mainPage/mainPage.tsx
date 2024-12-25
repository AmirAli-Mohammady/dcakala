import {
  Box,
  Container,
  //   Grid,
  //   Typography,
  //   IconButton,
  //   Stack,
  //   Button,
  // List,
  // ListItem,
  // ListItemText,
} from "@mui/material";
import BestBrands from "./BestBrands/BestBrands";
import { BanerSlider } from "./BanerSlider/BanerSlider";
import { FirstSection } from "./FirstSection/FirstSection";
import { SecendSection } from "./SecendSection/SecendSection";
import { IphonSection } from "./IphonSection/IphonSection";
const MainPage = () => {
  return (
    <>
      <Box sx={{ paddingTop: "100px" }}>
        <BanerSlider  />
      </Box>
      <Container maxWidth='xl' >
        <FirstSection/>
        <SecendSection/>
        <IphonSection/>
        <BestBrands/>
      </Container>
    </>
  );
};
export default MainPage;
