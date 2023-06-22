import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [gridSize, setGridSize] = useState({
    row: "",
    column: "",
  });

  const [gridData, setGridData] = useState([]);
  const [word, setWord] = useState("");
  const [elementsData, setelementsData] = useState([]);
  const [createGrid, setcreateGrid] = useState(false);
  const [isError, setisError] = useState({
    row: false,
    column: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    value
      ? setisError({ ...isError, [name]: false })
      : setisError({ ...isError, [name]: true });

    setGridSize(() => ({
      ...gridSize,
      [name]: value,
    }));
  };
  function twoArrayAndPhrase(n, m, matrix, word) {
    if (word.length === 1) {
      let elements = [];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          let arr = [];
          if (matrix[i][j] == word) {
            arr.push(`${i}${j}`);

            elements = [...elements, ...arr];
          } else {
          }
        }
      }

      setelementsData([...elements]);
    } else {
      let find = word;
      let Q = matrix.map((el) => el.join(""));
      let count = 0;

      let elements = [];

      for (let i = 0; i <= n - 1; i++) {
        for (let j = 0; j <= m - 1; j++) {
          for (let k = 2; k <= find.length; k++) {
            if (j <= m - k) {
              // horizontal
              let bag = "";
              let arr = [];
              for (let l = 0; l < k; l++) {
                bag += Q[i][j + l];
                arr.push(`${i}${j + l}`);
              }
              if (bag === find) {
                count++;
                elements = [...elements, ...arr];
              }
            }

            if (i <= n - k) {
              // vertical
              let bag = "";
              let arr = [];
              for (let l = 0; l < k; l++) {
                bag += Q[i + l][j];
                arr.push(`${i + l}${j}`);
              }
              if (bag === find) {
                count++;
                elements = [...elements, ...arr];
              }
            }

            if (i <= n - k && j <= m - k) {
              // diagonal downward
              let bag = "";
              let arr = [];
              for (let l = 0; l < k; l++) {
                bag += Q[i + l][j + l];
                arr.push(`${i + l}${j + l}`);
              }
              if (bag === find) {
                count++;
                elements = [...elements, ...arr];
              }
            }

            if (i >= k - 1 && j <= m - k) {
              // diagonal upward
              let bag = "";
              let arr = [];
              for (let l = 0; l < k; l++) {
                bag += Q[i - l][j + l];
                arr.push(`${i - l}${j + l}`);
              }
              if (bag === find) {
                count++;
                elements = [...elements, ...arr];
              }
            }
          }
        }
      }

      setelementsData([...elements]);
    }
  }

  const HandlingSubmit = () => {
    if (gridSize.column == "" && gridSize.row == "") {
      return setisError({ ...isError, column: true, row: true });
    } else if (gridSize.column == "") {
      return setisError({ ...isError, column: true });
    } else if (gridSize.row == "") {
      return setisError({ ...isError, row: true });
    } else if (
      (gridSize.column < 1 || gridSize.column > 7) &&
      (gridSize.row < 1 || gridSize.row > 7)
    ) {
      return setisError({ ...isError, row: true, column: true });
    } else if (gridSize.column < 1 || gridSize.column > 7) {
      return setisError({ ...isError, column: true });
    } else if (gridSize.row < 1 || gridSize.row > 7) {
      return setisError({ ...isError, row: true });
    }

    if (!isError.column && !isError.row) {
      const newArray = Array(+gridSize?.row)
        .fill([""])
        ?.map(() => Array(+gridSize?.column).fill(""));

      setGridData(newArray);
    }
  };

  const HandlingSearch = () => {
    twoArrayAndPhrase(gridSize.row, gridSize.column, gridData, word);
  };

  return (
    <AppContext.Provider
      value={{
        gridSize,
        setGridSize,
        handleChange,
        HandlingSubmit,
        gridData,
        setGridData,
        HandlingSearch,
        word,
        setWord,
        elementsData,
        setelementsData,
        createGrid,
        setcreateGrid,
        isError,
        setisError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
