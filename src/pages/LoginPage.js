import FullLayout from "../layouts/FullLayout";
import { useState,useRef,useEffect } from "react";
import { useRouteMatch } from "react-router";

const LoginPage = (props) => {
    const emailRef = useRef();
    const errRef = useRef();

    const [getEmail,setEmail] = useState('');
    const [getPassowrd,setPassword] = useState('');
    const [getErrMesssage,setErrMessage] = useState('');
    const [getSuccess,setSucces] = useState(false);
    
    useEffect(() => {
        emailRef.current.focus()
    },[]);
    
    useEffect(() => {
        setErrMessage('');
    },[getEmail,getPassowrd]);

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    return (
        <FullLayout title="Login">
            <p ref={errRef} className={getErrMesssage ? "errMsg" : "offscreen"} aria-live="assertive">{getErrMesssage}</p>
            <form className="px-4" onSubmit={handleSubmit}>
                
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                    <i className="bi bi-envelope input-group-text border-0 position-relative px-3 " style={{backgroundColor: "#ecebeb", fontSize: 20, color: "#4a5df3"}}></i>
                    <input type="text" className="form-control" id="email" ref={emailRef} autoComplete="off" name="email" placeholder="Masukan email" onChange={handleEmailChange} value={getEmail} required />
                </div>

                <label htmlFor="password" className="form-label mt-2">Password</label>
                <div className="input-group">
                    <i className="bi bi-lock input-group-text border-0 position-relative px-3 " style={{backgroundColor: "#ecebeb", fontSize: 20, color: "#4a5df3"}}></i>
                    <input type="password" className="form-control" id="password" name="password" placeholder="password" onChange={handlePasswordChange} value={getPassowrd} required/>
                </div>
                <div className="">
                </div>
                <a href="register.html" className="text-decoration-none fs-6 mt-2 me-4" style={{right: 0, position: "absolute"}}> lupa password? </a>
                <div className="text-center">
                <a href="/dashboard" type="submit" className="btn text-white mt-5" style={{backgroundColor: "#4a5df3", width: "16rem"}}> Masuk </a>
                </div>
                <p className="text-center mt-4 fs-6" > Tidak punya akun? <a href="/register" className="text-decoration-none fw-bold" style={{color: "#4a5df3"}}> Daftar </a></p>
            </form>
        </FullLayout>
    )
}

export default LoginPage;