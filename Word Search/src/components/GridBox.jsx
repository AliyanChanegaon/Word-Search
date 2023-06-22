import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Grid, Input, Button, Stack, VStack } from "@chakra-ui/react";

const GridBox = () => {
  const {
    HandlingSearch,
    gridSize,
    gridData,
    setGridData,
    word,
    setWord,
    elementsData,
    setelementsData,
    createGrid,
    setcreateGrid,
    setGridSize,
  } = useContext(AppContext);

  const HandlingRandomFill = () => {
    const updatedGrid = gridData.map((row) =>
      row.map(() => getRandomCharacter())
    );
    setGridData(updatedGrid);
  };
  const getRandomCharacter = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  return (
    <Stack width="90%" height="100%" m={1} justify="center" align="center">
      <Grid
        templateColumns={`repeat(${gridSize.column}, 1fr)`}
        placeItems="center"
        gap={2}
        margin={1}
        h="70%"
        placeContent="center"
      >
        {gridData.map((row, rowIndex) =>
          row.map((value, columnIndex) => (
            <Input
              readOnly={createGrid ? true : false}
              maxLength={1}
              key={columnIndex}
              value={value}
              onChange={(e) => {
                const updatedGrid = [...gridData];
                updatedGrid[rowIndex][columnIndex] = e.target.value;
                setGridData(updatedGrid);
              }}
              variant="filled"
              bgColor={
                elementsData.includes(`${rowIndex}${columnIndex}`)
                  ? "yellow.500"
                  : "whiteAlpha.200"
              }
              color={
                elementsData.includes(`${rowIndex}${columnIndex}`)
                  ? "black"
                  : "white"
              }
              padding="10px"
              fontSize="xl"
              textAlign="center"
              name={`${rowIndex}-${columnIndex}`}
            />
          ))
        )}
      </Grid>

      {gridData.length !== 0 && (
        <VStack
          spacing={3}
          w="100%"
          margin="auto"
          justify="center"
          align="center"
        >
          {createGrid === false ? (
            <>
              <Button
                width="100%"
                variant="filled"
                bg="white"
                onClick={() => {
                  setcreateGrid(true);
                }}
                isDisabled={
                  gridData.flat().some((value) => value === "") ? true : false
                }
                size="lg"
                fontSize="2xl"
              >
                Set Grid
              </Button>
              <Button
                width="100%"
                onClick={HandlingRandomFill}
                variant="filled"
                colorScheme="yellow"
                bg="yellow.500"
                _hover={{ backgroundColor: "yellow.600" }}
                size="lg"
                fontSize="2xl"
              >
                Fill randomly
              </Button>
            </>
          ) : (
            <>
              <Input
                bg="white"
                value={word}
                type="text"
                onChange={(e) => setWord(e.target.value)}
                placeholder="Enter word to search"
                width="100%"
                size="lg"
                fontSize="2xl"
              />
              <Input
                width="100%"
                variant="filled"
                colorScheme="yellow"
                bg="yellow.500"
                _hover={{ backgroundColor: "yellow.600" }}
                type="submit"
                onClick={HandlingSearch}
                value="Search word"
                size="lg"
                mt="5px"
                fontSize="2xl"
              />
              <Input
                width="100%"
                variant="filled"
                bg="white"
                type="submit"
                value="Reset"
                size="lg"
                fontSize="2xl"
                onClick={() => {
                  setGridData([]);
                  setcreateGrid(false);
                  setGridSize({ row: "", column: "" });
                  setelementsData([]);
                }}
              />
            </>
          )}
        </VStack>
      )}
    </Stack>
  );
};

export default GridBox;
