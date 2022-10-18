import axios from "axios";

export const signIn = (values) => {
  axios
    .post(
      "https://pre-onboarding-selection-task.shop/auth/signin",
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
      alert("로그인에 성공했습니다.");
    })
    .catch((err) => {
      alert("로그인에 실패했습니다.");
      console.log(err);
    });
};
