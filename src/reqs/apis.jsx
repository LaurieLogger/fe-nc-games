import axios from "axios";

export const getAllReviews = () =>
  fetch("https://bumble-nc-games.herokuapp.com/api/reviews").then((reviews) =>
    reviews.json()
  );
