import React from "react";
import "./Hero.scss";
import Contact from "@/app/SubComponents/Contact/Contact";
import { AiOutlineDown } from "react-icons/ai";

function Hero() {
    return (
        <div className="hero">
            <div className="cover">

                <div className="contact">
                    <Contact/>
                </div>
                <div className="course">
                    <h1 className="heading">
                        Advanced Certification in DevOps & Cloud Computing
                    </h1>
                    <div className="location">
                        Learn from IIT Madras Faculty & Industry Experts with
                        Campus Immersion at IIT Madras Research Park
                    </div>
                    <p className="about">
                        Enroll in this advanced certification by IITM Pravartak
                        (The Technology Innovation Hub of IIT Madras) and
                        Intellipaat and learn under the expert guidance of the
                        IIT Madras faculty. The program is designed by industry
                        experts to help you master AWS, cloud computing, VPC,
                        etc., through real-time hands-on projects.
                    </p>
                    <div className="button">
                        <button className="btn apply">Apply Now</button>
                        <button className="btn download">
                            Download Broachure
                        </button>
                    </div>

                    <div className="seats">
                        <p className="seat">Only Few Seats Left</p>
                        <div className="rank">
                            Ranked #1 Cloud Program by{" "}
                            <a href="#">India Today</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advertise">
                <div className="about-course">
                    <div className="feature">
                        <p>Learning Format</p>
                        <h3>Online Bootcamp</h3>
                    </div>
                    <div className="feature">
                        <p>Live Classes</p>
                        <h3>6 Months</h3>
                    </div>
                    <div className="feature">
                        <p>Campus Immersion</p>
                        <h3>at IITM Pravartak</h3>
                    </div>
                    <div className="feature">
                        <p>IITM Pravartak</p>
                        <h3>Certification</h3>
                    </div>
                    <div className="feature">
                        <p>No Cost EMI Starts</p>
                        <h3>at ₹4999/month*</h3>
                    </div>
                </div>
                <div className="ratings">
                    <div className="border">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2020/10/Trustpilot.png"
                                alt="rating1"
                            />
                        </div>
                    </div>

                    <div className="border">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2017/09/sitejabber-1.png"
                                alt="rating2"
                            />
                        </div>
                    </div>

                    <div className="border">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2020/10/Mouthshut.png"
                                alt="rating3"
                            />
                        </div>
                    </div>
                </div>

                <div className="success">
                    <div className="top">
                        <p>
                            {" "}
                            <b>95%</b> learners satisfaction score post
                            completion of the program*{" "}
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/wp-content/themes/intellipaat/images/ey-rating.svg"
                                alt="sponsor"
                            />
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Hero;
