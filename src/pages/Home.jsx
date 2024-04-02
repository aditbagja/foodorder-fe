import { Box } from "@mui/material";
import RestoListCard from "../components/RestoListCard";
import NavbarHome from "../components/NavbarHome";

const Home = () => {
  return (
    <>
      <NavbarHome />

      <Box marginTop={3}>
        <RestoListCard />
      </Box>
    </>
  );
};

export default Home;
