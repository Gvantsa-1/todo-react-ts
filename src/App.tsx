import styled from "styled-components";
import bgImage from "./assets/rect.png";
import Moment from "react-moment";
import "moment-timezone";
import { TodoContainer } from "./components/TodoContainer";
function App() {
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const d = new Date();
  let day = weekday[d.getDay()];
  const date = new Date();

  const formatAMPM = (date: any) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const strTime = `${hours}:${minutes} ${ampm}`;

    return strTime;
  };

  return (
    <MainContainer>
      <Title>Todo</Title>
      <Card>
        <MainImage>
          <DateBox>{day + " " + date.getDate()}</DateBox>
          <ClockBox>{formatAMPM(new Date())}</ClockBox>
        </MainImage>
        <TodoContainer />
      </Card>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1050px) {
    display: block;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  @media screen and (max-width: 1050px) {
    margin: 0 auto;
  }
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 96px;
  color: #007fdb;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 296px;
  @media screen and (max-width: 1050px) {
    margin: 0 auto;
  }
`;
const MainImage = styled.div`
  background-image: url(${bgImage});
  width: 430px;
  height: 202px;
  background-position: bottom;
  background-size: cover;
  margin-top: 20px;
  font-family: "Russo One", sans-serif;
  opacity: 0.9;
`;
const DateBox = styled.div`
  font-size: 18px;
  color: #ffffff;
  padding: 110px 0px 0 360px;
  font-weight: 400px;
  font-family: "Russo One", sans-serif;
`;

const ClockBox = styled.div`
  font-size: 48px;
  font-weight: 900;
  line-height: 58px;
  color: #ffffff;
  padding-left: 223px;
  font-family: "Russo One", sans-serif;
`;

export default App;
