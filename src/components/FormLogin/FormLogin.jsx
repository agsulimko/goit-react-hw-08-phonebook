import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
      <main>
        <h1>LOGIN</h1>
        <Link to="/">Back to home</Link>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email address</label>
            <TextField
              type="email"
              name="email"
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
              name="password"
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
      <Link to="/register">Registration</Link>
    </div>
  );
};

export default FormLogin;
