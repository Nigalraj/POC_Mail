import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import "../../common.css";
import { headerLable } from "../../constants";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

function Header() {
    const [active, setActive] = useState();
    const nav = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const index = headerLable?.paths.findIndex((path) => location.pathname === path);
        setActive(index >= 0 ? index : "");
    }, [location.pathname]);

    return (
        <>
            {location.pathname === "/Edit" && (
                <div className="bg-purple d-flex align-items-center">
                    <ArrowBack width={25} className="cursor-pointer mt-3 ms-3 text-white" onClick={() => nav("/dashboard")} />
                    <div className="text-white mx-2 mt-3  ms-4" style={{ height: "30px", borderRight: "1px solid white" }} />
                </div>
            )}
            <Navbar className="bg-purple" data-bs-theme="dark">
                <Container>
                    {location.pathname !== "/Edit" && (
                        <>
                            <Navbar.Brand onClick={() => nav("/dashboard")}>
                                <img src={logo} alt="Logo" className="cursor-pointer" style={{ width: "31%" }} />
                            </Navbar.Brand>
                            <Nav className="me-5">
                                {headerLable?.header.map((value, i) => (
                                    <Nav.Link
                                        key={i}
                                        active={active === i}
                                        onClick={() => {
                                            setActive(i);
                                            nav(headerLable?.paths[i]);
                                        }}
                                    >
                                        {value}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </>
                    )}
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
