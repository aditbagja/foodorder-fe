import { Box, Button, Grid, Typography } from "@mui/material";
import KeranjangCard from "../components/KeranjangCard";
import AlamatCard from "../components/AlamatCard";
import SimpleNavbar from "../components/SimpleNavbar";

const cartData = [
  {
    id: 1,
    nama: "Ayam Goreng",
    harga: 10_000,
    level: 1,
  },
  {
    id: 2,
    nama: "Ayam Geprek",
    harga: 15_000,
    level: 1,
  },
];

const Keranjang = () => {
  return (
    <>
      <SimpleNavbar backLink="/home" title="Keranjang" />

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

        <KeranjangCard data={cartData} />

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

        <AlamatCard />

        <Grid
          container
          sx={{
            display: "flex",
            marginX: "auto",
            width: { xs: "95%", md: "80%" },
            paddingY: 3,
          }}>
          <Grid item xs={6}>
            <Typography>Ongkos Kirim</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                textAlign: "right",
              }}>
              Rp. 20000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontWeight: "medium",
              }}>
              Total
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontWeight: "medium",
                textAlign: "right",
              }}>
              Rp.{" "}
              {cartData
                .map((data) => data.harga)
                .reduce((prev, current) => prev + current, 20000)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              href="/order-progress"
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
    </>
  );
};

export default Keranjang;
