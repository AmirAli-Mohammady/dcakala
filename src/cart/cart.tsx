import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  // useMediaQuery,
  Tooltip,
  Modal,
  Fade,
  Backdrop,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const styles = {
  fontFamily: "'dana light', sans-serif",
  buttonHover: {
    "&:hover": {
      backgroundColor: "#ff5722",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  cardHover: {
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  fadeIn: {
    "@keyframes fadeIn": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    animation: "fadeIn 1s",
  },
};

const CartPage: React.FC = () => {
  // const isMobile = useMediaQuery("(max-width:600px)");
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "محصول ۱",
      price: 100000,
      imageUrl: "https://picsum.photos/200/300",
      quantity: 2,
      color: "red",
      weight: 500,
    },
    {
      id: 2,
      name: "محصول ۲",
      price: 200000,
      imageUrl: "https://picsum.photos/200/300",
      quantity: 1,
      color: "blue",
      weight: 1000, 
    },
  ]);

  const [openModal, setOpenModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<number | null>(null);

  const handleDelete = (id: number) => {
    setSelectedItem(id);
    setOpenModal(true);
  };

  const confirmDelete = () => {
    if (selectedItem !== null) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== selectedItem)
      );
      setSelectedItem(null);
    }
    setOpenModal(false);
  };

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleCheckout = () => {
    console.log("ادامه به پرداخت");
  };

  // const totalWeight = cartItems.reduce(
  //   (acc, item) => acc + item.weight * item.quantity,
  //   0
  // );
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  

  return (
    <Container maxWidth="lg" sx={{ fontFamily: styles.fontFamily }}>
      {cartItems.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            p: 4,
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
            boxShadow: 3,
            ...styles.fadeIn,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#ff7900", fontWeight: "bold" }}
          >
            سبد خرید شما خالی است!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            محصولات جذابی را به سبد خرید اضافه کنید و از خرید خود لذت ببرید.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "#ff7900",
              color: "white",
              fontWeight: "bold",
              ...styles.buttonHover,
            }}
          >
            شروع خرید
          </Button>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
              direction: "rtl",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#ff7900", textAlign: "right", fontWeight: "bold" }}
            >
              سبد خرید
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff7900",
                color: "white",
                mr: "auto",
                ...styles.buttonHover,
              }}
              onClick={handleCheckout}
            >
              پرداخت
            </Button>
          </Box>

          <Grid container spacing={2} sx={{ mt: 2, direction: "rtl" }}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card
                  sx={{ borderRadius: 2, boxShadow: 3, ...styles.cardHover }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.imageUrl}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: 1 }}
                    >
                      {item.price.toLocaleString()} تومان
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                    >
                      <Tooltip title="افزایش تعداد">
                        <IconButton
                          aria-label="increase"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Tooltip>
                      <Typography>{item.quantity}</Typography>
                      <Tooltip title="کاهش تعداد">
                        <IconButton
                          aria-label="decrease"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                    <Tooltip title="حذف محصول">
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(item.id)}
                        sx={{ marginTop: 2 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ mt: 2, mb: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              direction: "rtl",
            }}
          >
            <Typography variant="body1">مجموع قیمت:</Typography>
            <Typography variant="body1">
              {totalPrice.toLocaleString()} تومان
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              direction: "rtl",
            }}
          >
            <Typography variant="body1">مجموع تعداد:</Typography>
            <Typography variant="body1">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </Typography>
          </Box>

          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openModal}>
              <Box
                sx={{
                  p: 4,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 24,
                  mx: "auto",
                  mt: "20vh",
                  maxWidth: 400,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">
                  آیا از حذف این محصول مطمئن هستید؟
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={2}
                  mt={2}
                >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={confirmDelete}
                  >
                    بله
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setOpenModal(false)}
                  >
                    خیر
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Modal>
          

          {/* بخش خدمات ما */}
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
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    backgroundColor: "#f9f9f9",
                    boxShadow: 3,
                    borderRadius: 2,
                    ...styles.cardHover,
                  }}
                >
                  <LocalShippingIcon sx={{ color: "#ff7900", fontSize: 40 }} />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", ml: 2 }}
                  >
                    ارسال سریع به سراسر کشور
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    backgroundColor: "#f9f9f9",
                    boxShadow: 3,
                    borderRadius: 2,
                    ...styles.cardHover,
                  }}
                >
                  <MonetizationOnIcon sx={{ color: "#ff7900", fontSize: 40 }} />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", ml: 2 }}
                  >
                    تضمین بازگشت وجه
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    backgroundColor: "#f9f9f9",
                    boxShadow: 3,
                    borderRadius: 2,
                    ...styles.cardHover,
                  }}
                >
                  <PaymentIcon sx={{ color: "#ff7900", fontSize: 40 }} />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", ml: 2 }}
                  >
                    تنوع در روش‌های پرداخت
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    backgroundColor: "#f9f9f9",
                    boxShadow: 3,
                    borderRadius: 2,
                    ...styles.cardHover,
                  }}
                >
                  <SupportAgentIcon sx={{ color: "#ff7900", fontSize: 40 }} />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", ml: 2 }}
                  >
                    پشتیبانی حین و بعد از فروش
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CartPage;
