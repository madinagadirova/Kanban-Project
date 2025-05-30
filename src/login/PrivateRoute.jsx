// src/routes/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const accessedViaLoginButton = sessionStorage.getItem("accessedViaLogin") === "true";

    if (isLoggedIn && accessedViaLoginButton) {
        return children;
    }

    return <Navigate to="/login" replace />;
}

export default PrivateRoute;
