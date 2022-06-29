import React from "react";
import LayoutTabs from '../layouts/LayoutTabs';

import '../layouts/Pages.css'

const EditProdukPage = (props) => {
    return (
        <LayoutTabs>
            <div className="parent">
                <div className="bg position-relative d-flex justify-content-between p-3">
                    <button type="button" onClick={() => {
                                    props.history.push("/produk-list")
                                }} className="btn btn-link">
                                 <i className="bi bi-arrow-left top-0 mt-3 position-absolute text-white fs-3"></i> 
                    </button>
                    <div className=""> <i className="bi bi-list text-white fs-3"></i></div>
                </div>

                <div className="card position-absolute bg-light">
                    <div className="mt-3 mx-3">
                        <i className="bi bi-pen me-2"></i>
                        <span className="fw-5 fs-bold"> Edit Produk </span>

                    </div>

                    <div className="flex-column px-3 mt-3">
                        <form action="" method="post">
                            <label for="" className="form-label"> Nama Produk </label>
                            <div className="input-group">
                                <input type="text" className="form-control" name="" id="" placeholder="Masukan nama produk" />
                            </div>
                            <label for="" className="form-label"> Harga produk <span className="fs-12">(Sebelum)</span> </label>
                            <div className="row">
                                <div className="col-8">
                                    <input type="text" className="form-control" name="" id="" placeholder="Rp." disabled />
                                </div>
                                <div className="col-4">
                                    <select className="form-select" aria-label="Default select example" disabled>
                                        <option value="1">Ons</option>
                                        <option value="2">Kg</option>
                                        <option value="3">Gram</option>
                                    </select>
                                </div>
                            </div>
                            <label for="" className="form-label"> Harga produk <span className="fs-12">(Sesudah)</span> </label>
                            <div className="row">
                                <div className="col-8">
                                    <input type="text" className="form-control" name="" id="" placeholder="Rp." />
                                </div>
                                <div className="col-4">
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="1">Ons</option>
                                        <option value="2">Kg</option>
                                        <option value="3">Gram</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="btn text-white text-center px-5 py-2 mt-4 bg-biru">
                                    <i className="bi bi-pen me-2"></i>
                                    <span>Edit Produk</span>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </LayoutTabs>
    )
}

export default EditProdukPage;