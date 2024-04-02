import { Box } from "@mui/material";
import NavbarHome from "../components/NavbarHome";
import OrderListCard from "../components/OrderListCard";

const OrderList = () => {
  return (
    <>
      <NavbarHome />

      <Box marginTop={3}>
        <OrderListCard />
      </Box>
    </>
  );
};

export default OrderList;
