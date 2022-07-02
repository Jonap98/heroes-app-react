import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";
import { PrivateRoute } from "./PrivateRoute";

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);

    return ( !logged )
        ? children
        : <Navigate to="/marvel" />
}
