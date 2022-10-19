import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 15px;
`;

export const TodoItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  button {
    border: none;
    background: cornflowerblue;
    color: whitesmoke;
    border-radius: 0.25rem;
    padding: 5px;
  }
`;
