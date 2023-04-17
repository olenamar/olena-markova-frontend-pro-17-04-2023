import { Outlet } from "react-router-dom";

export default function UsersWrapper() {
  return(
    <div>
      <h1>Users their albums and photo albums</h1>
      <Outlet />
    </div>
  )
}