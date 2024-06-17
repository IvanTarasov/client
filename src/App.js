import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";


function App() {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))}, 10)
  })

  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}

export default App;
