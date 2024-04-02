import { Box, Button, Typography } from "@mui/material";
import orderImg from "../assets/Order food-bro.svg";

const Order = () => {
  return (
    <Box paddingY={5}>
      <img src={orderImg} alt="order process" className="image-order" />
      <Typography
        sx={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
        Pesananmu Sedang Diproses
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          textAlign: "center",
          color: "text.secondary",
          marginTop: 1,
        }}>
        Mohon menunggu pesanan anda sedang diantarkan ke lokasi Anda
      </Typography>

      <Button
        href="/home"
        variant="contained"
        sx={{
          textTransform: "none",
          display: "flex",
          width: { xs: "90%", sm: "40%" },
          marginX: "auto",
          marginTop: 5,
          backgroundColor: "#0A9830",
          ":hover": {
            backgroundColor: "#0A9830",
          },
        }}>
        Beranda
      </Button>
    </Box>
  );
};

export default Order;
