import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import ayamGorengImg from "../assets/ayam-goreng.jpg";
import RestoInfoCard from "../components/RestoInfoCard";
import FoodInfoCard from "../components/FoodInfoCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorSnackbar from "../components/ErrorSnackbar";

const foodData = [
  {
    id: 1,
    nama: "Ayam Goreng",
    harga: 10_000,
    rating: 4,
    level: 1,
  },
  {
    id: 2,
    nama: "Ayam Geprek",
    harga: 15_000,
    rating: 4.5,
    level: 1,
  },
  {
    id: 3,
    nama: "Ayam Geprek",
    harga: 15_000,
    rating: 4.5,
    level: 4,
  },
  {
    id: 4,
    nama: "Ayam Crispy",
    harga: 8_000,
    rating: 4.5,
    level: 3,
  },
  {
    id: 5,
    nama: "Ayam Bakar",
    harga: 30_000,
    rating: 5,
    level: 4,
  },
];

const Resto = () => {
  const { id } = useParams();
  console.log(id);

  const [restoData, setRestoData] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchRestoData() {
      await axios
        .get(`http://localhost:8080/master-management/menus/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    }
    fetchRestoData();
  }, [id]);

  return (
    <Box
      sx={{
        backgroundColor: "#eeee",
        height: "100%",
        paddingBottom: 3,
        position: "relative",
      }}>
      <IconButton
        sx={{ color: "white", position: "absolute", top: 0, left: 0 }}
        href="/home">
        <KeyboardArrowLeftIcon />
      </IconButton>
      <img src={ayamGorengImg} className="image-cover" alt="resto-image" />

      {error ? (
        <ErrorSnackbar message="Terjadi kesalahan server. Coba lagi nanti." />
      ) : null}

      <RestoInfoCard />

      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: 16, sm: 20 },
          paddingX: { xs: "10px", md: "50px" },
          marginBottom: 1,
        }}>
        Pilihan Menu
      </Typography>

      <FoodInfoCard data={foodData} />

      <Button
        variant="contained"
        size="large"
        href="/keranjang"
        sx={{
          width: { xs: "95%", md: "80%" },
          backgroundColor: "#0A9830",
          ":hover": { backgroundColor: "#0A9830" },
          textTransform: "none",
          display: "flex",
          gap: 1,
          marginX: "auto",
          marginTop: 3,
        }}>
        <ShoppingCartIcon />
        <Divider
          orientation="vertical"
          variant="fullWidth"
          sx={{ height: "20px", backgroundColor: "white" }}
        />
        <Typography>Lihat Keranjang</Typography>
        <ChevronRightIcon />
      </Button>
    </Box>
  );
};

export default Resto;
