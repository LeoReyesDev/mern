import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PersonTableRow from './PersonTableRow';

export default class PersonList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: []
    };
  }

  componentWillMount() {
    axios.get('http://localhost:8080/persons/')
      .then(res => {
        this.setState({
          persons: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.persons.map((res, i) => {
      return <PersonTableRow obj={res} key={i} keyId={i} />;
    });
  }


  render() {

    return (
      <div >
        <h4>Persons List</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Last name</th>
              <th>First Name</th>
              <th>Aliases</th>
              <th>Role actor</th>
              <th>Role Director</th>
              <th>Role Producer</th>
            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
      </div>);
  }
}


