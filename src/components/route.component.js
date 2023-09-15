import useNagivation from "../hooks/use-navigation";

function Route({ path, children }) {
  const { currentPath } = useNagivation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
