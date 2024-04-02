import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
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
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessSnackbar from "../components/SuccessSnackbar";
import ErrorSnackbar from "../components/ErrorSnackbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [fieldError, setFieldError] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name } = event.target;

    if (event.target.name === name) {
      if (event.target.value.trim() === "") {
        setFieldError({
          ...fieldError,
          [name]: "Kolom tidak boleh kosong",
        });
      } else {
        setFieldError({
          ...fieldError,
          [name]: "",
        });
      }
    }

    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (formData.username !== "" && formData.password !== "") {
      await axios
        .post("http://localhost:8080/user-management/sign-in", formData)
        .then((response) => {
          setLoading(true);
          setSuccess(true);
          console.log(response);

          localStorage.setItem("userId", response.data.data.userId);

          setTimeout(() => {
            navigate("/home");
          }, 3000);
        })
        .catch((error) => {
          console.log({ error });
          setLoading(false);
          setError(true);

          if (error.response.data.code === 400) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage("Terjadi kesalahan server. Coba lagi nanti.");
          }

          setTimeout(() => {
            setError(false);
          }, 2000);
        });
    }
  };

  return (
    <Box paddingY={24} sx={{ backgroundColor: "#eeee" }}>
      {success ? <SuccessSnackbar message="Login Berhasil" /> : null}
      {error ? <ErrorSnackbar message={errorMessage} /> : null}
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
          <TextField
            name="username"
            label="Username"
            id="username"
            size="small"
            value={formData.username}
            onChange={handleChange}
            error={fieldError.username != ""}
            helperText={fieldError.username}
          />

          <FormControl size="small" variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              name="password"
              id="password"
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
              value={formData.password}
              onChange={handleChange}
              error={fieldError.password !== ""}
            />
            {fieldError.password !== "" ? (
              <Typography
                sx={{
                  fontSize: 12,
                  paddingLeft: 1.5,
                  paddingTop: 0.5,
                  color: "#d32f2f",
                }}>
                {fieldError.password}
              </Typography>
            ) : null}
          </FormControl>

          <Button
            variant="contained"
            size="small"
            onClick={handleSubmit}
            sx={{
              textTransform: "none",
              backgroundColor: "#0A9830",
              ":hover": { backgroundColor: "#0A9830" },
            }}
            disabled={loading ? true : false}>
            {loading ? (
              <CircularProgress size={18} color="success" />
            ) : (
              <Typography sx={{ fontSize: 14 }}>Login</Typography>
            )}
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
