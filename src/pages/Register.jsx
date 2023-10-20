import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormRegister from "components/FormRegister/FormRegister";
import { signUp } from "api/user";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationThunk } from "redux/users/thunks";

import { useEffect } from "react";
import { selectUsers } from "redux/selectors";
// import css from "./Register.module.css";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUser = useSelector(selectUsers);
  const register = async (body) => {
    try {
      const data = await signUp(body);
      navigate("/");
      console.log("data=", data);
    } catch (error) {
      console.log("error=", error);
    }
    dispatch(registrationThunk(body));
  };

  useEffect(() => {
    isUser && navigate("/");
  }, [isUser, navigate]);

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
