import { createContext } from "react";

const AuthContext = createContext({
  token: null,
  user: null,
  login: () => {},
  logout: () => {},
  addNoteId: () => {},
  getNoteIds: () => {},
  isAuth: false,
});

export default AuthContext;
