import React from "react";
import { User } from "../types";
import UserItem from "../UserItem/UserItem";

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h4>Пользователи</h4>
      {users.length === 0 ? (
        <p>Пользователи не добавлены.</p>
      ) : (
        users.map((user, index) => <UserItem key={index} user={user} />)
      )}
    </div>
  );
};

export default Users;
