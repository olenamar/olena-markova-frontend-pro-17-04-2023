import { Link } from "react-router-dom";

export default function UsersAlbums(props) {
  return(
    <div>
      <p key={props.item.id}>Username: {props.item.name}</p>
      <Link to={`/albums/${props.item.id}`}>Album</Link>
    </div>
  );
}