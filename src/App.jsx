import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './login/Login';
import Forgot from './login/ForgotPassword';
import Register from './login/Register';
import Dashboard from './dashboard/Dashboard';

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
