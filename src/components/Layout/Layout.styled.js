import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
// import { theme } from 'styles';

// const StyledLink = styled(NavLink)`
//   background-color: ${theme.color.white_full};
// `;

const Header = styled.header`
  /* position: relative; */
  margin: 0 auto;

  /* padding-left: 0; */
  font-family: 'Manrope', sans-serif;
  /* border-bottom: 2 solid #2a363b; */
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px 0px; */
  /* display: flex; */
  /* align-items: center;

  justify-content: center;
  gap: 40px; */
  padding: 0px 30px;
  width: 100%;
  /* z-index: 10; */
  /* border-bottom: 1 solid #2a363b;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5cqmin 0px; */
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 0px -1px,
    rgba(0, 0, 0, 0.14) 0px 2px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 0px 0px; */
`;
// const UlListLayout = styled.ul`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   padding-left: 0;
//   margin-bottom: 0;
//   margin-top: 0;
//   gap: 40px;
// `;

const DivNav = styled.div`
  display: flex;
  align-items: center;
`;

const DivLogoHome = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: auto;
`;

const Main = styled.main`
  position: relative;
`;
const Svg = styled.svg`
  /* margin-right: 40px; */
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-bottom: 16px; */
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  padding-right: 60px;
  /* margin-left: auto; */
`;
const Start = styled.div`
  position: absolute;

  /* top: 40%; */
  left: 220px;
  top: 540px;

  color: white;
  background-color: rgb(103, 103, 238);
  /* padding-top: 8px;
  padding-bottom: 8px; */
  padding: 20px 10px;
  border-radius: 4px;
  text-decoration: none;
  /* color: black; */
  font-weight: 500;
  color: white;
  /* &.active {
    color: white;
    background-color: rgb(103, 103, 238);
  } */
`;

export { Header, Start, Main, Ul, Svg, DivNav, DivLogoHome };
