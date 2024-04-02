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
import SuccessSnackbar from "../components/SuccessSnackbar";
import ErrorSnackbar from "../components/ErrorSnackbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    alamat: "",
    password: "",
  });

  const [fieldError, setFieldError] = useState({
    username: "",
    fullname: "",
    alamat: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
    if (
      formData.username !== "" &&
      formData.fullname !== "" &&
      formData.alamat !== "" &&
      formData.password !== ""
    ) {
      await axios
        .post("http://localhost:8080/user-management/sign-up", formData)
        .then((response) => {
          setLoading(true);
          setSuccess(true);
          console.log(response);

          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError(true);
        });
    }
  };

  return (
    <Box paddingY={24} sx={{ backgroundColor: "#eeee" }}>
      {success ? <SuccessSnackbar message="Registrasi Berhasil." /> : null}
      {error ? (
        <ErrorSnackbar message="Terjadi kesalahan server. Coba lagi nanti." />
      ) : null}
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
          Register
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
          <TextField
            name="fullname"
            label="Nama Lengkap"
            id="namalengkap"
            size="small"
            value={formData.fullname}
            onChange={handleChange}
            error={fieldError.fullname !== ""}
            helperText={fieldError.fullname}
          />
          <TextField
            name="alamat"
            label="Alamat"
            id="alamat"
            size="small"
            value={formData.alamat}
            onChange={handleChange}
            error={fieldError.alamat !== ""}
            helperText={fieldError.alamat}
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
              <Typography sx={{ fontSize: 14 }}>Daftar</Typography>
            )}
          </Button>
          <Typography>
            Sudah punya akun ? Silahkan Login{" "}
            <Link href="/" underline="none">
              Disini
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
