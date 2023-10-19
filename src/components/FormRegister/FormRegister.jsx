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
// const FormRegistration = ({ registration }) => {
// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		const { name, email, password } = e.target.elements
// 		registration({
// 			firstName: name.value,
// 			email: email.value,
// 			password: password.value,
// 		})
// 	}
// 	return (
// 		<div className='card p-5 mx-auto' style={{ width: 500 }}>
// 			<form onSubmit={handleSubmit}>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputName' className='form-label'>
// 						Name
// 					</label>
// 					<input
// 						type='text'
// 						name='name'
// 						className='form-control'
// 						id='exampleInputName'
// 					/>
// 				</div>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputEmail1' className='form-label'>
// 						Email address
// 					</label>
// 					<input
// 						type='email'
// 						name='email'
// 						className='form-control'
// 						id='exampleInputEmail1'
// 						aria-describedby='emailHelp'
// 					/>
// 					<div id='emailHelp' className='form-text'>
// 						We'll never share your email with anyone else.
// 					</div>
// 				</div>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputPassword1' className='form-label'>
// 						Password
// 					</label>
// 					<input
// 						name='password'
// 						type='password'
// 						className='form-control'
// 						id='exampleInputPassword1'
// 					/>
// 				</div>
// 				<button type='submit' className='btn btn-primary'>
// 					Registration
// 				</button>
// 			</form>
// 		</div>
// 	)
// }

// export default FormRegistration
