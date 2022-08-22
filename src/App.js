import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import ReviewsByCategory from "./components/ReviewsByCategory";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Navbar />
          <Title />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/reviews"
              element={
                <Reviews
                  categoryList={categoryList}
                  setCategoryList={setCategoryList}
                  isLoading={isLoading}
                  setIsloading={setIsloading}
                  reviewList={reviewList}
                  setReviewList={setReviewList}
                />
              }
            />
            <Route
              path="/reviews/:category"
              element={
                <ReviewsByCategory
                  categoryList={categoryList}
                  setCategoryList={setCategoryList}
                  isLoading={isLoading}
                  setIsloading={setIsloading}
                  reviewList={reviewList}
                  setReviewList={setReviewList}
                />
              }
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
