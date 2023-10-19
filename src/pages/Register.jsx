import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormRegister from "components/FormRegister/FormRegister";
import { signUp } from "api/user";
// import css from "./Register.module.css";
const Register = () => {
  const register = async (body) => {
    try {
      const data = await signUp(body);
      console.log("data=", data);
    } catch (error) {
      console.log("error=", error);
    }
  };
  return <FormRegister register={register} />;
};

export default Register;

// const handleSubmit = (event) => {
//   event.preventDefault();
//   const { name, email, password } = event.target.elements;
//   // console.log("name, email, password", {
//   //   name: name.value,
//   //   email: email.value,
//   //   password: password.value,
//   // });
//   register({
//     name: name.value,
//     email: email.value,
//     password: password.value,
//   });
// };
