import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
// import { GetAlluserAction } from "./redux/actions/GetAlluserAction";
import "./App.css";
import Header from "./components/header/header";
import { Dashboard } from "./pages/Dashboard";
import {  Route, Routes } from "react-router-dom";
import { Template } from "./pages/Template";
import Login from "./pages/login/Login";
import { Signup } from "./pages/signUp/signUp";
export const App = () => {
    // const dispatch = useDispatch();
    const [show, setShow] = useState(true);
    const location = window.location.pathname;
    useEffect(() => {
        if (location == '/') {
            setShow(false)
        }
        else{
            setShow(true)
        }
        // dispatch(GetAlluserAction("a23e4567-e89b-12d3-a456-426655440009"));
    }, [location]);
    const data = useSelector((state) => state?.Getusers?.GetAllusersModel);
    console.log(data, "data");
    return (
        <>
            <div className="bg_color">
                    {show && <Header />}
                    <Routes>
                        <>
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<Signup  />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/edit" element={<Template />} />
                        </>
                    </Routes>
            </div>
        </>
    );
};
