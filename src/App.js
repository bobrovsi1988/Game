import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeList from './Components/Home/HomeList';
import { Switch, Route } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';
import Example from './Components/Card/example';
function App() {
  return (
      <Container>
          <Row>
              <Col md={4}>
                  <HomeList/>
              </Col>
              <Col md={6} className="">
                  <DndProvider backend={HTML5Backend}>
                      <Switch>
                          <Route exact path='/:homename' component={Example}/>
                      </Switch>
                  </DndProvider>

              </Col>
          </Row>


      </Container>
  );
}

export default App;
