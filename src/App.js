import React from "react";
import Login from "./components/Login";
import { useNavigate } from "react-router-dom";
import Form from "./components/Form";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
