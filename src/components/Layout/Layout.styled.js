import styled from 'styled-components';

const Header = styled.header`
  margin: 0 auto;

  font-family: 'Manrope', sans-serif;

  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 0px 5px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;

    /* padding: 0px 30px; */
    width: 100%;
  }
`;

const DivNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DivLogoHome = styled.div`
  /* display: flex;
  align-items: center;
  gap: 20px;
  margin-right: auto; */
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 5px;
    /* margin-right: auto; */
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;
    margin-right: auto;
  }
`;

const Main = styled.main`
  position: relative;
`;
const Svg = styled.svg`
  /* margin-right: 40px; */
`;

const Ul = styled.ul`
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-bottom: 16px; */
  /* padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  padding-right: 60px;
  margin-left: auto;  */

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* margin-bottom: 16px; */
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    padding-right: 5px;
    /* margin-left: auto; */
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* margin-bottom: 16px; */
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    /* padding-right: 5px; */
    /* margin-left: auto; */
  }
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
const B = styled.b`
  font-weight: 500px;
  font-size: 18px;
  font-weight: 500px;
  font-size: 18px;
  text-align: 'center';
  /* margin-left: 380px; */
  /* margin-right: 40px; */
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-left: 320px;
  }
`;
const P = styled.p`
  /* margin-right: 40px; */

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export { Header, Start, Main, Ul, Svg, DivNav, DivLogoHome, B, P };
