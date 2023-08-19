import React from "react";
import NavBar from "./Components/Navbar/navbar";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import VideoBG from "./Components/VideoBG/videobg"
import "./App.css"
function App() {
  return (
      
     <div className="w-full    ">
      <VideoBG className="w-full"/>


      <div className="flex justify-center w-full">

      <NavBar className="z-10 w-full"/>
      <div className="flex row z-10 box-border w-screen h-auto xl:w-[1500px] bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-pink-500/80 ">
      <Main/>
      <Footer/>
      </div>
      
     </div>
     

      </div>
      
    
  );
}

export default App;
