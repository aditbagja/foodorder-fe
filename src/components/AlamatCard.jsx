import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AlamatCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        minWidth: 275,
        width: { xs: "95%", md: "80%" },
        marginX: "auto",
        marginBottom: 1.5,
      }}>
      <CardContent sx={{ padding: { xs: 1, sm: 3 }, width: "100%" }}>
        <Grid container>
          <Grid item xs={10}>
            <Box display="flex" alignItems="center">
              <LocationOnIcon />
              <Typography
                noWrap
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 13, sm: 16, md: 18 },
                }}>
                Jalan Raya Bandung No 99
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "grey",
                fontSize: { xs: 13, sm: 16, md: 18 },
                textAlign: "right",
              }}>
              Ubah
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AlamatCard;
