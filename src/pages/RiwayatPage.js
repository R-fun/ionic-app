import React from "react";
import '../layouts/FullLayout'

const RiwayatPage = (props) => {
    return (
       <React.Fragment>
            <div className="parent">
                <div className="bg position-relative d-flex justify-content-between p-3">
                    <a href="dashboard.html" className=""> <i className="bi bi-arrow-left text-white fs-3"></i> </a>
                    <div className=""> <i className="bi bi-list text-white fs-3"></i></div>
                </div>

                <div className="card position-absolute bg-light">
                    <div className="mt-3 mx-3">
                        <i className="bi bi-clock-history me-2"></i>
                        <span className="fw-5 fs-bold"> Riwayat produk </span>
                    </div>

                    <div className="mt-5 mx-3">
                        <div className="ms-3 fs-12"> Sabtu,12 Juni 2022 | 17:55 </div>
                        <div className="text-black p-3 kotak-list">
                            <div className="flex-column">
                                <div className="fs-6 fw-bold"> Telur Ayam </div>
                                <div className="fw-lead fs-12"> Rp.12.500/Kg </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
       </React.Fragment>
    )
}

export default RiwayatPage;