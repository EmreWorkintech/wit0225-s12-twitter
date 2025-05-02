import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import { useContext } from "react";
import { userContext } from "./contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { theme } = useContext(userContext);

  return (
    <div className={theme}>
      <div className="dark:bg-slate-800 dark:text-white bg-white text-slate-900">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/feed">
            <Feed />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
