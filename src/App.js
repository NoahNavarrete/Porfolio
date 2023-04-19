import React from "react";
import NavBar from "./Components/Navbar/navbar";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import "./App.css"
function App() {
  return (
      
     <div className="flex justify-center bg-[#0e0e58]  ">
      <NavBar/>
      <div className="flex row box-border h-auto xl:w-[1500px] bg-gradient-to-l from-cyan-500 to-blue-500">
      <Main/>
      <Footer/>
      </div>
      
     </div>
     
      
    
  );
}

export default App;
