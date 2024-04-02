import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/Style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resto from "./pages/Resto";
import Keranjang from "./pages/Keranjang";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import OrderList from "./pages/OrderList";
import OrderDetail from "./pages/OrderDetail";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/resto/:id" element={<Resto />} />
            <Route path="/keranjang" element={<Keranjang />} />
            <Route path="/order-progress" element={<Order />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/order/id" element={<OrderDetail />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
