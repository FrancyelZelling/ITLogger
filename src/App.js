import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Provider } from "react-redux";
import store from "./store";

import Searchbar from "./Components/Layout/SearchBar";
import Logs from "./Components/logs/Logs";
import AddBtn from "./Components/Layout/AddBtn";
import AddLogModal from "./Components/logs/AddLogModal";
import EditLogModal from "./Components/logs/EditLogModal";
import AddTechModal from "./Components/Techs/AddTechModal";
import TechListModal from "./Components/Techs/TechListModal";

const App = () => {
  useEffect(() => {
    // Init Materialize CSS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <React.Fragment>
        <Searchbar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </React.Fragment>
    </Provider>
  );
};

export default App;
