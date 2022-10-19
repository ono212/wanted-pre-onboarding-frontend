import axios from "axios";
import { AuthType } from "context/AuthProvider";

export const getTodo = (auth: string) => {
  console.log(auth);
  return axios.get("https://pre-onboarding-selection-task.shop/todos", {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
};

export const createTodo = (auth: string, value: string) => {
  console.log(auth);
  return axios.post(
    "https://pre-onboarding-selection-task.shop/todos",
    JSON.stringify({
      todo: value,
    }),
    {
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": `application/json`,
      },
    }
  );
};

export const updateTodo = (
  auth: string,
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  console.log(auth);
  return axios.put(
    `https://pre-onboarding-selection-task.shop/todos/${id}`,
    JSON.stringify({
      todo: todo,
      isCompleted: isCompleted,
    }),
    {
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": `application/json`,
      },
    }
  );
};

export const deleteTodo = (auth: string, id: number) => {
  console.log(auth);
  return axios.delete(
    `https://pre-onboarding-selection-task.shop/todos/${id}`,
    {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    }
  );
};
