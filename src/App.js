import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'mainnet')

export default function App() {
  React.useEffect(
    () => {
      if (window.walletConnection.isSignedIn()) {
        // window.contract is set by initContract in index.js
    
      }
    }
  )

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="paras">Paras</Nav.Link>
            <Nav.Link onClick={(window.accountId === "" ? login : logout)}>
              {window.accountId === ""?" Login" : window.accountId }</Nav.Link>
          </Nav>
        </Navbar.Collapse> 
        </Container>
      </Navbar>
    </Router>
  );
}
