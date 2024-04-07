import { AppContext } from "../context/Context";
import { useContext } from "react";

export const useGlobalContext = () => useContext(AppContext);