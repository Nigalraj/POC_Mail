import logo from "../../assets/logo.svg";
import { BiMailSend, BiUser } from "react-icons/bi";
import { IoIosUnlock } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const nav=useNavigate()
    return(
        <>
 <div className="login-container">
            <div className="login-box text-white">
               <img src={logo} alt="logo" srcset="" className='mx-auto d-flex' style={{width:"31%"}} />
                <form >
                <div className="input-container my-3">
                        <label htmlFor="username" className='fw-semibold' >Email</label>
                        <div className="d-flex align-items-center rounded-pill p-0" style={{backgroundColor:"#381b5e"}}>
                        <BiMailSend className='fs-1 mx-1'/>
                        <input
                        className='rounded-pill'
                            type="email"
                            id="username"
                            name="username"
                            placeholder='stevesmith@gmail.com'
                            required
                        />
                        </div>
                    </div>
                    <div className="input-container my-3">
                        <label htmlFor="username" className='fw-semibold' >Username</label>
                        <div className="d-flex align-items-center rounded-pill p-0" style={{backgroundColor:"#381b5e"}}>
                        <BiUser className='fs-1 mx-1'/>
                        <input
                        className='rounded-pill'
                            type="text"
                            id="username"
                            name="username"
                            placeholder='stevesmith@gmail.com'
                            required
                        />
                        </div>
                    </div>
                    <div className="input-container my-3">
                        <label htmlFor="password" className='fw-semibold' >Password</label>
                        <div className="d-flex align-items-center rounded-pill p-0" style={{backgroundColor:"#381b5e"}}>
                        <IoIosUnlock className='fs-1 px-1 mx-1'/>
                        <input
                        className='rounded-pill'
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            required
                        />
                    </div>
                    </div>
                    <button type="submit" className="btn text-white" style={{backgroundColor:"#381b5e"}}>SignUp</button>
                </form>
                <p className='text-center mb-0 mt-3'>Already have an account <span className='fw-semibold' style={{color:"#381b5e"}} onClick={()=>{nav("/")}}>Login</span></p>
            </div>
        </div>
        </>
    )
}
