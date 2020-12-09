import React, { useState, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useHistory } from "react-router-dom";
import "./UserList.css";

const UserList = () => {
  const [user, setUser] = useState({});

  let history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users")
      .then((res) => {
        const userData = res.data.data;
        setUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (e) => {
    try {
      const user = await axios.delete(
        `http://localhost:5000/api/v1/users/${e.target.name}`
      );
      alert("User Deleted Succefully");
    } catch (err) {
      console.log(err);
    }
  };

  const changeRoute = async (e) => {
    history.push(`users/${e.target.name}`);
  };

  return (
    <ListGroup className="listGroup">
      {user.length &&
        user.map((item) => (
          <ListGroup.Item className="listItem" key={item._id}>
            {item.firstName} {item.lastName}
            <ButtonGroup aria-label="btnGroup">
              <Button
                variant="primary"
                className="btn-primary"
                name={item._id}
                onClick={changeRoute}
              >
                Details
              </Button>
              <Button variant="danger" name={item._id} onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default UserList;
