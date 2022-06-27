import React from "react";
import '../layouts/Page.css'

const TambahProdukPage = (props) =>{
    return(
        <React.Fragment>
            <div className="parent">
                <div className="bg position-relative d-flex justify-content-between p-3">
                    <a href="dashboard" className=""> <i className="bi bi-arrow-left text-white fs-3"></i> </a>
                    <div className=""> <i className="bi bi-list text-white fs-3"></i></div>
                </div>

                <div className="card position-absolute bg-light">
                    <div className="mt-3 mx-3">
                        <i className="bi bi-plus me-2"></i>
                        <span className="fw-5 fs-bold"> Tambah Produk </span>

                    </div>

                    <div className="flex-column px-3 mt-3">
                        <form action="" method="post">
                            <label htmlFor="" className="form-label"> Nama Produk </label>
                            <div className="input-group">
                                <input type="text" className="form-control" name="" id="" placeholder="Masukan nama produk"/>
                            </div>

                            <div className="text-center">
                                <div className="btn text-white text-center mt-4 py-2 px-5 bg-biru">
                                    <i className="bi bi-plus me-2"></i>
                                    <span>Tambah Produk</span>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default TambahProdukPage;