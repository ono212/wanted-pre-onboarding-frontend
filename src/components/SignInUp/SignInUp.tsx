import AuthContext from "context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "utils/apis/signIn";
import { signUp } from "utils/apis/signUp";
import { setLocalStorageItem } from "utils/localStorage";
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
  const { setAuth } = useContext(AuthContext);
  const [formType, setFormType] = useState("로그인");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setDisable(!(values.email.includes("@") && values.password.length >= 8));
  }, [values]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res =
        formType === "회원가입" ? await signUp(values) : await signIn(values);
      alert(`${formType}에 성공했습니다.`);

      const { access_token } = res.data;

      setLocalStorageItem("auth", access_token);
      setAuth({ token: access_token });
      navigate("/todos");
    } catch (err) {
      alert(`${formType}에 실패했습니다.`);
      console.log(err);
    }
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
      <Button disabled={disable} onClick={handleSubmit}>
        {formType}
      </Button>
    </Form>
  );
};

export default SignInUp;
