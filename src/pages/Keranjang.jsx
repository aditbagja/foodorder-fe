import { Box, Button, Grid, Typography } from "@mui/material";
import KeranjangCard from "../components/KeranjangCard";
import AlamatCard from "../components/AlamatCard";
import SimpleNavbar from "../components/SimpleNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorSnackbar from "../components/ErrorSnackbar";

const Keranjang = () => {
  const [cartData, setCartData] = useState();
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  async function fetchCartData() {
    const userId = localStorage.getItem("userId");

    await axios
      .get(`http://localhost:8080/food-order/cart/${userId}`)
      .then((response) => {
        setCartData(response.data.data);
      })
      .catch((error) => {
        console.log({ error });
        if (error.response.status === 404) {
          setIsError(false);
          setIsEmpty(true);
        } else {
          setIsError(true);
        }
      });
  }

  const clickCreateOrder = async () => {
    const userId = localStorage.getItem("userId");

    await axios
      .post(`http://localhost:8080/food-order/order/${userId}`)
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <>
      {isError ? (
        <ErrorSnackbar message="Terjadi kesalahan server. Coba lagi nanti." />
      ) : null}

      <SimpleNavbar backLink="/home" title="Keranjang" />

      {isEmpty ? (
        <Typography sx={{ paddingTop: 24, textAlign: "center" }}>
          Data tidak ditemukan..
        </Typography>
      ) : cartData ? (
        <Box
          sx={{
            backgroundColor: "#eeee",
            paddingY: 3,
          }}>
          <Typography
            sx={{
              fontWeight: "medium",
              marginBottom: 2,
              display: "flex",
              marginX: "auto",
              width: { xs: "95%", md: "80%" },
            }}>
            Pesanan Anda
          </Typography>

          <KeranjangCard data={cartData} fetchCartData={fetchCartData()} />

          <Typography
            sx={{
              fontWeight: "medium",
              marginBottom: 2,
              display: "flex",
              marginX: "auto",
              width: { xs: "95%", md: "80%" },
            }}>
            Alamat
          </Typography>

          <AlamatCard alamat={cartData.customer.alamat} />

          <Grid
            container
            sx={{
              display: "flex",
              marginX: "auto",
              width: { xs: "95%", md: "80%" },
              paddingY: 3,
            }}>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: { xs: 13, sm: 16, md: 18 } }}>
                Total Quantity Makanan
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: { xs: 13, sm: 16, md: 18 },
                }}>
                {cartData.totalMakanan}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontWeight: "medium",
                  fontSize: { xs: 13, sm: 16, md: 18 },
                }}>
                Total Harga
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontWeight: "medium",
                  textAlign: "right",
                  fontSize: { xs: 13, sm: 16, md: 18 },
                }}>
                Rp.{cartData.totalHarga.toLocaleString("id-ID")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                href="/order-progress"
                onClick={clickCreateOrder}
                sx={{
                  width: { xs: "95%", md: "80%" },
                  backgroundColor: "#0A9830",
                  ":hover": { backgroundColor: "#0A9830" },
                  textTransform: "none",
                  display: "flex",
                  gap: 1,
                  marginX: "auto",
                  marginTop: 1,
                }}>
                <Typography>Pesan Sekarang</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Typography sx={{ textAlign: "center", paddingTop: 24 }}>
          Loading...
        </Typography>
      )}
    </>
  );
};

export default Keranjang;
