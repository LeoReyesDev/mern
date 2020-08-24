import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class CreateMovie extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.oonChangeReleaseYear = this.oonChangeReleaseYear.bind(this);
    this.onChangeCasting = this.onChangeCasting.bind(this);
    this.onChangeDirectors = this.onChangeDirectors.bind(this);
    this.onChangeProducers = this.onChangeProducers.bind(this);

    this.onSubmit = this.onSubmit.bind(this);


    // Setting up state
    this.state = {
      title: '',
      releaseYear: '',
      casting: '',
      directors: '',
      producers: '',
    }
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  oonChangeReleaseYear(e) {
    this.setState({ releaseYear: e.target.value })
  }

  onChangeCasting(e) {
    this.setState({ casting: e.target.value })
  }

  onChangeDirectors(e) {
    this.setState({ directors: e.target.value })
  }

  onChangeProducers(e) {
    this.setState({ producers: e.target.value })
  }



  onSubmit(e) {
    e.preventDefault()

    const movieObject = {
      title: this.state.title,
      releaseYear: this.state.releaseYear,
      casting: this.state.casting,
      directors: this.state.directors,
      producers: this.state.producers
    };

    axios.post('http://localhost:4000/movies/create-movie', movieObject)
      .then(res => console.log("DATAOBJECT", res.data));

    console.log("DATJSON", movieObject)
    this.setState({
      title: this.state.title,
      releaseYear: this.state.releaseYear,
      casting: this.state.casting,
      directors: this.state.directors,
      producers: this.state.producers
    });
  }

  render() {
    return (<div className="form-wrapper">
      <h3>CREATE MOVIE</h3>
      <Form onSubmit={this.onSubmit}>

        <Form.Group controlId="LastName">
          <Form.Label>Title</Form.Label>
          <Form.Control required type="text" value={this.state.title} onChange={this.onChangeTitle} />
        </Form.Group>

        <Form.Group controlId="firstName">
          <Form.Label>Release Year</Form.Label>
          <Form.Control required type="text" value={this.state.releaseYear} onChange={this.oonChangeReleaseYear} />
        </Form.Group>

        <Form.Group controlId="aliases">
          <Form.Label>Casting</Form.Label>
          <Form.Control required type="text" value={this.state.casting} onChange={this.onChangeCasting} />
        </Form.Group>

        <Form.Group controlId="roleActor">
          <Form.Label>Director</Form.Label>
          <Form.Control required type="text" value={this.state.director} onChange={this.onChangeDirectors} />
        </Form.Group>

        <Form.Group controlId="roleProducer">
          <Form.Label>Producer</Form.Label>
          <Form.Control required type="text" value={this.state.producers} onChange={this.onChangeProducers} />
        </Form.Group>



        <Button variant="danger" size="lg" block="block" type="submit">
          Create movie
        </Button>
      </Form>
    </div>);
  }
}
