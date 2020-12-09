import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/${id}`)
      .then((res) => {
        const userData = res.data.data;
        setUser(userData);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = async (e) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/users/${id}`);
      history.push(`/users`);
    } catch (err) {
      console.log(err);
    }
  };
  const { firstName, lastName, phone, email, _id } = user;

  const changeRoute = () => {
    history.push(`/userUpdate/${_id}`);
  };
  return (
    <Card className="userCard">
      <Card.Title> User Details </Card.Title>
      <Card.Body className="cardBody">
        {" "}
        <div>User ID:</div> <div>{_id}</div>{" "}
      </Card.Body>
      <Card.Body className="cardBody">
        <div>Full name:</div>{" "}
        <div>
          {firstName} {lastName}
        </div>
      </Card.Body>
      <Card.Body className="cardBody">
        {" "}
        <div> Phone Number:</div> <div>{phone}</div>
      </Card.Body>
      <Card.Body className="cardBody">
        {" "}
        <div>Email:</div> <div>{email}</div>{" "}
      </Card.Body>
      <Button variant="primary" onClick={changeRoute}>
        Update
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </Card>
  );
};

export default UserDetails;
