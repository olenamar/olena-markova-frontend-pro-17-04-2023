import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPhotos } from "../api/index"

export default function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const params = useParams();

  const getPhotos = async (id) => {
    const { data } = await fetchPhotos(id);
    setPhotos(data);
  };

  useEffect(() => {
    getPhotos(params.id);
  });

  const albumPhotos = photos.map(photo => <img key={photo.id} src={photo.thumbnailUrl} />);

  return (
    <div>
      <h1>Photo album</h1>
      <div>
        <p>{albumPhotos}</p>
      </div>
    </div>
  );
}