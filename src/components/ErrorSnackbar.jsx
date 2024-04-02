import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const ErrorSnackbar = ({ message }) => {
  const [openSnackbar, setOpenSnackbar] = useState(true);
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={openSnackbar}
      onClose={handleCloseSnackbar}
      autoHideDuration={3000}>
      <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
