import GlobalStyles from "./assets/globalStyles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInUpPage from "pages/SignInUpPage";
import TodoPage from "pages/TodoPage";
import { useContext } from "react";
import AuthContext from "context/AuthProvider";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              auth.token ? <Navigate replace to="/todos" /> : <SignInUpPage />
            }
          ></Route>
          <Route
            path="/todos"
            element={auth.token ? <TodoPage /> : <Navigate replace to="/" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
