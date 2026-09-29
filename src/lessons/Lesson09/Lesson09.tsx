import { useState, type ChangeEvent } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ToDoList from "../../components/ToDoList/ToDoList";
import { ErrorMessage, Lesson09Wrapper, Title, ToDoContainer } from "./styles";

function Lesson09() {
  // Контролируемый input: его значение хранится в state
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    // Убираем ошибку, как только пользователь начал вводить текст
    if (error) {
      setError("");
    }
  };

  const onAddTask = () => {
    if (inputValue.trim() === "") {
      setError("Field is empty. Please enter a task. Please stop fucking around");
      return;
    }

    // Новая задача попадает в начало списка
    setTasks((prev) => [inputValue.trim(), ...prev]);
    setInputValue("");
    setError("");
  };

  return (
    <Lesson09Wrapper>
      <Title>Lesson 09 // Stuff to do:</Title>
      <ToDoContainer>
        <Input
          name="task"
          id="id_task"
          label="New task"
          placeholder="Enter a task"
          value={inputValue}
          onChange={onChangeInput}
        />
        <Button name="Add" onClick={onAddTask} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ToDoList tasks={tasks} />
      </ToDoContainer>
    </Lesson09Wrapper>
  );
}

export default Lesson09;
