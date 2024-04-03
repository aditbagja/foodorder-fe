import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const SuccessSnackbar = ({ message }) => {
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
      <Alert
        severity="success"
        variant="filled"
        sx={{ width: "100%", textAlign: "center" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SuccessSnackbar;
