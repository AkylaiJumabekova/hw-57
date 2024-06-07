import React from "react";
import { User } from "../types";

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h4>Users</h4>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{user.name}</h5>
                  <p>{user.email}</p>
                  <p>{user.role}</p>
                  <p>{user.active ? "Active" : "Inactive"}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
