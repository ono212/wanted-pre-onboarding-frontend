import GlobalStyles from "./assets/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInUpPage from "pages/SignInUpPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
