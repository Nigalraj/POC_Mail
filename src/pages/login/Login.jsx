import  {  useState } from 'react';
import './Login.css'; // Import your custom CSS for this component
import logo from "../../assets/logo.svg";
import { BiMailSend } from "react-icons/bi";
import { IoIosUnlock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const nav=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your login logic here, such as sending the form data to a server.
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="login-container">
            <div className="login-box text-white">
               <img src={logo} alt="logo"  className='mx-auto d-flex' style={{width:"31%"}} />
                <form onSubmit={handleSubmit}>
                    <div className="input-container my-3">
                        <label htmlFor="username" className='fw-semibold' >Username</label>
                        <div className="d-flex align-items-center rounded-pill p-0" style={{backgroundColor:"#381b5e"}}>
                        <BiMailSend className='fs-1 mx-1'/>
                        <input
                        className='rounded-pill'
                            type="text"
                            id="username"
                            name="username"
                            placeholder='stevesmith@gmail.com'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>
                    <div className="input-container my-3">
                        <label htmlFor="password" className='fw-semibold' >Password</label>
                        <div className="d-flex align-items-center rounded-pill p-0" style={{backgroundColor:"#381b5e"}}>
                        <input
                        className='rounded-pill'
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <IoIosUnlock className='fs-1 px-1 me-1'/>
                    </div>
                    </div>
                    <button type="submit" className="btn text-white" style={{backgroundColor:"#381b5e"}}>Login</button>
                </form>
                <p className='text-center mb-0 mt-3'>Create an account <span className='fw-semibold' style={{color:"#381b5e"}} onClick={()=>{nav("/signup")}}>Sign up</span></p>
            </div>
        </div>
    );
};

export default Login;
