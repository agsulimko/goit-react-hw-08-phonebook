import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import css from "./FormLogin.module.css";
const FormLogin = ({ login }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login({
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <main className={css.loginMain}>
        <h1>LOGIN</h1>
        <Link to="/">Back to home</Link>

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>Email address</label> */}
            <TextField
              type="email"
              name="email"
              id="outlined-basic-email"
              label=""
              variant="outlined"
              helperText="Some important text"
              autoComplete="username"
              sx={{ m: 1, width: "350px" }}
            />
          </div>

          <div>
            {/* <label>Password</label> */}
            <TextField
              type="password"
              name="password"
              id="outlined-basic-password"
              label="Password"
              variant="outlined"
              helperText="Some important text"
              autoComplete="current-password"
              sx={{ m: 1, width: "350px" }}
            />
          </div>

          <div>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <label>Check me out</label>
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{ m: 1, width: "350px" }}
          >
            LOGIN
          </Button>
        </form>
        <Link to="/register">Registration</Link>
      </main>
    </div>
  );
};

export default FormLogin;
