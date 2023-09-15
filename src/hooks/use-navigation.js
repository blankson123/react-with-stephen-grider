import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNagivation() {
  return useContext(NavigationContext);
}

export default useNagivation;
