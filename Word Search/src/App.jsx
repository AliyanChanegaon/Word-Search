import { useEffect, useState } from "react";
import Home from "./components/home";
import "./App.css";
import { Image, VStack } from "@chakra-ui/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <VStack
          bgColor="#00143e"
          height="100vh"
          align="center"
          justify="center"
        >
          <Image
            className="fade-in"
            width="250px"
            src="https://i.ibb.co/LND5vJb/logo.png"
            alt="Image"
          />
        </VStack>
      ) : (
        <VStack
          margin="auto"
        
          alignItems="center"
          h="100vh"
         
          bg="linear-gradient(212deg, rgba(6,56,111,1) 17%, rgba(38,127,219,1) 49%, rgba(7,55,105,1) 80%)"
        >
          <Home />
        </VStack>
      )}
    </>
  );
}

export default App;
