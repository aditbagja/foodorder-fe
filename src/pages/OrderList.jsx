import { Box } from "@mui/material";
import NavbarHome from "../components/NavbarHome";
import OrderListCard from "../components/OrderListCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorSnackbar from "../components/ErrorSnackbar";

const OrderList = () => {
  const userId = localStorage.getItem("userId");
  const [orderData, setOrderData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchOrderData() {
      await axios
        .get(`http://localhost:8080/food-order/order/users?userId=${userId}`)
        .then((response) => {
          setOrderData(response.data.data);
        })
        .catch((error) => {
          console.log({ error });
          setError(true);
        });
    }
    fetchOrderData();
  }, [userId]);

  return (
    <>
      {error ? (
        <ErrorSnackbar message="Terjadi kesalahan server. Coba lagi nanti." />
      ) : null}
      <NavbarHome />

      {orderData.map((data) => (
        <Box marginTop={3} key={data.orderId}>
          <OrderListCard data={data} />
        </Box>
      ))}
    </>
  );
};

export default OrderList;
