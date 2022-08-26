import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex flex-row p-4 bg-green-500 border-double border-2 border-b-green-700 mr-0">
      <nav className="basis-1/6 border-solid border-2 border-green-700 pl-1 pr-1 shadow-green-800 bg-green-600">
        <Link
          to={`/`}
          className="underline hover:no-underline
                   text-white hover:text-blue-800"
        >
          Home{" "}
        </Link>
        <Link
          to={`/reviews`}
          className="underline hover:no-underline
                   text-white hover:text-blue-800"
        >
          Reviews{" "}
        </Link>
      </nav>
      <div className="basis-4/6"></div>
      <section className="flex flex-nowrap flex-row basis 1/6 border-solid border-2 border-green-700 shadow-green-800 bg-green-600">
        <img
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
          className="nav__profile__img basis-1/2 pr-1"
        />
        <p className="basis-1/2 pr-7">
          {loggedInUser.username}{" "}
          <Link
            to={`/users`}
            className="underline hover:no-underline
                   text-white hover:text-blue-800 
                   "
          >
            <p>(change)</p>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Navbar;
