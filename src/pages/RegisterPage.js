import React from "react";
import FullLayout from "../layouts/FullLayout";
import { useState , useEffect , useRef  } from "react";
import axios from "../api/axios";

const RegisterPage = (props) => {

    const namaRef = useRef();
    const errRef = useRef();

    const [getNama,setNama] = useState('');
    const [getEmail,setEmail] = useState('');
    const [getPassword,setPassowrd] = useState('');
    const [getPasswordConfirm,setPasswordConfirm] = useState('');
    const [getPasswordValidation,setPasswordValidation] = useState();
    const [getErrMesssage,setErrMessage] = useState('');

    useEffect(() => {
        namaRef.current.focus()
    },[]);

    useEffect(() => {
        setErrMessage('');
    },[getNama,getEmail,getPassword,])

    const handleNamachange = event => {
        setNama(event.target.value)
    }

    const handleEmailchange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordchange = event => {
        setPassowrd(event.target.value)
    }

    const handlePasswordConfirmchange = event => {
        setPasswordConfirm(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        (!getPassword === getPasswordConfirm)  ? setPasswordValidation(false) : setPasswordValidation(true);
        if(getPasswordValidation){
            axios.post("/register",
        {
            name : `${getNama}`,
            email : `${getEmail}`,
            password : `${getPassword}`,
            role : 1,
        })
        .then(response => {
            console.log(response);
            setNama('');
            setEmail('');
            setPassowrd('');
            setPasswordConfirm('');
        }).catch(err => {
            console.log(err)
        }).catch(error => {
            if (!error?.response) {
                setErrMessage('No Server Response');
            } else if (error.response?.status === 400) {
                setErrMessage('Wrong input');
            } else if (error.response?.status === 401) {
                setErrMessage('Unathorized');
            } else {
                setErrMessage('register Failed');
            }

            errRef.current.focus()
        });
        }else{
            setErrMessage('input password berbeda')
        }
    }


    return (
        <React.Fragment>
            <FullLayout title="Daftar">
                console.log(getErrMesssage)
                <p ref={errRef} className={getErrMesssage ? "errMsg" : "offscreen"} aria-live="assertive">{getErrMesssage}</p>
                <form className="px-4 position-relative" onSubmit={handleSubmit}>
                    <label htmlFor="nama" className="form-label">Nama</label>
                    <div className="input-group mb-2">
                        <i className="bi bi-person input-group-text border-0 position-relative px-3 input"></i>
                        <input type="text" className="form-control" id="nama" name="nama" placeholder="Masukan nama" onChange={handleNamachange} value={getNama} ref={namaRef} required/>
                    </div>

                    <label className="form-label">Email</label>
                    <div className="input-group mb-2">
                        <i className="bi bi-envelope input-group-text border-0 position-relative px-3 input"></i>
                        <input type="text" className="form-control" id="email" name="email" placeholder="Masukan email" onChange={handleEmailchange} value={getEmail} required/>
                    </div>

                    <label className="form-label mt-2">Password</label>
                    <div className="input-group mb-2">
                        <i className="bi bi-lock input-group-text border-0 position-relative px-3 input"></i>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password 8 Karakter" onChange={handlePasswordchange} value={getPassword} required/>
                    </div>

                    <label className="form-label mt-2">Konfirmasi Password</label>
                    <div className="input-group mb-2">
                        <i className="bi bi-file-lock input-group-text border-0 position-relative px-3 input"></i>
                        <input type="password" className="form-control" id="password_confirm" name="password_confirm" placeholder="Konfirmasi Password" onChange={handlePasswordConfirmchange} value={getPasswordConfirm} required/>
                    </div>

                    <div className="text-center">
                        <ion-button padding type="submit" className="text-white mt-5 button rounded" style={{ borderRadius : 30, }} onClick={() => {
                            props.history.push("/register")
                        }}> Daftar </ion-button>
                    </div>
                    <div className="text-center mt-4 fs-6 d-flex align-items-center justify-content-center"> 
                        Sudah punya akun? 
                        <button type="button" onClick={() => {
                            props.history.push("/login")
                        }} className="text-decoration-none fw-bold text btn btn-link"> Masuk </button>
                    </div>
                </form>
            </FullLayout>
        </React.Fragment>
    )
}

export default RegisterPage;
