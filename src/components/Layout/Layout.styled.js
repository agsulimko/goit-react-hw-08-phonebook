import styled from 'styled-components';

const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 5px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding-top: 16px;
    font-family: 'Manrope', sans-serif;

    width: 100%;
    padding: 5px 5px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;

    width: 100%;
  }
`;

const DivNav = styled.div`
  width: 350px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    /* width: 350px; */
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* align-items: flex-end; */
    /* padding-top: 5px; */
  }

  @media screen and (min-width: 1440px) {
    padding-right: 5px;
  }
`;

const DivLogoHome = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* gap: 20px;
  margin-right: auto;  */
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
  margin: 0 auto;
  padding-left: 0;
  text-align: center;
  padding-bottom: 5px;

  max-width: 400px;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 5px;
    justify-content: space-around;
    align-items: center;
    /* margin-bottom: 16px; */

    padding-bottom: 0px;
    padding-top: 0px;
    margin-bottom: 0;
    margin-top: 0;
    margin: 0 0;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-around;
  }
`;
const Start = styled.div`
  color: white;
  background-color: rgb(103, 103, 238);

  padding: 10px 10px;
  border-radius: 4px;
  text-decoration: none;
  /* color: black; */
  font-weight: 500;
  color: white;

  width: 100px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
`;
const B = styled.b`
  font-weight: 500px;
  font-size: 18px;
  font-weight: 500px;
  font-size: 18px;
  text-align: 'center';
  margin: 0 auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    // margin-left: 320px;
  }
`;
const P = styled.p`
  margin: 0 auto;
  text-align: 'center';

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const DivLogout = styled.div`
  align-items: center;
  display: flex;
  right: 20px;
  top: 16px;
  @media screen and (min-width: 768px) {
    right: 25px;
    top: 8px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export { Header, Start, Main, Ul, Svg, DivNav, DivLogoHome, B, P, DivLogout };
