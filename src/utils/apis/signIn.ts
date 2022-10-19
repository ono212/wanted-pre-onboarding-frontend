import axios from "axios";

export const signIn = (values: { email: string; password: string }) => {
  return axios.post(
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
  );
};
