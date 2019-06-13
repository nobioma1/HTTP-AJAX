import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 650px;
  border-radius: 3px;
  padding: 10px;
  box-shadow: -4px 4px 9px -4px rgba(34, 39, 37, 1);
  background-color: #f7f7f2;
  margin-bottom: 20px;
`;

export const ContainerCardHeader = styled.div`
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