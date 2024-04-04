import { Box, Typography } from "@mui/material";
import NavbarHome from "../components/NavbarHome";
import OrderListCard from "../components/OrderListCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorSnackbar from "../components/ErrorSnackbar";

const OrderList = () => {
  const userId = localStorage.getItem("userId");
  const [orderData, setOrderData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    async function fetchOrderData() {
      await axios
        .get(`http://localhost:8080/food-order/order/users?userId=${userId}`)
        .then((response) => {
          setOrderData(response.data.data);
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
    fetchOrderData();
  }, [userId]);

  return (
    <>
      {isError ? (
        <ErrorSnackbar message="Terjadi kesalahan server. Coba lagi nanti." />
      ) : null}
      <NavbarHome />

      {isEmpty ? (
        <Typography sx={{ paddingTop: 24, textAlign: "center" }}>
          Data tidak ditemukan..
        </Typography>
      ) : (
        orderData.map((data) => (
          <Box marginTop={3} key={data.orderId}>
            <OrderListCard data={data} />
          </Box>
        ))
      )}
    </>
  );
};

export default OrderList;
