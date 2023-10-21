import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
// import Register from "../pages/Register";
// import Login from "../pages/Login";
// import Contacts from "../pages/Contacts";
import Layout from "./Layout/Layout";
// import NotFound from "../pages/NotFound";
// import styled from "styled-components";
import { Suspense, lazy } from "react";
// import { useState } from "react";
// import css from "./App.module.css";
// import { nanoid } from "nanoid";
// import ContactForm from "components/ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import Filter from "components/Filter/Filter";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
// import { selectContacts } from "redux/selectors";
import { useEffect } from "react";
import PrivateRoute from "guards/PrivateRoute";
import PublicRoute from "guards/PublicRoute";
import { Toaster } from "react-hot-toast";

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;
// contacts;
const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Contacts = lazy(() => import("../pages/Contacts"));
const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  const dispatch = useDispatch();
  // const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
    // dispatch(refreshUser());
    // !!!!eslit-disable-next-line react-hooks/exha
  }, [dispatch]);
  return (
    <Container>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <Toaster />
        <Suspense fallback={"Loading....."}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              /> */}
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Box>
    </Container>
  );
};

export default App;

/* <div className="container"> */

/* <h1 className={css.h1}>Phonebook</h1> */

/* <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/register">Registration</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </nav> */

/* <ContactForm />
        <h2 className={css.h2}>Contacts</h2>
        <Filter />
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        <ContactList /> */
