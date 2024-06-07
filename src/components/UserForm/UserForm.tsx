import React, { useState } from "react";
import { User } from "../types";

interface UserFormProps {
  onAddUser: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Добавить пользователя
      </button>
    </form>
  );
};

export default UserForm;
