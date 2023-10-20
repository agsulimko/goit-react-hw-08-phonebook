import { useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";
import { selectUsers } from "redux/selectors";

const PrivateRoute = ({ children }) => {
  const isUser = useSelector(selectUsers);
  const location = useLocation();

  return isUser ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
