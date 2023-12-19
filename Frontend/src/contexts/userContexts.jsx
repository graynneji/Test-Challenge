/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";

const URL = "http://localhost:6709";

const FormContext = createContext();

const initialState = {
  usersName: null,
  usersSelectedSector: null,
  usersAgree: false,
  isLoading: false,
  error: null,
  sectors: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "Loading":
      return {
        ...state,
        isLoading: true,
      };
    case "Sectors/Loaded":
      return {
        ...state,
        isLoading: false,
        sectors: action.payload,
      };
    case "User/Created":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "User/Updated":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "Rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function FormProvider({ children }) {
  const [
    { usersName, usersSelectedSector, sectors, error, usersAgree, isLoading },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchSectors() {
      dispatch({ type: "Loading" });
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        dispatch({
          type: "Sectors/Loaded",
          payload: data?.sectors[0]?.sectors,
        });
      } catch (err) {
        dispatch({ type: "Rejected", payload: err.message });
      }
    }
    fetchSectors();
  }, []);

  return (
    <FormContext.Provider
      value={{
        usersName,
        isLoading,
        usersSelectedSector,
        error,
        usersAgree,
        sectors,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForms() {
  const context = useContext(FormContext);

  if (context === undefined)
    throw new Error("FormContext was used outside the FormProvider");

  return context;
}

export { FormProvider, useForms };
