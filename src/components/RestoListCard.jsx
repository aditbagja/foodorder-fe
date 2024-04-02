import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

const RestoListCard = () => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate("/resto")}
      sx={{
        minWidth: 275,
        width: { xs: "95%", md: "80%" },
        marginX: "auto",
        cursor: "pointer",
      }}>
      <CardContent>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: 16, sm: 20 },
            marginBottom: 0.5,
          }}>
          King Ayam Goreng Bandung
        </Typography>
        <Grid container spacing={0.5}>
          <Grid item xs={3.5} sm={2}>
            <Box display="flex" alignItems="center" gap={0.5}>
              <AccessTimeIcon
                sx={{ fontSize: { xs: 14, sm: 16 }, color: "text.secondary" }}
              />
              <Typography
                sx={{ fontSize: { xs: 13, sm: 15 } }}
                color="text.secondary">
                30 Menit
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8.5} sm={10}>
            <Box display="flex" alignItems="center" gap={0.5}>
              <LocationOnIcon
                sx={{ fontSize: { xs: 14, sm: 16 }, color: "text.secondary" }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 15 },
                }}
                noWrap
                color="text.secondary">
                Jalan Soekarno Hatta No. 36
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: 14, sm: 18 } }}>
              Jam Buka
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography
              sx={{ fontSize: { xs: 13, sm: 15 } }}
              color="text.secondary">
              08.00-16.00 WIB
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RestoListCard;
