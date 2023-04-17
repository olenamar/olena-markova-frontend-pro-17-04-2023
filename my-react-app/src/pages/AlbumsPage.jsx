import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAlbums } from "../api/index";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const params = useParams();

  const getAlbums = async (id) => {
    const { data } = await fetchAlbums(id);
    setAlbums(data);
  };

  useEffect(() => {
    getAlbums(params.id);
  });

  const listAlbums = albums.map(album => (
    <div>
      <div key={album.id}>{album.title}</div>
      <Link to={`/albums/photos/${album.id}`}>Photos album</Link>
    </div>
  ));
  
  return (
    <div>
      <h1>List of albums</h1>
      <p>{listAlbums}</p>
    </div>
  );
}