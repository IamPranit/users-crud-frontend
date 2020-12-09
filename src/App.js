import "./App.css";
import NavBar from "./Components/NavBar";
import SignUpForm from "./Components/SignUpForm";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateForm from "./Components/UpdateForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/signup">
            <SignUpForm />
          </Route>
          <Route exact path="/userUpdate/:id">
            <UpdateForm />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:id">
            <UserDetails />
          </Route>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
