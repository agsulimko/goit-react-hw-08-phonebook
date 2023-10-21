import css from "./Layout.module.css";
import styled from "styled-components";
// import React, { useEffect } from "react";
import { Suspense } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { selectProfile, selectUsers } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "api/user";
import { loginOut } from "redux/users/slice";

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

const Layout = () => {
  const navigate = useNavigate();
  const isUsers = useSelector(selectUsers);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loginThunk);
  // }, [dispatch]);

  const handleClick = () => {
    if (isUsers) {
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
            <StyledLink to="/">HOME</StyledLink>
          </li>
          <li>
            {/* <StyledLink to="/register">Registration</StyledLink> */}
            {!isUsers && <StyledLink to="/register">Registration</StyledLink>}
          </li>

          <li>
            {isUsers && (
              <p>
                Welkome - {profile.name}!, {profile.email}
              </p>
            )}
          </li>

          <li>
            <StyledLink to="/login" onClick={handleClick}>
              {isUsers ? "Login Out" : "Login"} {/* Login */}
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

//  <StyledLink to="/login">
//               {/* Login */}
//               <button onClick={handleClick}>
//                 {isUsers ? "Login Out" : "Login"}
//               </button>
//             </StyledLink>
