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
import ReviewItem from "./components/ReviewItem";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
  });
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
                  reviewList={reviewList}
                  setReviewList={setReviewList}
                />
              }
            />
            <Route
              path="/reviews/categories/:category"
              element={
                <ReviewsByCategory
                  categoryList={categoryList}
                  setCategoryList={setCategoryList}
                  reviewList={reviewList}
                  setReviewList={setReviewList}
                />
              }
            />
            <Route path="/reviews/:review_id" element={<ReviewItem />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
