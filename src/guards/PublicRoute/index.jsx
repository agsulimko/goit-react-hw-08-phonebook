import { useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";
import { selectUsers } from "redux/selectors";

const PublicRoute = ({ children }) => {
  const isUsers = useSelector(selectUsers);
  const location = useLocation();
  // console.log('location :>> ', location)
  return !isUsers ? children : <Navigate to={location.state ?? "/"} />;
};

export default PublicRoute;
