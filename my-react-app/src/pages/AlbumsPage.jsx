import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAlbums } from "../api/index";
import AlbumsPhotos from "../Components/AlbumsPhotos";

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

  const listAlbums = albums.map(album => <AlbumsPhotos key={album.id} item={album} />)
  
  return (
    <div>
      <h1>List of albums</h1>
      <p>{listAlbums}</p>
    </div>
  );
}