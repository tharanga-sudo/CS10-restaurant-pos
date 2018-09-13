import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Container } from './styles';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Servers from './components/Servers';
import TablesPage from './components/TablesPage';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import RequireNotAuth from './components/HOC/RequireNotAuth';
import RequireAuth from './components/HOC/RequireAuth';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/login" component={RequireNotAuth(Login)} />
            <Route path="/register" component={RequireNotAuth(Register)} />
            <Route path="/tables" component={RequireAuth(TablesPage)} />
            <Route path="/servers" component={RequireAuth(Servers)} />
            <Route path="/test" component={RequireAuth(Test)} />
            <Route path="/404" component={NotFound} exact />
            <Redirect to="/404" />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
