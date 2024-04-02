import { Box, Button, Grid, Typography } from "@mui/material";
import SimpleNavbar from "../components/SimpleNavbar";
import ayamGeprek from "../assets/ayam-geprek.jpeg";

const OrderDetail = () => {
  return (
    <>
      <SimpleNavbar backLink="/order-list" title="Detail Order" />

      <Box
        paddingX={{ xs: 1, sm: 3 }}
        paddingY={2}
        sx={{ backgroundColor: "#eeee" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minHeight="100vh">
          <Box>
            <Typography
              sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: "light" }}>
              Pesananmu dari{" "}
              <Typography
                component="span"
                sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: "medium" }}>
                King Ayam Goreng Bandung
              </Typography>
            </Typography>

            <Grid container marginTop={0.5} spacing={2}>
              <Grid item xs={3} md={2}>
                <img
                  src={ayamGeprek}
                  alt="foto-makanan"
                  className="image-detail-order"
                />
              </Grid>
              <Grid item xs={6} md={7}>
                <Typography sx={{ fontSize: { xs: 14, sm: 18 } }}>
                  Ayam Geprek
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  sx={{ textAlign: "right", fontSize: { xs: 14, sm: 18 } }}>
                  Rp.15.000
                </Typography>
              </Grid>
            </Grid>

            <Grid container marginTop={3}>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: { xs: 14, sm: 18 } }}>
                  Subtotal
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 18 }, textAlign: "right" }}>
                  Rp. 15.000
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontSize: { xs: 14, sm: 18 } }}>
                  Ongkos Kirim
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 18 }, textAlign: "right" }}>
                  Rp. 20.000
                </Typography>
              </Grid>
              <Grid item xs={6} marginTop={3}>
                <Typography
                  sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: "bold" }}>
                  Total
                </Typography>
              </Grid>
              <Grid item xs={6} marginTop={3}>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 18 },
                    textAlign: "right",
                    fontWeight: "bold",
                  }}>
                  Rp. 35.000
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box display="flex">
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    width: "100%",
                    backgroundColor: "red",
                    ":hover": {
                      backgroundColor: "red",
                    },
                  }}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    width: "100%",
                    backgroundColor: "#0A9830",
                    ":hover": {
                      backgroundColor: "#0A9830",
                    },
                  }}>
                  Pesanan Diterima
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OrderDetail;
