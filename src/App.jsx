import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="mt-40">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
