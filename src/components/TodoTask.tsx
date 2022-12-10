import React from "react";
import { ITask } from "../Interfaces";
import styled from "styled-components";
import deleteIcon from "../assets/deleteicon.png";
import iconCircle from "../assets/Vector.png";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
  taskname?: any;
  dark?: boolean;
}

export const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <ListWrapper>
      <List>
        <Note>{task.taskname}</Note>
        <NoteDate>xcbbbb</NoteDate>
      </List>
      <Action>
        <Mark />
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
`;
const Action = styled.div`
  width: 70px;
  margin-right: 0px;
`;
const Mark = styled.button`
  background: url(${iconCircle}) no-repeat;
  width: 22px;
  height: 22px;
  margin-right: 15px;
  cursor: pointer;
`;
const Delete = styled.button`
  background: url(${deleteIcon}) no-repeat;
  width: 22px;
  height: 23px;
  cursor: pointer;
`;
export default TodoTask;