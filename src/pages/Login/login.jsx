import { useEffect, useState } from "react";
import { loginLable } from "../../constants";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/actions/LoginAction";
import { useNavigate } from "react-router-dom";
import "../../common.css";
// import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Login = () => {
    useEffect(() => {
        localStorage.clear();
    }, []);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispacth = useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault();
        dispacth(LoginAction({ email, password }));

        setEmail("");
        setPassword("");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg rounded">
                        <div className="card-body">
                            <h2 className="card-title text-center text-primary mb-4">{loginLable?.LOGINTITLE}</h2>
                            <div className="d-flex flex-row-reverse   ">
                                <p
                                    className="cursor-pointer text-primary"
                                    onClick={() => {
                                        navigate("/signup");
                                    }}
                                >
                                    Create a new account
                                </p>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        {loginLable?.EMAIL}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">
                                        {loginLable?.PASSWORD}
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        autoComplete="off"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button onClick={handleLogin} disabled={email.length <= 0 || password.length <= 0} className="btn btn-primary btn-block py-2">
                                    {loginLable?.LOGIN}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
