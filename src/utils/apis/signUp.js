import axios from "axios";

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
    })
    .catch((err) => {
      alert("화원가입에 실패했습니다.");
      console.log(err);
    });
};
