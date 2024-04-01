import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, purple } from "@mui/material/colors";
import css from "./FormLogin.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
  },
});

const StyledLink = styled(Link)`
  display: block;
  border-radius: 4px;
  text-decoration: none;
  /* color: black; */
  font-weight: 500;
`;

const FormLogin = ({ login }) => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    // сохранение данных пользователя
    const userData = {
      email: email.value,
      password: password.value,
    };

    // если отмечен чекбокс "Remember me", сохраняем данные пользователя в localStorage
    if (rememberMe) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
    // регистрация пользователя
    login(userData);
  };
  return (
    <div className={css.divLogin}>
      <main className={css.loginMain}>
        <h1 className={css.H1_Title}>SignIn</h1>
        <StyledLink to="/" className={css.linkNav}>
          Back to home
        </StyledLink>

        <form onSubmit={handleSubmit} className={css.form}>
          <TextField
            className={css.email}
            type="email"
            name="email"
            id="outlined-basic-email"
            label="Email"
            variant="outlined"
            // helperText="Some important text"
            autoComplete="username"
            sx={{
              m: 1,
              width: "310px",
              margin: "8px  1px",
              "@media screen and (min-width: 768px)": {
                width: "350px", // задаем другие паддинги для ширины больше 768px
              },

              "@media screen and (min-width: 1440px)": {
                width: "350px",
              },
            }}
          />

          {/* <label>Password</label> */}
          <TextField
            className={css.password}
            type="password"
            name="password"
            id="outlined-basic-password"
            label="Password"
            variant="outlined"
            // helperText="Some important text"
            autoComplete="current-password"
            sx={{
              m: 1,
              width: "310px",
              margin: "8px  1px",
              "@media screen and (min-width: 768px)": {
                width: "350px", // задаем другие паддинги для ширины больше 768px
              },

              "@media screen and (min-width: 1440px)": {
                width: "350px",
              },
            }}
          />

          <div>
            <FormControlLabel
              className={css.remember}
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
              }
              // control={<Checkbox />}
              label="Remember me"
            />
          </div>

          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 1,

                margin: "0",
                padding: "8px 0",
                backgroundColor: "rgb(103, 103, 238)",
                width: "310px",

                "@media screen and (min-width: 768px)": {
                  width: "350px", // задаем другие паддинги для ширины больше 768px
                },

                "@media screen and (min-width: 1440px)": {
                  width: "350px",
                },
              }}
            >
              LOGIN
            </Button>
          </ThemeProvider>
        </form>
        <Link to="/register" className={css.linkNav}>
          Forgot password? Don't have an account? Sign Up
        </Link>
      </main>
    </div>
  );
};

export default FormLogin;
