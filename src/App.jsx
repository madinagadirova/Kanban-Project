import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login/Login';
import Forgot from './login/ForgotPassword';
import Register from './login/Register';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from "./login/PrivateRoute";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
