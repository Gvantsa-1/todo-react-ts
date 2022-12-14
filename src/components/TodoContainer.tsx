import React from "react";
import styled from "styled-components";
import icon from "../assets/checklist.png";
import { useState, useEffect } from "react";
import { ITask } from "../Interfaces";
import { TodoTask } from "../components/TodoTask";

interface Props {
  dark?: boolean;
  completed?: boolean | undefined;
}
interface todo {
  id?: ITask;
  taskname?: string;
  deleteTask(Taskdelete: undefined): void;
  activeTask(Taskdelete: undefined): void;
}
export const TodoContainer = (Props: boolean | any) => {
  const { dark, formatAMPM } = Props;
  const [todoList, setTodoList] = useState<any>([]);
  const [marked, setMarked] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const handleMarked = (id: string | number) => {
    setMarked(!marked);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(event.target.value);
  };
  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task: any = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskname: newTask,
      completed: false,
    };
    const newTodoList: string[] | any = [...todoList, task];
    setTodoList(newTodoList);
  };
  const deleteTask = (id: string | number): void => {
    setTodoList(todoList.filter((task: string[] | any) => task.id !== id));
  };

  const markTask = (): void => {};
  const activeTask = (id: string | number): void => {};
  const allTask = (id: string | number): void => {};

  return (
    <TodoBox dark={dark}>
      <form onSubmit={addTask}>
        {" "}
        <InputWrapper>
          <MainInput
            key={"id"}
            name="task"
            onChange={handleChange}
            placeholder="Note"
            required
          />
          <AddButton type="submit">+</AddButton>
        </InputWrapper>{" "}
      </form>
      <BtnWrapper>
        <BtnAll onClick={() => allTask("")}>All</BtnAll>
        <BtnActive onClick={() => activeTask("")}>Active</BtnActive>
        <BtnComplete onClick={() => markTask()}>Completed</BtnComplete>
      </BtnWrapper>
      {todoList.map((task: ITask, key: number, id: number) => {
        return (
          <TodoTask
            key={key}
            task={task}
            deleteTask={deleteTask}
            formatAMPM={formatAMPM}
            id={id}
          />
        );
      })}
    </TodoBox>
  );
};

const TodoBox = styled.div<Props>`
  width: 430px;
  height: 600px;
  background: ${(props) =>
    props.dark ? "rgba(219, 215, 215, 0.799)" : "#ffffff"};
  overflow-y: auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 23px 29px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
`;
const MainInput = styled.input`
  background: url(${icon}) no-repeat 14px;
  background-color: #ebeff2;
  width: 275px;
  height: 49px;
  border-radius: 5px;
  color: #888888;
  padding: 14px 56px;
`;

const AddButton = styled.button`
  background-color: #20eeb0;
  width: 88px;
  height: 49px;
  color: #ffffff;
  font-size: 28px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: #16bd96eb;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;
const BtnAll = styled.button`
  background-color: #20eeb0;
  width: 110px;
  height: 49px;
  color: #ffffff;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s linear;
  &:hover {
    background-color: #2bad77;
  }
  &:focus {
    background-color: #066f4b;
  }
`;
const BtnActive = styled.button`
  background-color: #20eeb0;
  width: 110px;
  height: 49px;
  color: #ffffff;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s linear;
  &:hover {
    background-color: #2bad77;
  }
  &:focus {
    background-color: #066f4b;
  }
`;
const BtnComplete = styled.button`
  background-color: #20eeb0;
  width: 110px;
  height: 49px;
  color: #ffffff;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s linear;
  &:hover {
    background-color: #2bad77;
  }
  &:focus {
    background-color: #066f4b;
  }
`;
