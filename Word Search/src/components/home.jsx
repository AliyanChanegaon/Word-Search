import { Container } from "@chakra-ui/react";
import React, { useContext } from "react";
import InputButton from "./inputButton";
import GridBox from "./GridBox";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { gridData } = useContext(AppContext);

  return (
    <  >
     <>{gridData.length === 0 && <InputButton />}
     </> 
   

      <GridBox />
    </>
  );
};

export default Home;
