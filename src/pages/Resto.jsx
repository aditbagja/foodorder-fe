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
import SuccessSnackbar from "../components/SuccessSnackbar";

const Resto = () => {
  const { id } = useParams();

  const [restoData, setRestoData] = useState();
  const [menuData, setMenuData] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState();

  useEffect(() => {
    async function fetchRestoData() {
      await axios
        .get(`http://localhost:8080/master-management/menus/${id}`)
        .then((response) => {
          setRestoData(response.data.data.resto);
          setMenuData(response.data.data.menus);
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
      <img src={ayamGorengImg} className="image-cover" alt="foto makanan" />

      {error ? (
        <ErrorSnackbar message="Terjadi kesalahan server. Coba lagi nanti." />
      ) : null}

      {success ? <SuccessSnackbar message={successMessage} /> : null}

      {restoData ? <RestoInfoCard data={restoData} /> : null}

      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: 16, sm: 20 },
          paddingX: { xs: "10px", md: "50px" },
          marginBottom: 1,
        }}>
        Pilihan Menu
      </Typography>

      {restoData ? (
        <FoodInfoCard
          data={menuData}
          restoId={restoData.restoId}
          setSuccess={setSuccess}
          setSuccessMessage={setSuccessMessage}
        />
      ) : null}

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
