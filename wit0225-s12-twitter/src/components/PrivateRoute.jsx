import { useContext } from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { userContext } from "../contexts/UserContext";

/*
export default function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(userContext);
  return (
    <Route {...rest}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>
  );
}
*/

export default function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(userContext);
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? children : <Redirect to="/login" />;
      }}
    />
  );
}
