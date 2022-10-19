import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  // gap: 20px;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 1px solid #d2d2d2;
  border-radius: 0.25rem;
  font-size: 15px;
  padding: 12px;
  width: 70%;
`;

export const Button = styled.button`
  width: 25%;
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  background: #4981f8;
  border: none;
  border-radius: 0.25rem;
`;
