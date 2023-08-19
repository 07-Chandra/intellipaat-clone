import React from "react";
import "./Mentors.scss";
function Mentors() {
    return (
        <div className="mentors">
            <div className="mentors-container">
                <div className="header">
                    <h2 className="heading">
                        Meet Your <span>Mentors</span>
                    </h2>
                </div>

                <div className="all-info">
                    <div className="info">
                        <div className="name">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2022/02/Dr.-Noor-Mahammad-SK.png"
                                    alt="human"
                                />
                            </div>
                            <p className="para">Dr. Noor Mohammad SK</p>
                            <p>Assistant Professor, CSE, IITDM</p>
                            <p>
                                Dr. Noor Mahammad is currently working as an
                                Assistant Professor at IITDM. He has over 18
                                years of teaching experience with an interest in
                                software for VLSI design, evolvable hardware,
                                reconfigurable computing, and software defined
                                radio.
                            </p>
                        </div>
                    </div>
                    <div className="info second">
                        <div className="name">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2021/10/Pankaj.png"
                                    alt="human"
                                />
                            </div>
                            <p className="para">Pankaj Saxena</p>
                            <p>Sr. Director- Cloud Operations at Oracle</p>
                            <p>
                                He carries 24 years of experience in managing
                                complex &amp; heterogeneous infrastructure
                                alongside delivering cloud-based software
                                solutions to customers. He comes with vast
                                experience in multiple tools and technologies
                                and building complex systems.
                            </p>
                        </div>
                    </div>

                    <div className="info third">
                        <div className="name">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2021/10/Pankaj.png"
                                    alt="human"
                                />
                            </div>
                            <p className="para">
                                Dr. Pilli Emmanuel Shubhakar
                            </p>
                            <p>Associate Professor at MNIT Jaipur </p>
                            <p>
                                With 23 years of teaching experience, Dr.
                                Shubhakar’s research area includes Security,
                                Cloud Computing, Blockchain, etc. He has
                                co-authored “Fundamentals of Network Forensics”,
                                published by Springer, and is a senior member of
                                CCICI, IEEE, and ACM.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentors;
