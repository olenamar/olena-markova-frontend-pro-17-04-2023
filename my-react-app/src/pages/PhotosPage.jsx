import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../api/index"
import UserPhotos from "../Components/AlbumsPhotos";

export default function AlbumsPage() {
  const [photos, setPhotos] = useState([]);
  const params = useParams();

  const getPhotos = async (id) => {
    const { data } = await fetchPhotos(id);
    setPhotos(data);
  };

  useEffect(() => {
    getPhotos(params.id);
  });

  const albumPhotos = photos.map(photo => <UserPhotos key={photo.id} item={photo} />);

  return (
    <div>
      <h1>Photo album</h1>
      <div>
        <p>{albumPhotos}</p>
      </div>
    </div>
  );
}