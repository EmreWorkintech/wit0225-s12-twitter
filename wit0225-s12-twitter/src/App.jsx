import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [loggedUser, setLoggedUser] = useLocalStorage("user", null);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login setLoggedUser={setLoggedUser} />
        </Route>
        <Route path="/feed">
          <Feed loggedUser={loggedUser} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
