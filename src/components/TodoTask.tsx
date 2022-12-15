import React from "react";
import { ITask } from "../Interfaces";
import styled from "styled-components";
import deleteIcon from "../assets/deleteicon.png";
import iconCircle from "../assets/Vector.png";
import { useState } from "react";
import icon from "../assets/checklist.png";

interface Props {
  task: ITask;
  deleteTask: (deleteTask: string) => void;
  taskname?: any;
  dark?: boolean;
  marked?: boolean;
  setCompleted: boolean;
  todoList: any;
  completeTask(Task: string | number): void;
}

const today = new Date();
let hour = today.getHours();
const noteampm = hour >= 12 ? "PM" : "AM";
hour %= 12;
hour = hour || 12;
const noteDates = today.getDate();
const noteHours = today.getHours();
let minutes: number | string = today.getMinutes();

const noteMinutes = (minutes = minutes < 10 ? `0${minutes}` : minutes);

export const TodoTask = (props: any) => {
  const {
    task,
    deleteTask,
    todoList,
    completeTask,
    handleMarked,
    formatAMPM,
    id,
  } = props;
  const [marked, setMarked] = useState<boolean>(false);

  return (
    <ListWrapper>
      <List>
        <Note>{task.taskname}</Note>
        <NoteDate>
          {noteDates} at {noteHours}:{noteMinutes} {noteampm}
        </NoteDate>
      </List>
      <Action>
        <Mark
          onClick={() => completeTask(task.id)}
          style={{
            backgroundImage: marked ? `url(${icon})` : `url(${iconCircle})`,
          }}
        />

        <Delete onClick={() => deleteTask(task.id)} />
      </Action>
    </ListWrapper>
  );
};
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const List = styled.div`
  display: block;
  align-items: center;
  flex-direction: column;
  margin-bottom: 9px;
`;
const Note = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  color: #0d0d0d;
  font-family: "Inter", sans-serif;
  padding-top: 15px;
`;
const NoteDate = styled.div`
  padding: 5px;
  width: 280px;
  color: #888888;
`;
const Action = styled.div`
  width: 70px;
  margin-right: 0px;
`;
const Mark = styled.button`
  background: no-repeat;
  overflow-y: auto;
  width: 22px;
  height: 22px;
  margin-right: 15px;
  cursor: pointer;
`;
const MarkWrapper = styled.div`
  display: inline;
  padding: 1%;
`;
const Delete = styled.button`
  background: url(${deleteIcon}) no-repeat;
  width: 22px;
  height: 23px;
  cursor: pointer;
`;
export default TodoTask;
