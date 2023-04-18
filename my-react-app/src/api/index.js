import axios from "axios";

export const fetchUsers = () => axios.get(`https://jsonplaceholder.typicode.com/users`);

export const fetchAlbums = userId => axios.get(`https://jsonplaceholder.typicode.com/albums/?userId=${userId}`);

export const fetchPhotos = albumId => axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);