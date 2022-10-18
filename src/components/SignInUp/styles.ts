import styled from "styled-components";

export const Container = styled.div``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 75px;
  padding: 40px 30px 30px 40px;
  background-color: white;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #d2d2d2;
  border-radius: 0.25rem;
  font-size: 15px;
  padding: 12px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  background: #4981f8;
  border: none;

  &:disabled {
    background: #c8c8c8;
    cursor: not-allowed;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0 20px 0;
`;

export const FormTypeButton = styled.button<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "black" : "#C8C8C8")};
  border: none;
  background: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 20px;
  padding: 0;
`;

export const Text = styled.span`
  font-size: 13px;
  color: #ff9900;
`;
