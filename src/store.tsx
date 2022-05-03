import React, { useReducer, createContext } from "react";
import { JsxAttributeLike } from "typescript";
import { IState, IAction } from "./interfaces";

const initialState: IState = { episodes: [], favorites: [] };

export const Store = createContext(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload,
      };
    default:
      return state;
  }
};

export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.ElementChildrenAttribute => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { children };
};
