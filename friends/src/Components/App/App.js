import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import FriendsList from '../FriendsList';
import Header from '../Header';

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
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ err: err.message }));
  }

  render() {
    return (
      <AppContainer>
        <Header />
        <MainContainer>
          <FriendsList friends={this.state.friends} />
        </MainContainer>
      </AppContainer>
    );
  }
}

export default App;
