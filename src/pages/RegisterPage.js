import React from "react";
import FullLayout from "../layouts/FullLayout";

const RegisterPage = (props) => {
    return (
        <React.Fragment>
            <FullLayout title="Daftar">
                <form className="px-4 position-relative" action="post">
                    <label className="form-label">Email</label>
                    <div className="input-group">
                        <i className="bi bi-envelope input-group-text border-0 position-relative px-3 input"></i>
                        <input type="text" className="form-control" id="email" name="email" placeholder="Masukan email"/>
                    </div>

                    <label className="form-label mt-2">Password</label>
                    <div className="input-group">
                        <i className="bi bi-lock input-group-text border-0 position-relative px-3 input"></i>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password 8 Karakter"/>
                    </div>

                    <label className="form-label mt-2">Password</label>
                    <div className="input-group">
                        <i className="bi bi-lock input-group-text border-0 position-relative px-3 input"></i>
                        <input type="password" className="form-control" id="password_confirm" name="password_confirm" placeholder="Konfirmasi Password"/>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn text-white mt-5 button"> Daftar </button>
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
