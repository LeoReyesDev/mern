import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const PersonsTableRow = (props) => {
  const deletePerson = () => {
    axios
      .delete("http://localhost:4000/persons/delete-person/" + props.obj._id)
      .then((res) => {
        console.log("Student successfully deleted!");
        getId();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getId = () => {
    let divName = document.getElementById(`${props.keyId}`);
    console.log("getID", divName);
    divName.style.display = "none";
  };

  return (
    <tr id={props.keyId}>
      <td>{props.obj.lastName}</td>
      <td>{props.obj.firstName}</td>
      <td>{props.obj.aliases}</td>
      <td>{props.obj.roleActor}</td>
      <td>{props.obj.roleDirector}</td>
      <td>{props.obj.roleProducer}</td>
      <td>
        <Button onClick={deletePerson} size="sm" variant="danger">
          Delete
        </Button>
      </td>
      <td>
        <Link className="edit-link" to={"/edit-person/" + props.obj._id}>
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default PersonsTableRow;
