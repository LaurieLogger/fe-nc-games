import axios from "axios";

export const getAllReviews = () => {
  return fetch(`https://bumble-nc-games.herokuapp.com/api/reviews`).then(
    (reviews) => reviews.json()
  );
};

export const getAllCategories = () => {
  return fetch(`https://bumble-nc-games.herokuapp.com/api/categories`).then(
    (categories) => categories.json()
  );
};

export const getReviewsByCategory = (category) => {
  return fetch(
    `https://bumble-nc-games.herokuapp.com/api/reviews?category=${category}`
  ).then((reviews) => reviews.json());
};

// GET /api/reviews": {
//     "description": "serves an array of all reviews",
//     "queries": [
//     "category",
//     "sort_by",
//     "order"
//     ],
