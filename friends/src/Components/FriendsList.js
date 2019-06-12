import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const FriendsListContainer = styled.div`
  width: 650px;
  border-radius: 3px;
  padding: 10px;
  box-shadow: -4px 4px 9px -4px rgba(34, 39, 37, 1);
  background-color: #f7f7f2;
  margin-bottom: 20px;
`;

const FriendsListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  h3 {
    margin: 0;
    text-decoration: underline;
    font-family: cursive;
    font-size: 25px;
  }

  button {
    padding: 5px;
    border-radius: 5px;
    transition: 0.4s ease-in-out;
    &:hover {
      color: #f7f7f2;
      background-color: #899878;
    }
  }
`;

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

const FriendsList = props => {
  return (
    <FriendsListContainer>
      <FriendsListHeader>
        <h3>My Friends</h3>
        <button>
          <FaPlus /> Add New Friend
        </button>
      </FriendsListHeader>
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
    </FriendsListContainer>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
};

FriendsList.defaultProps = {
  friends: []
};

export default FriendsList;
