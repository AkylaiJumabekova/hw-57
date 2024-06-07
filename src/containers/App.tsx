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
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white text-center py-3">
        Our teachers and students
      </header>
      <div className="container mt-4 flex-grow-1">
        <div className="row">
          <div className="col-md-6 mb-4">
            <UserForm onSubmit={addUser} />
          </div>
          <div className="col-md-6 mb-4">
            <Users users={users} />
          </div>
        </div>
      </div>
      <footer className="bg-primary text-white text-center py-3 mt-4">
        Attractor school
      </footer>
    </div>
  );
};

export default App;
