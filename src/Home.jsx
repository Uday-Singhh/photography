import react from "react";

import web from "../src/images/DSC_0286.JPG"
import { NavLink } from 'react-router-dom';
const Home = () =>{
    return(
        <>
            <section id="header" className="d-flex align-items-centre">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>For capturing Your Moments hire <strong className="brand-name">U.K Studio</strong></h1>
                            <h2 className="my-3">We are team of talented photographers turning memories into timeless treasures.</h2>
                            <div className="mt-3">
                                <NavLink to="./service" className="btn-get-started">Get started</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="home img"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>        
            </section>
        </>
    );
};
export default Home;