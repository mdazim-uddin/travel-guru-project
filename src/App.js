
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuArea from './Components/MenuArea/MenuArea';
import Banner from './Components/Banner/Banner';
import TravelDetails from './Components/TravelDetails/TravelDetails';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import Sign from './Components/Sign/Sign';


export const UserContext = createContext()
function App() {
const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      {/* <p>name: {loggedInUser.name}</p> */}
    <Router>
    <MenuArea></MenuArea>
      <Switch>
        <Route exact path="/">
       <Banner></Banner>
        </Route>
        <Route path="/banner">
        <Banner></Banner>
        </Route>
        <Route path="/travelDetails/:travelId">
       <TravelDetails></TravelDetails>
        </Route>
        <PrivateRoute path="/shop">
          <Shop></Shop>
        </PrivateRoute>
        <Route path="/sign">
          <Sign></Sign>
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider> 
  );
}

export default App;
