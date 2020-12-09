import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUpForm.css";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const UpdateForm = (props) => {
  const { id } = useParams();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    profileImage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = await axios.put(
        `http://localhost:5000/api/v1/users/${id}`,
        state,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("User Updated Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const { firstName, lastName, email, phone, profileImage, password } = state;

  return (
    <div className="form">
      <Card>
        <Card.Title style={{ textAlign: "center" }}>
          Update User Details
        </Card.Title>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={firstName}
              placeholder="Enter First Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Enter Last Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={phone}
              placeholder="Enter Phone Number"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              password={password}
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default UpdateForm;
