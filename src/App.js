import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import CreatePerson from "./components/create-person"
import EditPerson from "./components/edit-person"
import PersonList from "./components/person-list"

import CreateMovie from "./components/create-movie"
import EditMovie from "./components/edit-movie"
import MovieList from "./components/movie-list"



function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-person"} className="nav-link">
                CRUD MOVIES & ACTORS
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-person"} className="nav-link">
                  Create Person
                </Link>
              </Nav>

              <Nav>
                <Link to={"/person-list"} className="nav-link">
                  Persons List
                </Link>
              </Nav>
            </Nav>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-movie"} className="nav-link">
                  Create Movie
                </Link>
              </Nav>

              <Nav>
                <Link to={"/movie-list"} className="nav-link">
                  Movies List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreatePerson} />
                <Route path="/create-person" component={CreatePerson} />
                <Route path="/edit-person/:id" component={EditPerson} />
                <Route path="/person-list" component={PersonList} />
                <Route path="/create-movie" component={CreateMovie} />
                <Route path="/edit-movie/:id" component={EditMovie} />
                <Route path="/movie-list" component={MovieList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;