import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
  return (
    <div>
      <main>
        <h1>LOGIN</h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <TextField
              type="email"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              helperText="Some important text"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <TextField
              type="password"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              helperText="Some important text"
            />
          </div>

          <div class="mb-3 form-check">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <Button variant="contained">Contained</Button>
        </form>
      </main>
    </div>
  );
};
export default Login;
