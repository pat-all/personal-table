import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import useAuth from "./hoocks/useAuth";
import AuthContext from "./context/Auth.context";

import SingIn from "./pages/Auth.page";
import SingUp from "./pages/Register.page";
import SimpleTable from "./pages/Table.page";
import LogOut from "./pages/LogOut.page";
import NewNote from "./pages/NewNote.page";
import DocPage from "./pages/Doc.page";

import PrivateRoute from "./components/PrivateRoute.component";

import ButtonAppBar from "./components/NavBar.component";

function App() {
  const { token, user, login, logout, addNoteId, getNoteIds } = useAuth();
  const isAuth = !!token;
  return (
    <div className='App'>
      <AuthContext.Provider
        value={{ token, user, login, logout, isAuth, addNoteId, getNoteIds }}
      >
        <Router>
          <ButtonAppBar />
          <Switch>
            <Route exact path='/'>
              <DocPage />
            </Route>
            <Route path='/table'>
              <SimpleTable />
            </Route>
            <Route path='/login'>{isAuth ? <LogOut /> : <SingIn />}</Route>
            <Route path='/register'>{isAuth ? <LogOut /> : <SingUp />}</Route>

            <PrivateRoute path='/new'>
              <NewNote />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
