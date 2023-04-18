import { Link } from "react-router-dom";

export default function AlbumsPhotos(props) {
  return(
    <div>
      <p>Album: {props.item.title}</p>
      <Link to={`/albums/photos/${props.item.id}`}>Album photo</Link>
    </div>
  );
}