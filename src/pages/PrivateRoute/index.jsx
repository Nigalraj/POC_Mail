import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/header/header";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ user, redirectPath = "/" }) => {
    if (user) {
        console.log("private route");

        return <Navigate to={redirectPath} replace />;
    }
    console.log("private route");
    return (
        <>
            {" "}
            <Header />
            <Outlet />
        </>
    );
};
export default ProtectedRoute;
