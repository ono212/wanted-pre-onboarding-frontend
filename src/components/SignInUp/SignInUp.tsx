import { useEffect, useState } from "react";
import { signIn } from "utils/apis/signIn";
import { signUp } from "utils/apis/signUp";
import {
  Form,
  ButtonContainer,
  FormTypeButton,
  Label,
  Input,
  Text,
  Button,
} from "./styles";

const SignInUp = () => {
  const [formType, setFormType] = useState("로그인");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setDisable(!(values.email.includes("@") && values.password.length >= 8));
  }, [values]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <ButtonContainer>
        <FormTypeButton
          isActive={formType === "로그인"}
          onClick={(e) => {
            e.preventDefault();
            setFormType("로그인");
          }}
        >
          로그인
        </FormTypeButton>
        <FormTypeButton
          isActive={formType === "회원가입"}
          onClick={(e) => {
            e.preventDefault();
            setFormType("회원가입");
          }}
        >
          회원가입
        </FormTypeButton>
      </ButtonContainer>
      <Label htmlFor="email">이메일</Label>
      <Input
        name="email"
        placeholder="이메일을 입력해주세요"
        type="email"
        value={values.email}
        onChange={handleChange}
        required
      />
      <Label htmlFor="password">비밀번호</Label>
      <Input
        name="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={values.password}
        onChange={handleChange}
        minLength={8}
        required
      />
      <Text>⚠ 비밀번호는 8자 이상입니다.</Text>
      <Button
        disabled={disable}
        onClick={(e) => {
          e.preventDefault();
          formType === "회원가입" ? signUp(values) : signIn(values);
        }}
      >
        {formType}
      </Button>
    </Form>
  );
};

export default SignInUp;
