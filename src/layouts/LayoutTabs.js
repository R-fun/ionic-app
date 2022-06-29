import "./FullLayout.css"
const FullLayout = (props) => {
    return (
        <>
            <div style={{backgroundColor: "#f1f1f1", height: "100%"}}>
                
                {props.children}
                <div className=" container-fluid position-absolute fixed-bottom px-4" style={{ borderRadius:"2rem 2rem 0 0",background: "#5568FE"  }}>
                    <div className="d-flex justify-content-between my-2">
                        {/* active untuk halaman beri garis dibawah dengan 'border-bottom' thanks back end:D */}
                        <a className="text-decoration-none text-white text-center" href="/dashboard">
                            <i className="bi bi-house-fill fs-1"></i>
                            <div className="">Beranda</div>
                        </a>

                        <a href="/tambah_produk" className="btn btn-dark position-absolute translate-middle start-50 top-20 rounded-circle py-3 px-4 border-0" style={{background: "#313A56", marginBottom: ""}}><i className="bi bi-plus-lg fs-1"></i></a>

                        <a className="text-decoration-none text-white text-center" href="/profile">
                            <i className="bi bi-person-circle fs-1"></i>
                            <div className="">Profil</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FullLayout;