import * as React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import List from "./components/List";
import Login from "./components/Login";
import Detail from "./components/Detail";

function App() {
  const [login, setLogin] = React.useState(localStorage.getItem("login"));
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return login ? <Redirect to='/list' /> : <Redirect to='/login' />;
            }}
          />
          <Route
            path='/list'
            render={() =>
              login ? <List  /> : <Redirect to='/login' />
            }
          />
          <Route
            path='/detail'
            render={(props) =>
              login ? <Detail {...props} /> : <Redirect to='/login' />
            }
          />
          <Route path='/login'>
            <Login
              doAuth={(form, redirect) => {
                if (
                  form.username === "starberry" &&
                  form.password === "strawberry"
                ) {
                  localStorage.setItem("login", true);
                  setLogin(true);
                  redirect("/list");
                  return;
                }
                localStorage.setItem("login", false);
                alert("Wrong Username or Password ");
                setLogin(false);
              }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
