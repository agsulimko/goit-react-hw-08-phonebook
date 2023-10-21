import FormRegister from "components/FormRegister/FormRegister";
// import { useEffect } from "react";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { selectUsers } from "redux/selectors";
import { registrationThunk } from "redux/users/thunks";

// import css from "./Register.module.css";
const Register = () => {
  const dispatch = useDispatch();
  const register = async (body) => {
    try {
      await dispatch(registrationThunk(body)).unwrap();
      toast.success("Welcome", { duration: 3000, position: "top-right" });
    } catch (error) {
      toast.error(" Incorrect password", {
        duration: 3000,
        position: "top-right",
      });
    }
  };
  // const dispatch = useDispatch();
  // // const navigate = useNavigate();
  // // const isUser = useSelector(selectUsers);

  // const register = (body) => {
  //   // try {
  //   //   const data = await signUp(body);
  //   //   navigate("/");
  //   //   console.log("data=", data);
  //   // } catch (error) {
  //   //   console.log("error=", error);
  //   // }
  //   dispatch(registrationThunk(body))
  //     .unwrap()
  //     .then(() =>
  //       toast.success("Welcome", { duration: 3000, position: "top-right" })
  //     )
  //     .catch((error) =>
  //       toast.error(error.error, { duration: 3000, position: "top-right" })
  //     );

  // useEffect(() => {
  //   isUser && navigate("/");
  // }, [isUser, navigate]);

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
