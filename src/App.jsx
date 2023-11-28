import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/Dashboard/index";
import { Template } from "./pages/Template";
import Signup from "./pages/sigup";
import Login from "./pages/Login/login";
import ProtectedRoute from "./pages/PrivateRoute";
import NotFoundPage from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Orginfo from "./pages/Orginfo";


export const App = () => {
    const data = useSelector((state) => state.Loginstore.LoginModel);
    console.log(data, "datadata");
    const localstorege = () => {
        if (localStorage.getItem("USER")) return true;
        else return false;
    };

    return (
        <>
            <div className="bg_color">
                <ToastContainer />
                <Routes>
                    <>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/orginfo" element={<Orginfo />} />
                        <Route element={<ProtectedRoute user={localstorege()} />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/edit" element={<Template />} />
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </>
                </Routes>
            </div>
        </>
    );
};
