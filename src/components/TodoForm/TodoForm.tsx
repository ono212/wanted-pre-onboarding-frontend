import { useState } from "react";

interface Props {
  handleSubmit: (newValue: string) => Promise<void>;
}

const TodoForm = ({ handleSubmit }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={handleChange}
      />
      <button
        className="create"
        onClick={() => {
          handleSubmit(value);
          setValue("");
        }}
      >
        추가하기
      </button>
    </>
  );
};

export default TodoForm;
