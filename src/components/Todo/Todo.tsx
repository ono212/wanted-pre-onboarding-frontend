import TodoForm from "components/TodoForm/TodoForm";
import AuthContext from "context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { createTodo, deleteTodo, getTodo, updateTodo } from "utils/apis/todo";

interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = () => {
  const { auth } = useContext(AuthContext);
  const [todos, setTodos] = useState<TodoType[]>();
  const [value, setValue] = useState<string>("");
  const [editItem, setEditItem] = useState<number | null>(null);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      let res = await getTodo(auth.token);
      setTodos(res.data);
    } catch (err) {
      alert("실패");
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCreate = async (newValue: string) => {
    try {
      await createTodo(auth.token, newValue);
      await fetchTodo();
    } catch (err) {
      alert("실패");
      console.log(err);
    }
  };

  const handleModify = async (
    id: number,
    newValue: string,
    isCompleted: boolean
  ) => {
    try {
      await updateTodo(auth.token, id, newValue, isCompleted);
      await fetchTodo();
      setEditItem(null);
      setValue("");
    } catch (err) {
      alert("실패");
      console.log(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(auth.token, id);
      await fetchTodo();
    } catch (err) {
      alert("실패");
      console.log(err);
    }
  };

  return (
    <div>
      <TodoForm handleSubmit={handleCreate} />
      <ul>
        {todos?.map(({ id, todo, isCompleted }) =>
          editItem === id ? (
            <li data-id={id} className="todo-item">
              <input
                type="text"
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={handleChange}
              />
              <button onClick={() => handleModify(id, value, isCompleted)}>
                수정완료
              </button>
              <button onClick={() => setEditItem(null)}>취소</button>
            </li>
          ) : (
            <li data-id={id} className="todo-item">
              {isCompleted ? <s>{todo}</s> : todo}
              <button
                className="modify"
                onClick={() => {
                  setEditItem(id);
                  setValue(todo);
                }}
              >
                수정
              </button>
              <button
                className="modify"
                onClick={() => handleModify(id, todo, !isCompleted)}
              >
                완료
              </button>
              <button className="remove" onClick={() => handleDelete(id)}>
                삭제
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Todo;
