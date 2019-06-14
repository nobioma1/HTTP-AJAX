import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

import { ContainerCard, ContainerCardHeader } from './sharedStyle';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 500px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid gray;
    margin: 10px;
    font-size: 15px;
  }

  button {
    padding: 10px;
    font-size: 15px;
    border-radius: 3px;
    transition: 0.4s ease-in-out;
    &:hover {
      background-color: lightgreen;
    }
  }
`;

class FriendForm extends Component {
  state = {
    id: null,
    name: '',
    age: '',
    email: '',
    formAction: null
  };

  componentDidMount() {
    const pathName = this.props.location.pathname;
    const formOperation = pathName === '/add_friend' ? 'Add New' : 'Edit';
    this.setState({ formAction: formOperation });

    if (formOperation === 'Edit') this.getFriend();
  }

  inputHandler = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  goBack = () => this.props.history.goBack();

  addNewFriend = newFriend => {
    axios
      .post(`http://localhost:5000/friends/`, newFriend)
      .then(() => {
        this.props.fetchAll();
        this.props.history.push('/');
      })
      .catch(err => this.setState({ err: err.message }));
  };

  getFriend = () => {
    const id = this.props.match.params.id;
    const details = this.props.filterFriend(id);
    this.setState({
      id,
      name: details[0].name,
      age: details[0].age,
      email: details[0].email
    });
  };

  updateFriend = newDetails => {
    axios
      .put(`http://localhost:5000/friends/${this.state.id}`, newDetails)
      .then(() => {
        this.props.fetchAll();
        this.props.history.push('/');
      })
      .catch(err => this.setState({ err: err.message }));
  };

  onSubmit = event => {
    event.preventDefault();
    const obj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    const action = this.state.formAction;
    if (action === 'Add New') this.addNewFriend(obj);
    if (action === 'Edit') this.updateFriend(obj);    
  };

  render() {
    return (
      <ContainerCard>
        <ContainerCardHeader>
          <button onClick={this.goBack}>
            <FaChevronLeft />
            Go Back
          </button>
          <h3>{`${this.state.formAction} Friend`}</h3>
        </ContainerCardHeader>
        <Form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.inputHandler}
            placeholder="Friend's Name"
            value={this.state.name}
          />
          <input
            type="number"
            name="age"
            onChange={this.inputHandler}
            placeholder="Friend's Age"
            value={this.state.age}
          />
          <input
            type="email"
            name="email"
            onChange={this.inputHandler}
            placeholder="Friend's email"
            value={this.state.email}
          />
          <button>
            {this.state.formAction !== 'Edit'
              ? 'Add My New Friend'
              : 'Save Changes'}
          </button>
        </Form>
      </ContainerCard>
    );
  }
}

export default FriendForm;
