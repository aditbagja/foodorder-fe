import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const SimpleNavbar = ({ backLink, title }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#01b14e",
          paddingY: "14px",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}>
        <IconButton sx={{ color: "white" }} href={backLink}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            marginX: "auto",
          }}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default SimpleNavbar;
