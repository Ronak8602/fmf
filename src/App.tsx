import React from "react";
import logo from "./logo.png";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Premium } from "./Premium";
import { Package } from "./Package";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/package/:userId/:mentorCategory/:whatsappNumber/:paymentId/:packageType" element={<Package/>} />
          <Route path="/premium/:paymentId/:token" element={<Premium/>} />  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
