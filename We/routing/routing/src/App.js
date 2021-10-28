import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <br />
       
      <Switch>
       <Route exact path="/">Home Page</Route>

        <Route exact path="/users"> <Users /> </Route>
        
      <Route path="/users/:id"> <UserDetails/> </Route>

      <Route path="/about">About Page</Route>

      <Route path="/contact">Contact Page</Route>
      
      <Route>404 page not found</Route>
      </Switch>
      
    </div>
  );
}

export default App;
