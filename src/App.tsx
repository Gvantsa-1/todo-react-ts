import styled from "styled-components";
import bgImage from "./assets/dandelion.jpg";
import Moment from "react-moment";
import "moment-timezone";

function App() {
  return (
    <MainContainer>
      <Title>Todo</Title>
      <MainImage>
        <DateBox>
          <Moment format=" D"></Moment>
        </DateBox>
        <ClockBox></ClockBox>
      </MainImage>
      <TodoContainer></TodoContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div``;
const Title = styled.h1`
  font-weight: 700;
  font-size: 96px;
  color: #2e3b1caf;
`;
const MainImage = styled.div`
  background-image: url(${bgImage});
  width: 430px;
  height: 202px;
  background-position: bottom;
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 20px;
  font-family: "Russo One", sans-serif;
  opacity: 0.8;
`;
const DateBox = styled.div`
  font-size: 18px;
  color: #ffffff;
  padding: 114px 0px 0 342px;
  font-weight: 400px;
  font-family: "Russo One", sans-serif;
`;

const ClockBox = styled.div`
  font-size: 48px;
  font-weight: 900;
  line-height: 58px;
  color: #ffffff;
  padding-left: 200px;
  font-family: "Russo One", sans-serif;
  letter-spacing: 0.5px;
  margin-right: 28px;
`;

const TodoContainer = styled.div`
  width: 430px;
  height: 436px;
  background-color: #ffffff;
  overflow-y: auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export default App;
