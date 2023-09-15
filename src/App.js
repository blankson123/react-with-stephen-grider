import SideBar from "./components/sidebar.component";
import Route from "./components/route.component";
import AccordionPage from "./pages/accordion.page";
import DropdownPage from "./pages/dropdown.page";
import ButtonPage from "./pages/button.page";
import ModalPage from "./pages/modal.page";
import TablePage from "./pages/table.page";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}
export default App;
