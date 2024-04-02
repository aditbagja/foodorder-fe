import { Box } from "@mui/material";
import RestoListCard from "../components/RestoListCard";
import NavbarHome from "../components/NavbarHome";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorSnackbar from "../components/ErrorSnackbar";

const Home = () => {
  const [restoData, setRestoData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRestoData() {
      await axios
        .get("http://localhost:8080/master-management/restaurants")
        .then((response) => {
          setRestoData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    }
    fetchRestoData();
  }, []);

  return (
    <>
      {error ? (
        <ErrorSnackbar message="Terjadi kesalahan server. Coba lagi nanti." />
      ) : null}
      <NavbarHome />

      {restoData.map((data) => (
        <Box marginTop={3} key={data.id}>
          <RestoListCard data={data} />
        </Box>
      ))}
    </>
  );
};

export default Home;
