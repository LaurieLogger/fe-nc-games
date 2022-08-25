import React from "react";
import SelectUserItem from "./SelectUserItem";

const SelectUserGenerator = ({ userList }) => {
  return (
    <ul className="user__list">
      {userList.map(({ username, name, avatar_url }) => {
        return (
          <SelectUserItem
            username={username}
            name={name}
            avatar_url={avatar_url}
            key={username}
          />
        );
      })}
    </ul>
  );
};

export default SelectUserGenerator;
