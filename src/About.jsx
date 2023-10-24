import react from "react";
import web from "../src/images/DSC_3401.JPG"
import { NavLink } from 'react-router-dom';
const About = () =>{
    return(
        <>
            <section id="header" className="d-flex align-items-centre">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>We record moments at:</h1>
                            <ul>
                                <li>Weddings</li>
                                <li>Corporate Events like conferences, seminars, product launches etc</li>
                                <li>Birthday Parties</li>
                                <li>Engagement Parties</li>
                                <li>Anniversary Celebrations</li>
                                <li>Sports Events</li>
                                <li>Family Reunions</li>
                            </ul>
                            
                            <div className="mt-3">
                                <NavLink to="./contact" className="btn-get-started">Contact Now</NavLink>
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
export default About;