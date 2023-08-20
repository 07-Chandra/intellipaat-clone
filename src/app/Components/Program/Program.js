import React from "react";
import "./Program.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Caunselling from "@/app/SubComponents/Caunselling/Caunselling";
function Program() {
    return (
        <div className="program">
            <div className="program-container">
                <div className="header">
                    <h2>
                        About <span>Program</span>
                    </h2>
                    <p>
                        This online Advanced Certification in DevOps and Cloud
                        Computing by IITM Pravartak will help you gain expertise
                        in DevOps, access management, DevSecOps, Terraform, and
                        more.
                    </p>
                </div>

                <div className="wrap-highlight">
                    <div className="highlight card">
                        <div className="header">
                            <h2>Key Highlights</h2>
                        </div>

                        <div className="points">
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>
                                    120 Hrs Live Sessions (5+1 Month Projects
                                    Session)
                                </p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>400 Hrs of Applied Learning</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>168 Hrs of Self-paced Learning</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>Weekday/Weekend Lectures Available</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>Placement Assistance</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>50+ Industry Projects & Case Studies</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>2 Capstone Projects</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>Dedicated Learning Management Team</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>1:1 Mock Interview</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>24*7 Support</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>Learn from IIT Faculty & Industry Experts</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>IITM Pravartak Certification</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>
                                    Designed for Working Professionals and
                                    Freshers
                                </p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>No-cost EMI Option starts at INR4,999</p>
                            </div>
                            <div className="item">
                                <div className="item-icon">
                                    <AiOutlineCheckCircle className="icon" />
                                </div>
                                <p>
                                    2 Days Campus immersion at IIT Madras
                                    Research Park
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="caunselling-form">
                        <Caunselling className="comp"/>
                    </div>
                </div>

                <div className="about">
                    <div className="header">
                        <p className="heading">
                            About{" "}
                            <span>IITM Pravartak Digital Skills Academy</span>
                        </p>
                        <p className="para">
                            IITM Pravartak, a Technology Innovation Hub of IIRM
                            is funded by Department of Science and Technology,
                            GOI under its National Mission on Interdisciplinary
                            Cyber-Physical Systems (NM-ICPS), focuses on
                            application-oriented research and innovation in the
                            areas SNACS. BharOS, India’s first mobile operating
                            system is developed by an IITM Pravartak incubated
                            company.
                        </p>
                    </div>

                    <div className="achivement card">
                        <h2 className="subhead">
                            Key Achievements of IIT Madras:
                        </h2>
                        <ul className="list">
                            <li className="list-item">
                                Ranked No: 1 in India in both ‘Overall’ and
                                ‘Engineering’ Categories in NIRF 2022 from last
                                4th consecutive year.
                            </li>
                            <li className="list-item">
                                IIT Madras has been identified as an
                                ‘Institution of Eminence’ by the Government of
                                India.
                            </li>
                            <li className="list-item">
                                Ranked No. 4 Indian Institute in QS World
                                University Ranking and Ranked #250 in the
                                International QS World rankings 2023.
                            </li>
                        </ul>
                    </div>

                    <div className="certificate">
                        <div className="image-wrapper card">
                            <img
                                src="https://intellipaat.com/course-image/2023/03/Advanced-Certification-in-DevOps-Cloud-Computing.jpg"
                                alt="certificate of completion"
                            />
                        </div>
                        <p className="zoom">Click to Zoom</p>

                        <p className="note">
                            <span>Note :</span>
                            All certificate images are for illustrative purposes
                            only and may be subject to change at the discretion
                            of the IITM Pravartak.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Program;
