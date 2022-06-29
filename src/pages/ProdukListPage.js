import React from "react";
import LayoutTabs from '../layouts/LayoutTabs';

import '../layouts/Pages.css'
const ProdukListPage = (props) => {
    return (
        <LayoutTabs>
            <div className="parent bg">
                <div className="bg position-relative d-flex justify-content-between p-3">
                    <a href="dashboard" className=""> <i className="bi bi-arrow-left text-white fs-3"></i> </a>
                    <div className=""> <i className="bi bi-list text-white fs-3"></i></div>
                </div>

                <div className="card position-absolute bg-light pt-2" style={{ top:"5rem" }}>
                    <div className="d-flex justify-content-center mt-4 mx-2 px-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                            <input type="text" className="form-control" placeholder="Cari barang disini" aria-label="cari-barang" aria-describedby="addon-wrapping"/>
                        </div>
                    </div>

                    <div className="flex-column mt-4 px-3">
                        <div className="kotak-list rounded-4 d-flex justify-content-between ps-4 mx-2 py-2 mb-3">
                            <div className="text flex-column">
                                <div className="fw-semibold">Telur Ayam</div>
                                <div className="fs-12 text-dark">Rp. 12356/Kg</div>
                            </div>
                            <button type="submit" onClick={() => {
                                    props.history.push("/edit-produk")
                                }} className="btn btn-link text-decoration-none">
                                <i className="bi bi-three-dots-vertical mt-2 text-grey"></i>
                            </button>
                        </div>
                        <div className="kotak-list2 rounded-4 d-flex justify-content-between px-4 mx-2 py-2 mb-3">
                            <div className="text flex-column">
                                <div className="fw-semibold">Daging Sapi A5</div>
                                <div className="fs-12 text-dark">Rp. 12356/Kg</div>
                            </div>
                            <i className="bi bi-three-dots-vertical mt-2 text-grey"></i>
                        </div>
                    </div>

                </div>
            </div>
        </LayoutTabs>
    )
}
export default ProdukListPage;