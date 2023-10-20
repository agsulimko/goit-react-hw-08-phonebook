import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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
      <main>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="exampleInputName">Name</label>
            <TextField
              type="name"
              name="name"
              id="exampleInputName"
              label="Outlined"
              variant="outlined"
              helperText="Some important text"
            />
            {/* <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>

          <div>
            <label htmlFor="exampleInputEmail">Email address</label>
            <TextField
              type="email"
              name="email"
              id="exampleInputEmail"
              label="Outlined"
              variant="outlined"
              helperText="Some important text"
              autoComplete="username"
            />
          </div>

          <div>
            <label htmlFor="exampleInputPassword">Password</label>
            <TextField
              type="password"
              name="password"
              id="exampleInputPassword"
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
            Registration
          </Button>
        </form>
      </main>
    </div>
  );
};
export default FormRegister;
