import FullLayout from "../layouts/FullLayout";
import { useState, useRef, useEffect , useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from '../api/axios';


const LoginPage = (props) => {
    const {setAuth} = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();

    const [getEmail, setEmail] = useState('');
    const [getPassowrd, setPassword] = useState('');
    const [getErrMesssage, setErrMessage] = useState('');
    const [getStatus, setStatus] = useState();
    const [getToken,setToken] = useState('')

    useEffect(() => {
        emailRef.current.focus()
    }, []);

    useEffect(() => {
        setErrMessage('');
    }, [getEmail, getPassowrd]);

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post("/login",
            {
                email: `${getEmail}`,
                password: `${getPassowrd}`
            })
            .then((response) => {
                setToken(response?.data?.token);
                setEmail('');
                setPassword('');
                // const accessToken = response?.data?.token;
                // const role = response?.data?.user?.role
                // setAuth({getEmail,getPassowrd,role,accessToken});
                console.log(response?.data?.status)
                setStatus(response?.data?.status);
                setPassword('');
            }).catch(error => {
                console.log(error.response);
                if (!error?.response) {
                    setErrMessage('No Server Response');
                } else if (error.response?.status === 400) {
                    setErrMessage('Wrong Username and Password');
                } else if (error.response?.status === 401) {
                    setErrMessage('Unathorized');
                } else {
                    setErrMessage('Login Failed');
                }

                errRef.current.focus()
            });
    }
    return (
        <FullLayout title="Login">
            <section>
                <p ref={errRef} className={getErrMesssage ? "errMsg" : "offscreen"} aria-live="assertive">{getErrMesssage}</p>
                        <form className="px-4" onSubmit={handleSubmit}>

                            <label htmlFor="email" className="form-label">Email</label>
                            <div className="input-group">
                                <i className="bi bi-envelope input-group-text border-0 position-relative px-3 " style={{ backgroundColor: "#ecebeb", fontSize: 20, color: "#4a5df3" }}></i>
                                <input type="text" className="form-control" id="email" ref={emailRef} autoComplete="off" name="email" placeholder="Masukan email" onChange={handleEmailChange} value={getEmail} required />
                            </div>

                            <label htmlFor="password" className="form-label mt-2">Password</label>
                            <div className="input-group">
                                <i className="bi bi-lock input-group-text border-0 position-relative px-3 " style={{ backgroundColor: "#ecebeb", fontSize: 20, color: "#4a5df3" }}></i>
                                <input type="password" className="form-control" id="password" name="password" placeholder="password" onChange={handlePasswordChange} value={getPassowrd} required />
                            </div>
                            <div className="">
                            </div>
                            <a href="register.html" className="text-decoration-none fs-6 mt-2 me-4" style={{ right: 0, position: "absolute" }}> lupa password? </a>
                            <div className="text-center">
                                <button type="submit" onClick={() => {
                                    { 
                                        getStatus == true ? props.history.push("/dashboard") : props.history.push("/login");
                                }
                                }} className="btn text-white mt-5" style={{ backgroundColor: "#4a5df3", width: "16rem" }}> Masuk </button>
                            </div>
                            <p className="text-center mt-4 fs-6" > Tidak punya akun?<button type="button" onClick={() => {
                                props.history.push("/register")
                            }} className="btn btn-link text-decoration-none fw-bold mb-1" style={{ color: "#4a5df3" }}>Daftar</button></p>
                    </form>
            </section>
        </FullLayout>
           
    )
}

export default LoginPage;