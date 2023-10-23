import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import css from "./FormRegister.module.css";
// import { signUp } from "api/user";
const FormRegister = ({ register }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    // console.log("name, email, password", {
    //   name: name.value,
    //   email: email.value,
    //   password: password.value,
    // });
    register({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <main className={css.registrMain}>
        <h1>Registration</h1>
        <Link to="/">Back to home</Link>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="exampleInputName">Name</label> */}
            <TextField
              type="text"
              name="name"
              id="exampleInputName"
              label="Name"
              variant="outlined"
              helperText="Some important text"
              sx={{ m: 1, width: "350px" }}
            />
            {/* <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>

          <div>
            {/* <label htmlFor="exampleInputEmail">Email address</label> */}
            <TextField
              type="email"
              name="email"
              id="exampleInputEmail"
              label="Email"
              variant="outlined"
              helperText="Some important text"
              autoComplete="username"
              sx={{ m: 1, width: "350px" }}
            />
          </div>

          <div>
            {/* <label htmlFor="exampleInputPassword">Password</label> */}
            <TextField
              type="password"
              name="password"
              id="exampleInputPassword"
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
            Registration
          </Button>
        </form>
        <Link to="/login">Login</Link>
      </main>
    </div>
  );
};
export default FormRegister;
