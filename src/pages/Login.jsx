import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box paddingY={24} sx={{ backgroundColor: "#eeee" }}>
      <Box
        display="flex"
        width={{ xs: "90%", md: "50%" }}
        marginX="auto"
        paddingY={1}
        sx={{ backgroundColor: "#0A9830", justifyContent: "center" }}>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
          }}>
          Login
        </Typography>
      </Box>
      <Box
        display="flex"
        width={{ xs: "90%", md: "50%" }}
        marginX="auto"
        paddingY={3}
        sx={{ backgroundColor: "white" }}>
        <Stack
          spacing={2}
          sx={{ width: "90%", display: "flex", marginX: "auto" }}>
          <TextField label="Username" id="username" size="small" />

          <FormControl size="small" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              backgroundColor: "#0A9830",
              ":hover": { backgroundColor: "#0A9830" },
            }}>
            Login
          </Button>
          <Typography>
            Belum punya akun ? Daftar{" "}
            <Link href="/register" underline="none">
              Disini
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
