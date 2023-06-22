import {
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
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
    <VStack
      width="75%"
      justify="center"
      align="center"
      height="100%"
      spacing={3}
    >
      <FormControl isInvalid={isError.row}>
        <InputGroup size="lg">
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
            fontSize="2xl"
          />
        </InputGroup>
        {isError.row && (
          <FormErrorMessage>Row length should be between 1-8.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isError.column}>
        <InputGroup size="lg">
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
            fontSize="2xl"
          />
        </InputGroup>
        {isError.column && (
          <FormErrorMessage>
            Column length should be between 1-8.
          </FormErrorMessage>
        )}
      </FormControl>

      <Input
        size="lg"
        type="submit"
        placeholder="Submit"
        onClick={HandlingSubmit}
        variant="filled"
        colorScheme="yellow"
        bg="yellow.500"
        mt="5px"
        fontSize="2xl"
      />
    </VStack>
  );
};

export default InputButton;
