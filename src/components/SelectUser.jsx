import React, { useContext, useEffect, useState } from "react";
import SelectUserGenerator from "./SelectUserGenerator";
import { UserContext } from "../contexts/UserContext";
import { getAllUsers } from "../reqs/apis";

const SelectUser = () => {
  const [isLoading, setIsloading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [err, setErr] = useState(null);

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setIsloading(true);
    setErr(null);
    getAllUsers()
      .then(({ data }) => {
        setUserList(data.users);
        setIsloading(false);
      })
      .catch((error) => setErr(error));
  }, [loggedInUser]);

  if (isLoading) {
    return <p>Fetching users...</p>;
  }
  if (err) {
    return <p> {err} </p>;
  }

  return <SelectUserGenerator userList={userList} />;
};

export default SelectUser;
// username: 'tickle122', name: 'Tom Tickle', avatar_url: 'https://vignet
