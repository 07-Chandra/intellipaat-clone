import React from "react";
import './Mentors.scss'
function Mentors() {
    return (
        <div className="mentors">
            <div className="mentors-container">
                <div className="header">
                    <h2 className="heading">
                        Meet Your <span>Mentors</span>
                    </h2>
                </div>
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
                            Assistant Professor at IITDM. He has over 18 years
                            of teaching experience with an interest in software
                            for VLSI design, evolvable hardware, reconfigurable
                            computing, and software defined radio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentors;
