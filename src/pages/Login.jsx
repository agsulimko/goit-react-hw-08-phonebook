import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import css from "./Login.module.css";
const Login = () => {
  return (
    <div>
      <main>
        <h1>LOGIN</h1>
        <form>
          <div>
            <label>Email address</label>
            <TextField
              type="email"
              id="outlined-basic-email"
              label="Outlined"
              variant="outlined"
              helperText="Some important text"
              autoComplete="username"
            />
          </div>

          <div>
            <label>Password</label>
            <TextField
              type="password"
              id="outlined-basic-password"
              label="Outlined"
              variant="outlined"
              helperText="Some important text"
              autoComplete="current-password"
            />
          </div>

          <div>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <label>Check me out</label>
          </div>
          <Button type="submit" variant="contained">
            LOGIN
          </Button>
        </form>
      </main>
      <Link to="/register">REGISTRATION</Link>
    </div>
  );
};
export default Login;
