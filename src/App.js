import React from "react";
import NavBar from "./Components/Navbar/navbar";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import "./App.css"
function App() {
  return (
      
     <div className="flex justify-center">
      <NavBar/>
      <div className="flex row box-border w-[1500px]">
      <Main/>
      <Footer/>

      </div>
      
     </div>
     
      
    
  );
}

export default App;
