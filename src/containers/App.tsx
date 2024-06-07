import React, { useState } from 'react';
import UserForm from '../components/UserForm/UserForm';
import Users from '../components/Users/Users';
import { User } from '../types';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <UserForm onAddUser={addUser} />
        </div>
        <div className="col-md-6">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;