import React, { Component } from 'react';
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

class AddFriend extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  inputHandler = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
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

  goBack = () => this.props.history.goBack();

  render() {
    const pathName = this.props.location.pathname;
    const formOperation = pathName === '/add_friend' ? 'Add New' : 'Edit';

    return (
      <ContainerCard>
        <ContainerCardHeader>
          <button onClick={this.goBack}>
            <FaChevronLeft />
            Go Back
          </button>
          <h3>{`${formOperation} Friend`}</h3>
        </ContainerCardHeader>
        <Form onSubmit={this.submitNewFriend}>
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
            {formOperation !== 'Edit' ? 'Add My New Friend' : 'Save Changes'}
          </button>
        </Form>
      </ContainerCard>
    );
  }
}

export default AddFriend;
