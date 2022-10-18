import axios from "axios";
import { setLocalStorageItem } from "utils/localStorage";

export const signUp = (values) => {
  axios
    .post(
      "https://pre-onboarding-selection-task.shop/auth/signup",
      JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      {
        headers: {
          "Content-Type": `application/json`,
        },
      }
    )
    .then((response) => {
      alert("회원가입에 성공했습니다.");
      const { access_token } = response.data;
      setLocalStorageItem("jwtToken", access_token);
    })
    .catch((err) => {
      alert("화원가입에 실패했습니다.");
      console.log(err);
    });
};
