import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

import ReviewItem from "./components/ReviewItem";
import NotAPath from "./components/NotAPath";
import SelectUser from "./components/SelectUser";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "guest",
    name: "guest",
    avatar_url:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
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
          <Route path="/users" element={<SelectUser />} />
          <Route path="*" element={<NotAPath />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
