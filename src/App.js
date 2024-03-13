import {  Link } from "react-router-dom";
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Logout from "./Components/Logout";


import Tables from "./Components/Tables";
import Edit from "./Components/Edit";


function App() {  

  return (


    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/createdata" element={<Home />}/>
        <Route path="/y" element={<Logout />}/>
        <Route path="/readdata" element={<Tables />}/>
        <Route path="/edit" element={<Edit />}/>
      </Routes>

  </div>
    
    </>



  
  
      
    
  );
}

export default App;



