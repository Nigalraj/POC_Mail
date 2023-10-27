import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import { Dashboard } from "./pages/Dashboard";
import { Template } from "./pages/Template";
import Login from "./pages/login/Login";
import { Signup } from "./pages/signUp/signUp";

export const App = () => {
    const location = useLocation();

    const showHeader = location.pathname !== "/";

    const data = useSelector((state) => state?.Getusers?.GetAllusersModel);
    console.log(data);

    return (
        <>
            <div className="bg_color">
                {showHeader && <Header />}
                <Routes>
                    <>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/edit" element={<Template />} />
                    </>
                </Routes>
            </div>
        </>
    );
};
