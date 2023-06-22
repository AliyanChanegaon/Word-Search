import React, { useContext } from "react";
import InputButton from "./inputButton";
import GridBox from "./gridBox";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { gridData } = useContext(AppContext);

  return (
    <>
      {gridData.length === 0 && <InputButton />}
      {gridData.length !== 0 &&   <GridBox />}
    
    </>
  );
};

export default Home;
