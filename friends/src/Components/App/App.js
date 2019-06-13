import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FriendsList from '../FriendsList';
import Header from '../Header';
import FriendForm from '../FriendForm';

const AppContainer = styled.div`
  width: 100%;
`;

const MainContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ err: err.message }));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(() => this.fetchAll())
      .catch(err => this.setState({ err: err.message }));
  }

  render() {
    return (
      <Router>
        <AppContainer>
          <Header />
          <MainContainer>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <FriendsList
                    {...props}
                    friends={this.state.friends}
                    deleteFriend={this.deleteFriend}
                  />
                )}
              />
              <Route
                path="/add_friend"
                render={props => <FriendForm {...props} />}
              />
              <Route
                path="/edit_friend/:id"
                render={props => <FriendForm {...props} />}
              />
            </Switch>
          </MainContainer>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
