import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <section className="nav__area">
      <nav id="nav__links">
        <Link to={`/`}>Home </Link>
        <Link to={`/reviews`}>Reviews </Link>
      </nav>

      <nav className="nav__profile">
        <img
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
          className="nav__profile__img"
        />
      </nav>
      <p>User: {loggedInUser.username}</p>
      <Link to={`/users`}>
        <p>(change)</p>
      </Link>
    </section>
  );
};

export default Navbar;
