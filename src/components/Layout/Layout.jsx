import css from "./Layout.module.css";
import styled from "styled-components";
import React from "react";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: red;
//   }
// `;

const Layout = () => {
  return (
    <>
      <header>
        {/* <h1 className={css.h1}>Phonebook</h1> */}
        <ul className={css.listLayout}>
          <li>
            <StyledLink to="/">HOME</StyledLink>
          </li>
          <li>
            <StyledLink to="/register">Registration</StyledLink>
          </li>

          <li>
            <StyledLink to="/login">Login</StyledLink>
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
