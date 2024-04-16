import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarHome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#01b14e",
        paddingY: "14px",
        display: "flex",
        alignItems: "center",
      }}>
      <Box display="flex" gap={5} marginX="auto">
        <Button
          href="/home"
          sx={{
            textTransform: "none",
            color: location.pathname === "/home" ? "#01b14e" : "white",
            backgroundColor: location.pathname === "/home" ? "white" : null,
            ":hover": {
              color: location.pathname === "/home" ? "#01b14e" : "white",
              backgroundColor: location.pathname === "/home" ? "white" : null,
            },
          }}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: "bold",
            }}>
            Home
          </Typography>
        </Button>
        <Button
          href="/order-list"
          sx={{
            textTransform: "none",
            color: location.pathname === "/order-list" ? "#01b14e" : "white",
            backgroundColor:
              location.pathname === "/order-list" ? "white" : null,
            ":hover": {
              color: location.pathname === "/order-list" ? "#01b14e" : "white",
              backgroundColor:
                location.pathname === "/order-list" ? "white" : null,
            },
          }}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: "bold",
            }}>
            Order List
          </Typography>
        </Button>
        <Button
          onClick={handleLogout}
          sx={{
            textTransform: "none",
            color: "white",
            ":hover": {
              color: "#01b14e",
              backgroundColor: "white",
            },
          }}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: "bold",
            }}>
            Logout
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NavbarHome;
