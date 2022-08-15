import logo from "./logo.svg";
import "./index.css";
// import Navbar from "./components/Navbar";

import Listings from "./components/Listings";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="flex"> 
        <SideBar/>
        <div className="">
          <Listings/>
        </div>
      </div>
    </>
  );
}

export default App;
