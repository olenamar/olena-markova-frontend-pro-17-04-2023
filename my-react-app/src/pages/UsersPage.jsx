import { useEffect, useState } from "react";
import { fetchUsers } from "../api/index";
import Users from "../Components/UsersAlbums";

export default function MainPage() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const listUsers = users.map(user => <Users key={user.id} item={user} />);

  return (
    <div>
      <h1>List of users</h1>
      <p>{listUsers}</p>
    </div>
  );
}
