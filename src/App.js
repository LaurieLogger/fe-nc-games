import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

import ReviewItem from "./components/ReviewItem";
import NotAPath from "./components/NotAPath";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Navbar />
        <Title />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/categories/:category" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<ReviewItem />} />
          <Route path="*" element={<NotAPath />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
