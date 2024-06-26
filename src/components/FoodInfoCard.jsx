import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import ayamGeprekImg from "../assets/ayam-geprek.jpeg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";

const FoodInfoCard = ({ data, restoId, setSuccess, setSuccessMessage }) => {
  const clickAddToCart = async (menuId) => {
    await axios
      .post("http://localhost:8080/food-order/add-to-cart", {
        userId: localStorage.getItem("userId"),
        restoId: restoId,
        menuId: menuId,
      })
      .then((response) => {
        console.log({ response });
        setSuccess(true);
        setSuccessMessage(response.data.message);

        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <>
      {data ? (
        data.map((food) => (
          <Card
            key={food.menuId}
            sx={{
              display: "flex",
              minWidth: 275,
              width: { xs: "95%", md: "80%" },
              marginX: "auto",
              marginBottom: 1.5,
            }}>
            <CardMedia
              component="img"
              sx={{ width: "25%", objectFit: "cover" }}
              image={ayamGeprekImg}
              alt="ayam"
            />
            <CardContent sx={{ padding: { xs: 1, sm: 3 }, width: "100%" }}>
              <Grid container spacing={0.3}>
                <Grid item xs={6}>
                  <Typography
                    noWrap
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 13, sm: 16, md: 18 },
                    }}>
                    {food.menuName}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 13, sm: 16, md: 18 },
                      textAlign: "right",
                    }}>
                    Rp. {food.harga.toLocaleString("id-ID")}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex">
                    <Rating
                      name="food-rating"
                      defaultValue={food.rating}
                      precision={0.5}
                      readOnly
                      sx={{ display: { xs: "flex", md: "none" } }}
                      size="small"
                    />
                    <Rating
                      name="food-rating"
                      defaultValue={food.rating}
                      precision={0.5}
                      readOnly
                      sx={{ display: { xs: "none", md: "flex" } }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: 13, md: 16 },
                        color: "text.secondary",
                      }}>
                      ({food.rating})
                    </Typography>
                  </Box>
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
                <Grid item xs={6}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => {
                      clickAddToCart(food.menuId);
                    }}
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#0A9830",
                      display: "flex",
                      gap: 1,
                      ":hover": {
                        backgroundColor: "#0A9830",
                      },
                      marginTop: 1,
                    }}>
                    <ShoppingCartIcon fontSize="16px" />
                    <Typography fontSize="14px">Pesan</Typography>
                  </Button>
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

export default FoodInfoCard;
