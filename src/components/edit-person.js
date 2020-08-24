import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditPerson extends Component {

  constructor(props) {
    super(props)

    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeAliases = this.onChangeAliases.bind(this);
    this.onChangeRoleActor = this.onChangeRoleActor.bind(this);
    this.onChangeRoleDirector = this.onChangeRoleDirector.bind(this);
    this.onChangeRoleProducer = this.onChangeRoleProducer.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      lastName: '',
      firstName: '',
      aliases: '',
      roleActor: '',
      roleDirector: '',
      roleProducer: '',
      refresh: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/persons/edit-person/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          lastName: this.state.lastName,
          firstName: this.state.firstName,
          aliases: this.state.aliases,
          roleActor: this.state.roleActor,
          roleDirector: this.roleDirector,
          roleProducer: this.roleProducer,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeLastName(e) {
    this.setState({ lastName: e.target.value })
  }

  onChangeFirstName(e) {
    this.setState({ firstName: e.target.value })
  }

  onChangeAliases(e) {
    this.setState({ aliases: e.target.value })
  }

  onChangeRoleActor(e) {
    this.setState({ roleActor: e.target.value })
  }

  onChangeRoleDirector(e) {
    this.setState({ roleDirector: e.target.value })
  }

  onChangeRoleProducer(e) {
    this.setState({ roleProducer: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const personObject = {
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      aliases: this.state.aliases,
      roleActor: this.state.roleActor,
      roleDirector: this.state.roleDirector,
      roleProducer: this.state.roleProducer
    };

    axios.put('http://localhost:8080/persons/update-person/' + this.props.match.params.id, personObject)
      .then((res) => {
        console.log(res.data)
        this.setState({
          lastName: personObject.lastName,
          firstName: personObject.firstName,
          aliases: personObject.aliases,
          roleActor: personObject.roleActor,
          roleDirector: personObject.roleDirector,
          roleProducer: personObject.roleProducer
        })
        console.log('Student successfully updated', personObject)

      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/person-list')
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" value={this.state.lastName || ''} onChange={this.onChangeLastName} />
          </Form.Group>

          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" value={this.state.firstName || ''} onChange={this.onChangeFirstName} />
          </Form.Group>

          <Form.Group controlId="aliases">
            <Form.Label>Aliases</Form.Label>
            <Form.Control required type="text" value={this.state.aliases || ''} onChange={this.onChangeAliases} />

          </Form.Group>

          <Form.Group controlId="roleActor">
            <Form.Label>Role Actor</Form.Label>
            <Form.Control required type="text" value={this.state.roleActor || ''} onChange={this.onChangeRoleActor} />
          </Form.Group>

          <Form.Group controlId="roleDirector">
            <Form.Label>Role Director</Form.Label>
            <Form.Control required type="text" value={this.state.roleDirector || ''} onChange={this.onChangeRoleDirector} />
          </Form.Group>

          <Form.Group controlId="roleProducer">
            <Form.Label>Role Director</Form.Label>
            <Form.Control required type="text" value={this.state.roleProducer || ''} onChange={this.onChangeRoleProducer} />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update Person
        </Button>
        </Form>
      </div>);
  }
}
