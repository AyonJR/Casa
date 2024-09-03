import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./Layout/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      
    </>
  );
}

export default App;
