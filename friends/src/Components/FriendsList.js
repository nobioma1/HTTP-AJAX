import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPlus, FaRegEdit, FaTrashAlt } from 'react-icons/fa';

import { ContainerCard, ContainerCardHeader } from './sharedStyle';

const FriendDiv = styled.li`
  border-bottom: 1px solid #899878;

  &:last-child {
    border-bottom: none;
  }

  p {
    margin: 5px 0;
  }

  span {
    font-weight: 500;
    font-size: 18px;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  margin: 5px 0;

  button {
    padding: 5px;
    margin: 5px;
    border: 1px solid gray;
    font-size: 15px;
    border-radius: 3px;
  }
`;

const goToAddFriend = history => history.push('/add_friend');
const goToEditFriend = (history, id) => history.push(`/edit_friend/${id}`);

const FriendList = ({ friends, history, deleteFriend }) => {
  return (
    <ContainerCard>
      <ContainerCardHeader>
        <h3>My Friends</h3>
        <button onClick={() => goToAddFriend(history)}>
          <FaPlus /> Add New Friend
        </button>
      </ContainerCardHeader>
      <ol>
        {friends.map(friend => (
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
            <ButtonsContainer>
              <button onClick={() => goToEditFriend(history, friend.id)}>
                <FaRegEdit /> Edit
              </button>
              <button onClick={() => deleteFriend(friend.id)}>
                <FaTrashAlt /> Delete
              </button>
            </ButtonsContainer>
          </FriendDiv>
        ))}
      </ol>
    </ContainerCard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
};

FriendList.defaultProps = {
  friends: []
};

export default FriendList;
