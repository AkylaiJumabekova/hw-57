import { User } from "../types";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
        <p className="card-text">{user.role}</p>
        <p className="card-text">{user.active ? "Active" : "Inactive"}</p>
      </div>
    </div>
  );
};

export default UserItem;
