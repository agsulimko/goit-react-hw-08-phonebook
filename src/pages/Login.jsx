// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import { useNavigate } from "react-router-dom";
// import css from "./Login.module.css";
import { useDispatch } from "react-redux";
// import { selectUsers } from "redux/selectors";
import { loginThunk } from "redux/auth/thunks";
// import { useEffect } from "react";
import FormLogin from "../components/FormLogin/FormLogin";
import toast from "react-hot-toast";
const Login = () => {
  const dispatch = useDispatch();
  const login = async (body) => {
    try {
      await dispatch(loginThunk(body)).unwrap();
      toast.success("Welcome", { duration: 3000, position: "top-right" });
    } catch (error) {
      toast.error(" Incorrect password", {
        duration: 3000,
        position: "top-right",
      });
    }
  };
  // const dispatch = useDispatch();
  // const isUser = useSelector(selectUsers);
  // const navigate = useNavigate();

  // const login = (body) => {
  //   dispatch(loginThunk(body))
  //     .unwrap()
  //     .then(() =>
  //       toast.success("Welcome", { duration: 3000, position: "top-right" })
  //     )
  //     .catch((error) =>
  //       toast.error(error.error, { duration: 3000, position: "top-right" })
  //     );
  // };

  return <FormLogin login={login} />;
};
export default Login;
