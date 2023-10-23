import css from "./Layout.module.css";
import styled from "styled-components";
// import React, { useEffect } from "react";
import { Suspense, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { selectAuth, selectUser } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "api/auth";

import { refreshThunk } from "redux/auth/thunks";
import { loginOut } from "redux/auth/slice";

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
`;

const Layout = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const handleClick = () => {
    if (isAuth) {
      dispatch(loginOut());
      deleteToken();
    } else navigate("/login");
  };

  return (
    <>
      <header>
        {/* <h1 className={css.h1}>Phonebook</h1> */}
        <ul className={css.listLayout}>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>{isAuth && <StyledLink to="/contacts">Contacts</StyledLink>}</li>

          <li>
            {/* <StyledLink to="/register">Registration</StyledLink> */}
            {!isAuth && <StyledLink to="/register">Registration</StyledLink>}
          </li>

          <li>
            {isAuth && (
              <p className={css.textLayout}>
                <span className={css.spanWelcome}>Welkome - {user.name}! </span>{" "}
                {user.email}
              </p>
            )}
          </li>

          <li>
            <StyledLink to="/login" onClick={handleClick}>
              {isAuth ? "Login Out" : "Login"}
            </StyledLink>
          </li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div>Laoding...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
