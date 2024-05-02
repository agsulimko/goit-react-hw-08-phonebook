import css from "./Layout.module.css";
import styled from "styled-components";
// import React, { useEffect } from "react";
import { useEffect } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { selectAuth, selectUser } from "../../redux/auth/auchSelectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "api/auth";

import { logoutThunk, refreshThunk } from "redux/auth/auchOperations";
// import { loginOut } from "redux/auth/auchSlice";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import "@fontsource/roboto/500.css";
// import Loader from "components/Loader/Loader";
import sprite from "../../image/sprite.svg";
import { Container as BaseContainer } from "../../styles/Container/Container";
import {
  Header as BaseHeader,
  Start,
  Main as BaseMain,
  Ul as BaseUl,
  Svg as BaseSvg,
  DivNav as BaseDivNav,
  B as BaseB,
  P as BaseP,
  DivLogoHome as BaseDivLogoHome,
  DivLogout as BaseDivLogout,
  // Button as BaseButton,
} from "../Layout/Layout.styled";
const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(103, 103, 238);
  }
  &.active-home {
    padding: 0;
  }
`;
const StyledLinkReg = styled(NavLink)`
  position: absolute;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  top: 16px;
  /* right: 20px; */
  right: 85px;
  @media screen and (min-width: 768px) {
    top: 8px;
  }

  &.active {
    color: white;
    background-color: rgb(103, 103, 238);
    /* padding-top: 0;
    padding-bottom: 0; */
  }
  &.active-home {
    padding: 0;
    right: 180px;
    top: 20px;
  }
`;

const StyledLinkLogin = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    /* padding: 8px 16px; */
    border-radius: 4px;
    background-color: rgb(103, 103, 238);
  }
  &.active-home {
    padding: 0;
  }
`;

const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
});

const Container = styled(BaseContainer)`
  max-width: 1440px;
  &.active-home {
    position: relative;
    min-width: 500px;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    /* border-radius: 15px; */

    /* border: 2px solid gray; */
    /* background-color: dimgray; */
    width: 100%;
    height: 90vh;
    border-radius: 20px;
    background-color: dimgray;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("https://ik.imagekit.io/sulimko/Phonebook/Phone.png?updatedAt=1711186415196");
    /* background-image: linear-gradien
        rgba(46, 47, 66, 0.7)t(
        rgba(46, 47, 66, 0.1),
      ),
      url("https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg"); */
  }
`;

const Main = styled(BaseMain)`
  &.active-home {
    /* position: relative; */
    background-color: rgba(129, 130, 133, 0.7);
    height: 90vh;
    max-width: 400px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const Ul = styled(BaseUl)`
  &.active-home {
    /* position: absolute; */
    /* position: relative; */
    left: 260px;
    top: 45px;
    border-bottom: none;
    padding-right: 0;

    /* background-color: rgba(129, 130, 133, 0.4);
    height: 100vh;
    width: 300px; */
  }
`;

const Header = styled(BaseHeader)`
  /* position: relative; */
  &.active-catalog {
    /* border-bottom: 3px solid gray;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #bfd1f7;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url("https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg");

    margin-bottom: 10px; */
  }
  &.active-home {
    padding-bottom: 0;
    /* width: 380px; */
    width: 470px;
    position: absolute;
    padding-left: 0;
    padding-right: 0;
    margin-left: 18px;
    padding-top: 12px;
    /* margin-left: 30px; */
    /* margin-right: 14px; */
    /* background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("https://ik.imagekit.io/sulimko/Phonebook/Phone.png?updatedAt=1711186415196"); */
    /* position: absolute;
    left: 180px; */

    /* background-color: rgba(129, 130, 133, 0.4);
    height: 100vh;
    width: 300px; */
    z-index: 1;
    @media screen and (min-width: 768px) {
      padding-top: 8px;
    }
  }
`;
const DivNav = styled(BaseDivNav)`
  &.active-home {
    position: absolute;

    position: relative;
    width: 580px;
    /* @media screen and (min-width: 1440px) {
    } */
  }
`;

const DivLogoHome = styled(BaseDivLogoHome)`
  &.active-home {
    margin-right: auto;
    position: relative;
  }
`;

const Svg = styled(BaseSvg)`
  &.active-home {
    /* position: absolute; */
    /* position: relative; */
    left: 30px;
    top: 60px;
    border-bottom: none;
    z-index: 1;

    /* background-color: rgba(129, 130, 133, 0.4);
    height: 100vh;
    width: 300px; */
  }
`;
const B = styled(BaseB)`
  &.active-home {
    position: absolute;
    left: 115px;
    top: 90px;
    align-items: center;
    margin: 0;
  }
  /* margin-right: 40px; */
`;
const P = styled(BaseP)`
  &.active-home {
    position: absolute;
    left: 100px;
    top: 60px;
    align-items: center;
    margin: 0;
  }

  /* margin-right: 40px; */
`;

const DivLogout = styled(BaseDivLogout)`
  /* top: 12px;
  
  left: 405px; */
  &.active-home {
    position: absolute;
    display: flex;

    align-items: center;
    margin: 0;
    top: 12px;
    right: 102px;
    @media screen and (min-width: 1440px) {
    }
  }
`;

const Layout = () => {
  const location = useLocation();
  const isActiveHome = location.pathname === "/";
  // const isActiveContacts = location.pathname === "/catalog";
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuth);
  console.log(isAuth);
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const handleClick = () => {
    if (isAuth) {
      dispatch(logoutThunk());

      deleteToken();
    } else navigate("/login");
  };
  // isActiveContacts
  return (
    <>
      <Container className={isActiveHome ? "active-home" : ""}>
        <Header className={isActiveHome ? "active-home" : ""}>
          <DivNav>
            <DivLogoHome className={isActiveHome ? "active-home" : ""}>
              <Link to="/">
                <Svg
                  className={isActiveHome ? "active-home" : ""}
                  width={24}
                  height={24}
                >
                  <use href={`${sprite}#icon-phone-book`}></use>
                </Svg>
              </Link>

              {!isActiveHome && <StyledLink to="/">Home</StyledLink>}

              {isAuth && <StyledLink to="/contacts">Contacts</StyledLink>}
            </DivLogoHome>
            <Ul className={isActiveHome ? "active-home" : ""}>
              <li className={css.itemRegister}>
                {/* <StyledLinkReg
                  to="/register"
                  className={isActiveHome ? "active-home" : ""}
                >
                  Registration
                </StyledLinkReg> */}
                {!isAuth && (
                  <StyledLinkReg
                    to="/register"
                    className={isActiveHome ? "active-home" : ""}
                  >
                    Registration
                  </StyledLinkReg>
                )}
              </li>

              <li
                // className={css.itemWelKome}
                className={isActiveHome ? "active-home" : css.itemWelKome}
              >
                {isAuth && user && (
                  <B className={isActiveHome ? "active-home" : css.spanWelcome}>
                    Welcome - {user.name}!
                  </B>
                )}
                {isAuth && user && (
                  <P className={isActiveHome ? "active-home" : css.textLayout}>
                    {user.email}
                  </P>
                )}
              </li>

              <li>
                <DivLogout
                  className={isActiveHome ? "active-home" : css.divLogout}
                >
                  {isAuth && <div className={css.circle}> </div>}

                  {!isAuth ? (
                    <StyledLinkLogin
                      to="/login"
                      onClick={handleClick}
                      className={css.logout}
                      style={{
                        // padding: 0,
                        margin: 0,
                      }}
                    >
                      {isAuth ? "Login Out" : "Login"}
                    </StyledLinkLogin>
                  ) : (
                    <ThemeProvider theme={theme}>
                      <Button
                        className={
                          isActiveHome ? "active-home" : css.logoutButton
                        }
                        to="/login"
                        onClick={handleClick}
                        // className={css.logoutButton}
                        variant="contained"
                        sx={{
                          m: 1,
                          margin: 0,
                          width: "80px",
                          backgroundColor: "rgb(211, 223, 226)",
                          color: "black",
                          paddingTop: 1.25,
                          paddingBottom: 1.25,
                          paddingLeft: 0.5,
                          paddingRight: 0.5,
                          textTransform: "capitalize",
                          lineHeight: 1,
                        }}
                      >
                        {isAuth ? "Login Out" : "Login"}
                      </Button>
                    </ThemeProvider>
                  )}
                </DivLogout>
              </li>
            </Ul>
          </DivNav>
        </Header>

        <Main className={isActiveHome ? "active-home" : ""}>
          <Outlet />
          {isActiveHome && (
            <Start>
              <StyledLink
                to="/contacts"
                style={{
                  color: "white",
                }}
              >
                Go!
              </StyledLink>
            </Start>
          )}
          {/* </Suspense> */}
        </Main>
      </Container>
    </>
  );
};
export default Layout;
