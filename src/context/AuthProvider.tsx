import { createContext, useState } from "react";
import { getLocalStorageItem } from "utils/localStorage";

export interface AuthType {
  token: string;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AuthContext = createContext({
  auth: { token: "" },
  setAuth: (newVal: AuthType) => {},
});

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [auth, setAuth] = useState({
    token: getLocalStorageItem("auth"),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
