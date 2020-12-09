import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  let history = useHistory();
  const changeRoute = (route) => {
    history.push(route);
  };
  return (
    <Navbar style={{ display: "flex", justifyContent: "space-between" }}>
      <Navbar.Brand onClick={() => changeRoute("/users")}>
        Users CRUD
      </Navbar.Brand>
      <Navbar.Text onClick={() => changeRoute("/signup")}>Signup</Navbar.Text>
    </Navbar>
  );
};

export default NavBar;
