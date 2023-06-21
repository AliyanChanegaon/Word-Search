import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  HStack,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const InputButton = () => {
  const { gridSize, handleChange, HandlingSubmit, isError } =
    useContext(AppContext);

   
  return (
    <VStack maxW="250px">
      <FormControl isInvalid={isError.row}>
        <InputGroup>
          <InputLeftElement>
            <FaArrowDown />
          </InputLeftElement>
          <Input
            name="row"
            type="number"
            value={gridSize?.row}
            onChange={handleChange}
            placeholder="Enter row"
            
        bg="white"
            
          />
        </InputGroup>
        {isError.row && (
          <FormErrorMessage>Row length should be between 1-8.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isError.column}>
        <InputGroup>
          <InputLeftElement>
            <FaArrowRight />
          </InputLeftElement>
          <Input
            name="column"
            type="number"
            value={gridSize?.column}
            onChange={handleChange}
            placeholder="Enter column"
           
        bg="white"
            
          />
        </InputGroup>
        {isError.column && (
          <FormErrorMessage>
            Column length should be between 1-8.
          </FormErrorMessage>
        )}
      </FormControl>

      <Input
        maxW="250px"
        type="submit"
        placeholder="Submit"
        onClick={HandlingSubmit}
        variant="filled" colorScheme="yellow"
        bg="yellow.500"
        
      />
    </VStack>
  );
};

export default InputButton;
