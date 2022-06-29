import { IonLabel, IonList } from "@ionic/react";
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
                    <div style={{ position: "absolute", right: 0, bottom: 0, backgroundImage: "url(../../public/assets/images/jempol.png)", height: 200, width: 250, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
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
                    <div className="d-flex justify-content-between mt-4 ms-3">
                        <div className="fw-5 fs-bold mt-1"> Daftar Produk </div>
                        <button type="button" onClick={() => {
                                    props.history.push("/produk-list")
                                }} className="btn btn-link text-decoration-none text-secondary fs-12" style={{ ontSize: 12 }}> Selengkapnya </button>
                    </div>

                    <div className="flex-column mt-3">
                        <IonList style={{ background: "#ecebec" }} className="rounded d-flex justify-content-between px-3 mx-2 py-2">
                            <div className="text flex-column">
                                <IonLabel style={{ color : "black" }}>Telur Ayam</IonLabel><br/>
                                <IonLabel style={{ fontSize: 12 ,color : "black" }}>Rp. 12356</IonLabel>
                            </div>
                            <i className="bi bi-three-dots-vertical mt-2 text-grey"></i>
                        </IonList>
                    </div>
                </div>
            </div>
        </LayoutTabs>
    )
}
export default DashboardPage;