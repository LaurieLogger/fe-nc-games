import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const SelectUserItem = ({ username, name, avatar_url }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isValidUser, setIsValidUser] = useState(false);

  useEffect(() => {
    setIsValidUser(false);
    if (username === loggedInUser.username) {
      setIsValidUser(true);
    }
  }, [username, loggedInUser.username]);

  const handleLogIn = () => {
    setLoggedInUser((currUser) => {
      currUser.username = username;
      currUser.name = name;
      currUser.avatar_url = avatar_url;
      return { ...currUser };
    });
  };

  return (
    <li key={username} className="user__list__item">
      <img src={avatar_url} className="user__list__img" alt={username} />
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <button onClick={handleLogIn} className={isValidUser ? "hidden" : ""}>
        Sign in
      </button>
    </li>
  );
};

export default SelectUserItem;
