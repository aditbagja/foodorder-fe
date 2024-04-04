import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const OrderListCard = ({ data }) => {
  console.log({ data });
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/order/${data.orderId}`)}
      sx={{
        minWidth: 275,
        width: { xs: "95%", md: "80%" },
        marginX: "auto",
        cursor: "pointer",
      }}>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: 16, sm: 20 },
                marginBottom: 0.5,
              }}>
              {data.resto.restoName}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                fontWeight: "medium",
                textAlign: "right",
                color:
                  data.status == "Completed"
                    ? "#01b14e"
                    : data.status == "Cancelled"
                    ? "red"
                    : "text.secondary",
                marginBottom: 0.5,
              }}>
              {data.status}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0.5}>
          <Grid item xs={3.5} sm={2}>
            <Box display="flex" alignItems="center" gap={0.5}>
              <Typography
                sx={{ fontSize: { xs: 13, sm: 15 } }}
                color="text.secondary">
                {data.quantity} Makanan
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: 14, sm: 18 } }}>
              Estimasi Tiba
            </Typography>
          </Grid>
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
                {data.resto.alamat}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrderListCard;
