import "./FullLayout.css"
const FullLayout = (props) => {
    return (
        <>
             <div className="wrapper">
                <div className="image-wrapper">
                    <div className="d-flex position-relative justify-content-center">
                        <img className="mt-4" src="/assets/images/LogoSUKKA.png" alt="LogoSUKKA" width="120" />
                    </div>
                </div>
                <div className="bg-light position-absolute fixed-bottom pt-4 container">
                    <div className="text-center">
                        <b>{props.title}</b>
                        <p className="fs-12"><b className="text">{props.title}</b> untuk masuk aplikasi</p>
                    </div>
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default FullLayout;