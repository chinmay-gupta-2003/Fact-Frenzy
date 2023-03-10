import HomePage from "./pages/homePage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./style.css";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
