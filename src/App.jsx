import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAlluserAction } from "./redux/actions/GetAlluserAction";
import "./App.css";
import Header from "./components/header/header";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Template } from "./pages/Template";

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAlluserAction("a23e4567-e89b-12d3-a456-426655440009"));
    }, []);

    const data = useSelector((state) => state?.Getusers?.GetAllusersModel);
    console.log(data);
    return (
        <>
            <div className="bg_color">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/edit" element={<Template />} />
                        </>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};
