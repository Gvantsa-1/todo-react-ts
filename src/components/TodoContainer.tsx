import React from "react";
import styled from "styled-components";
import icon from "../assets/checklist.png";
export const TodoContainer = () => {
  return (
    <TodoBox>
      <InputWrapper>
        <MainInput placeholder="Note" />
        <AddButton>+</AddButton>
      </InputWrapper>
    </TodoBox>
  );
};

const TodoBox = styled.div`
  width: 430px;
  height: 436px;
  background-color: #ffffff;
  overflow-y: auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 23px 28px;
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
`;
