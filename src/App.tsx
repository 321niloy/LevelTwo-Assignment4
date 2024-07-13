import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
