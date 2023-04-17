export default function AlbumsPhotos(props) {
  return(
    <div>
      <img src={props.item.thumbnailUrl} alt={props.item.title}></img>
    </div>
  );
}
  