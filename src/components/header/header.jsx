import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import "../../common.css";
import { headerLable } from "../../constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
    const [active, setActive] = useState();
    const nav = useNavigate();

    return (
        <>
            <Navbar className="bg-purple" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand onClick={() => nav("/")}>
                        <img src={logo} alt="Logo" className="cursor-pointer" style={{ width: "31%" }} />
                    </Navbar.Brand>
                    <Nav className="me-5">
                        {headerLable?.header.map((value, i) => (
                            <>
                                <Nav.Link
                                    active={active === i}
                                    onClick={() => {
                                        setActive(i);
                                        if (active === 0) {
                                            nav("/");
                                        }
                                    }}
                                >
                                    {value}
                                </Nav.Link>
                            </>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
