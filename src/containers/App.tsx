import { useState } from "react";
import UserForm from "../components/UserForm/UserForm";
import Users from "../components/Users/Users";
import { User } from "../types";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <UserForm onSubmit={addUser} />
        </div>
        <div className="col-md-6">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
