import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Navbar />
          <Title />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
