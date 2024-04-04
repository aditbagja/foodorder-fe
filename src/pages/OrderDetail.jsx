import { Box, Button, Grid, Typography } from "@mui/material";
import SimpleNavbar from "../components/SimpleNavbar";
import ayamGeprek from "../assets/ayam-geprek.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorSnackbar from "../components/ErrorSnackbar";
import SuccessSnackbar from "../components/SuccessSnackbar";

const OrderDetail = () => {
  const { id } = useParams();
  const [orderData, setOrderData] = useState();
  const [formattedDate, setFormattedDate] = useState();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrderData() {
      await axios
        .get(`http://localhost:8080/food-order/order/${id}`)
        .then((response) => {
          console.log({ response });
          setOrderData(response.data.data);

          const timestamp = response.data.data.orderDate;
          const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          };

          setFormattedDate(
            new Intl.DateTimeFormat("id-ID", options).format(
              new Date(timestamp)
            )
          );
        })
        .catch((error) => {
          console.log({ error });
          setIsError(true);
        });
    }

    fetchOrderData();
  }, [id]);

  const clickActionOrder = async (action) => {
    await axios
      .put("http://localhost:8080/food-order/order/update", {
        orderId: orderData.id,
        action: action,
      })
      .then((response) => {
        console.log({ response });
        setIsSuccess(true);

        if (action === "Cancelled") {
          setSuccessMessage("Pesanan anda berhasil Dicancel.");
        } else if (action === "Completed") {
          setSuccessMessage("Pesanan anda berhasil Diterima.");
        }

        setTimeout(() => {
          navigate("/home");
        }, 3000);
      })
      .catch((error) => {
        console.log({ error });
        setIsError(true);
      });
  };

  return (
    <>
      <SimpleNavbar backLink="/order-list" title="Detail Order" />
      {isError ? (
        <ErrorSnackbar message="Terjadi kesalahan server. Coba lagi nanti." />
      ) : null}

      {isSuccess ? <SuccessSnackbar message={successMessage} /> : null}

      {orderData ? (
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
              <Grid container marginBottom={3}>
                <Grid item xs={6}>
                  <Typography
                    sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: "light" }}>
                    Pesananmu dari{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontSize: { xs: 14, sm: 18 },
                        fontWeight: "medium",
                      }}>
                      {orderData.detail.resto.name}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 18 },
                      fontWeight: "light",
                      textAlign: "right",
                    }}>
                    {formattedDate}
                  </Typography>
                </Grid>
              </Grid>

              {orderData.detail.menu.map((data) => (
                <Grid container marginTop={0.5} spacing={2} key={data.id}>
                  <Grid item xs={3} md={2}>
                    <img
                      src={ayamGeprek}
                      alt="foto-makanan"
                      className="image-detail-order"
                    />
                  </Grid>
                  <Grid item xs={6} md={7}>
                    <Typography sx={{ fontSize: { xs: 14, sm: 18 } }}>
                      {data.menuName}{" "}
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: 14, sm: 18 } }}>
                        x{data.quantity}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      sx={{ textAlign: "right", fontSize: { xs: 14, sm: 18 } }}>
                      Rp. {data.harga.toLocaleString("id-ID")}
                    </Typography>
                  </Grid>
                </Grid>
              ))}

              <Grid container marginTop={3}>
                <Grid item xs={8} marginTop={3}>
                  <Typography sx={{ fontSize: { xs: 14, sm: 18 } }}>
                    Total Quantity Makanan
                  </Typography>
                </Grid>
                <Grid item xs={4} marginTop={3}>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 18 },
                      textAlign: "right",
                    }}>
                    {orderData.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: "bold" }}>
                    Total Harga
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 18 },
                      textAlign: "right",
                      fontWeight: "bold",
                    }}>
                    Rp. {orderData.total.toLocaleString("id-ID")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: "bold" }}>
                    Status
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 18 },
                      textAlign: "right",
                      fontWeight: "bold",
                      color:
                        orderData.status === "Cancelled"
                          ? "red"
                          : orderData.status === "Completed"
                          ? "#01b14e"
                          : "text.secondary",
                    }}>
                    {orderData.status}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {orderData.status === "Ongoing" ? (
              <Box display="flex">
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        clickActionOrder("Cancelled");
                      }}
                      sx={{
                        textTransform: "none",
                        width: "100%",
                        backgroundColor: "red",
                        ":hover": {
                          backgroundColor: "red",
                        },
                      }}>
                      Cancel Pesanan
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        clickActionOrder("Completed");
                      }}
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
            ) : null}
          </Box>
        </Box>
      ) : (
        <Typography sx={{ textAlign: "center", paddingTop: 24 }}>
          Loading...
        </Typography>
      )}
    </>
  );
};

export default OrderDetail;
