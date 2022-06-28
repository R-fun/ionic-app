import React from "react";
import LayoutTabs from '../layouts/LayoutTabs';

const DashboardPage = (props) => {
    return (
        <LayoutTabs>
            <div className="p-3">
                <div className="rounded-5 position-relative flex-column p-2 dahsboard-image" style={{ height: 300, backgroundRepeat: "no-repeat" }}>
                    <div className="d-flex p-3">
                        <img src="/assets/images/LogoSUKKA.png" className="logo-image" width="50" />
                        <i className="bi bi-list" style={{ marginLeft: "auto", color: "white" }}></i>
                    </div>
                    <div style={{ position: "absolute", right: 0, bottom: 0, backgroundImage: "url(./images/jempol.png)", height: 200, width: 250, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    </div>
                    <div className="mt-3 ms-3" style={{ fontSize: 12, color: "white" }}>
                        Selamat datang,
                    </div>
                    <div className="ms-3 fw-bold text-white">
                        Faris Iftikhar Alfarisi
                    </div>
                </div>

                <div className="position-absolute text-center" style={{ zIndex: 1, top: "12rem", left: '50%', transform: "translate(-50%, -50%)", width: "77%" }}>
                    <a href="tambah_produk.html" className="btn btn-dark rounded-5 py-2 px-5" style={{ background: "#313A56" }}>Tambahkan Produk Anda</a>
                </div>

                <div className="card position-absolute bg-light pt-3 px-2" style={{ left: 0, right: 0, bottom: 0, top: "12rem", borderRadius: "2rem" }}>
                    <div className="d-flex justify-content-between mt-4 mx-3">
                        <div className="fw-5 fs-bold"> Daftar Produk </div>
                        <a href="riwayat.html" className="text-secondary mt-1" style={{ ontSize: 12 }}> Selengkapnya</a>
                    </div>

                    <div className="flex-column mt-3">
                        <div style={{ background: "#ecebec" }} className="rounded d-flex justify-content-between px-3 mx-2 py-2">
                            <div className="text flex-column">
                                <div>Telur Ayam</div>
                                <div style={{ fontSize: 12 }}>Rp. 12356</div>
                            </div>
                            <div className="mt-1">:</div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutTabs>
    )
}
export default DashboardPage;