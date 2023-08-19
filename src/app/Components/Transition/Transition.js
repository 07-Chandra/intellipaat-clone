import React from "react";
import "./Transition.scss";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsPersonPlusFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
function Transition() {
    return (
        <div className="container">
            <div className="transition">
                <div className="header">
                    <h2>
                        Career <span>Transition</span>
                    </h2>
                </div>
                <div className="info">
                    <div className="header">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2021/08/Nitin-Goyal.png"
                                alt=""
                            />
                        </div>

                        <div className="intro">
                            <p className="para">Nitin Goyal</p>
                            <p>DevOps Engineer | India</p>
                        </div>
                    </div>

                    <div className="story"></div>

                    <div className="tech">
                        <div className="cover">
                            <FaArrowTrendUp className="icon" />
                        </div>

                        <p className="para">Non-tech to Tech</p>
                    </div>
                    <p>
                        I was able to internally shift from a non-tech role to a
                        DevOps engineer role at IBM because of the rich content,
                        dedicated support, and job assistance program provided
                        by Intellipaat’s team.
                    </p>

                    <div className="company">
                        <div className="position">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2021/08/IBM.jpg"
                                    alt=""
                                />
                            </div>
                            <p className="para">System Engineer</p>
                        </div>

                        <picture class="icon"></picture>
                        <div className="position">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2021/08/IBM.jpg"
                                    alt=""
                                />
                            </div>
                            <p className="para">DevOps Engineer</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="graph">
                <div className="status a">
                    <FaArrowTrendUp className="icon" />

                    <p>
                        {" "}
                        <span>59%</span> Average Salary Hike
                    </p>
                </div>
                <div
                    className="status"
                    style={{ borderTop: "4px solid green" }}
                >
                    <BiMoneyWithdraw
                        className="icon"
                        style={{ color: "green" }}
                    />

                    <p>
                        {" "}
                        <span>40LPA</span> Highest Salary
                    </p>
                </div>
                <div
                    className="status a"
                    style={{ borderTop: "4px solid orange" }}
                >
                    <BsPersonPlusFill
                        className="icon"
                        style={{ color: "orange" }}
                    />

                    <p>
                        {" "}
                        <span>700+</span> Career Transitions
                    </p>
                </div>
                <div
                    className="status"
                    style={{ borderTop: "4px solid brown" }}
                >
                    <FaHandshake className="icon" style={{ color: "brown" }} />

                    <p>
                        {" "}
                        <span>300+</span> Hiring Partners
                    </p>
                </div>
            </div>
            <a class="link">Career Transition Handbook</a>
        </div>
    );
}

export default Transition;
