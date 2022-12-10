import styled from "styled-components";
import bgImage from "./assets/rect.png";
import Moment from "react-moment";
import "moment-timezone";
import { TodoContainer } from "./components/TodoContainer";
import { useEffect, useState } from "react";
import light from "./assets/light.png";
import darkIcon from "./assets/dark.png";
import { ITask } from "./Interfaces";
export type Props = {
  dark?: boolean;
};
function App() {
  const [dateHours, setDateHours] = useState(new Date());
  const [dark, setDark] = useState<boolean>(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setDateHours(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const d = new Date();
  let day = weekday[d.getDay()];
  const date = new Date();

  const formatAMPM = (date: undefined | any) => {
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
    <BgColor dark={dark}>
      <MainContainer>
        <Title>Todo</Title>
        <Card>
          <MainImage>
            {dark ? (
              <IconTheme onClick={() => setDark(!dark)} src={light} />
            ) : (
              <IconTheme onClick={() => setDark(!dark)} src={darkIcon} />
            )}
            <DateBox dark={dark}>{day + " " + date.getDate()}</DateBox>
            <ClockBox dark={dark}>{formatAMPM(new Date())}</ClockBox>
          </MainImage>
          <TodoContainer dark={dark} />
        </Card>
      </MainContainer>
    </BgColor>
  );
}
const BgColor = styled.div<Props>`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.dark ? "#000000d4" : "rgba(188, 179, 179, 0.799)"};
`;
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
const IconTheme = styled.img`
  position: absolute;
  top: 10px;
  left: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
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
  position: relative;
  z-index: 0;
`;
const DateBox = styled.div<Props>`
  font-size: 18px;
  color: ${(props) => (props.dark ? "#007fdb;" : "#ffffff")};
  padding: 110px 0px 0 360px;
  font-weight: 400px;
  font-family: "Russo One", sans-serif;
`;

const ClockBox = styled.div<Props>`
  font-size: 48px;
  font-weight: 900;
  line-height: 58px;
  color: ${(props) => (props.dark ? "#007fdb;" : "#ffffff")};
  padding-left: 203px;
  font-family: "Russo One", sans-serif;
`;

export default App;
