import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const RestoInfoCard = ({ data }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        position: "relative",
        top: -30,
        width: { xs: "95%", md: "80%" },
        marginX: "auto",
      }}>
      <CardContent>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: 16, sm: 20 },
            marginBottom: 0.5,
          }}>
          {data.restoName}
        </Typography>
        <Grid container spacing={0.5}>
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
                {data.alamat}
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
              {data.timeOpen} WIB
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RestoInfoCard;
