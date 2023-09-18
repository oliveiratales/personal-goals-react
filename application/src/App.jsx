import { Outlet } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Components
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
