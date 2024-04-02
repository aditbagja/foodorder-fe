import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const KeranjangCard = ({ data }) => {
  return (
    <>
      {data ? (
        data.map((food) => (
          <Card
            key={food.id}
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
                  <Grid container spacing={0.3}>
                    <Grid item xs={6}>
                      <Typography
                        noWrap
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: 13, sm: 16, md: 18 },
                        }}>
                        {food.nama}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: 13, sm: 16, md: 18 },
                          textAlign: "right",
                        }}>
                        Rp. {food.harga}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          fontSize: { xs: 13, md: 16 },
                          color: "text.secondary",
                        }}>
                        Level {food.level}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    display="flex"
                    sx={{
                      marginLeft: 1,
                      justifyContent: "center",
                    }}>
                    <Divider
                      orientation="vertical"
                      variant="fullWidth"
                      flexItem
                      sx={{ backgroundColor: "white" }}
                    />
                    <IconButton
                      sx={{ display: "flex", justifyContent: "center" }}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>Loading...</Typography>
      )}
    </>
  );
};

export default KeranjangCard;
