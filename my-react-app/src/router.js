import { createBrowserRouter } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import AlbumsPage from "./pages/AlbumsPage";
import PhotosPage from "./pages/PhotosPage";
import UsersWrapper from "./pages/UsersWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersWrapper />,
    children: [
      { 
        path: "",
        element: <UsersPage />,
      },
      {
        path: "/albums/:id",
        element: <AlbumsPage />,
      },
      {
        path: "/albums/photos/:id",
        element: <PhotosPage />,
      },
    ]
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

export default router;