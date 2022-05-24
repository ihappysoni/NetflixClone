import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./component/Style.css"
import Login from "./component/Login";
import LoginPage from "./component/LoginPage";

function App() {
  return (
    <>
      <div className="fPage">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/loginpage" element={<LoginPage/>}/>
          </Routes>
        </Router>
        
      </div>
    </>
  );
}

export default App;
