import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Contexts/AuthContext";


const ProtectedRoute = ({children}) => {
    const { currentUser } = useAuthContext();
    const location = useLocation();

    if (!currentUser) {
       return <Navigate to="/sign in" state={{ path: location.pathname }} />
    }
    return children;
}

export default ProtectedRoute