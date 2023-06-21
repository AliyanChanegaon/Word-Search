import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import AppContextProvider from "./Context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AppContextProvider>
);
