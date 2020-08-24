import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';




const PersonsTableRow = (props) => {

    const [register, setRegister] = useState({})

    const deleteMovie = () => {
        axios.delete('http://localhost:4000/movies/delete-movie/' + props.obj._id)
            .then((res) => {
                console.log('Movie has been deleted!')
                getId()
            }).catch((error) => {
                console.log(error)
            })
    }

    const getId = () => {
        let divName = document.getElementById(`${props.keyId}`)
        console.log("getID", divName)
        divName.style.display = "none"
    }

    return (
        <tr id={props.keyId}>
            <td>{props.obj.title}</td>
            <td>{props.obj.releaseYear}</td>
            <td>{props.obj.casting}</td>
            <td>{props.obj.directors}</td>
            <td>{props.obj.producers}</td>
            <td>
                <Button onClick={deleteMovie} size="sm" variant="danger">Delete</Button>
            </td>
            <td>
                <Link className="edit-link" to={"/edit-movie/" + props.obj._id}>Edit</Link>
            </td>
        </tr>

    );

}

export default PersonsTableRow
