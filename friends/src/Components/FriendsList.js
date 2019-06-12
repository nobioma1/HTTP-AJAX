import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

import { ContainerCard, ContainerCardHeader } from './sharedStyle';

const FriendDiv = styled.li`
  border-bottom: 1px solid #899878;
  &:last-child {
    border-bottom: none;
  }

  span {
    font-weight: 500;
    font-size: 18px;
  }
`;

const FriendForm = props => {
  const goToAddFriend = () => props.history.push('/add_friend');

  return (
    <ContainerCard>
      <ContainerCardHeader>
        <h3>My Friends</h3>
        <button onClick={goToAddFriend}>
          <FaPlus /> Add New Friend
        </button>
      </ContainerCardHeader>
      <ol>
        {props.friends.map(friend => (
          <FriendDiv key={friend.id}>
            <p>
              Name: <span>{friend.name}</span>
            </p>
            <p>
              Age: <span>{friend.age}</span>
            </p>
            <p>
              email: <span>{friend.email}</span>
            </p>
          </FriendDiv>
        ))}
      </ol>
    </ContainerCard>
  );
};

FriendForm.propTypes = {
  friends: PropTypes.array.isRequired
};

FriendForm.defaultProps = {
  friends: []
};

export default FriendForm;
