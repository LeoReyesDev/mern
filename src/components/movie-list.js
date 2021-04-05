import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MoviesTableRow from "./MoviesTableRow";

export default class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:4000/movies/")
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.movies.map((res, i) => {
      return <MoviesTableRow obj={res} key={i} keyId={i} />;
    });
  }

  render() {
    return (
      <div>
        <h4>MOVIES LIST</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Release Year</th>
              <th>Casting (Actors + actress)</th>
              <th>Role actor</th>
              <th>Directors</th>
              <th>Producers</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
