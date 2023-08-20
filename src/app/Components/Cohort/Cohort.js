import React from "react";
import { BsCalendarMinus, BsFillCalendar2CheckFill } from "react-icons/bs";
import "./Cohort.scss";
import { BiTimeFive } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineCheck, AiOutlineDown } from "react-icons/ai";

function Cohort() {
    return (
        <div className="cohort center">
            <div className="cohort-container ">
                <div className="header">
                    <div className="heading">
                        Program <span>Cohorts</span>
                    </div>
                    <div className="subheading">Next Cohort</div>
                </div>

                <div className="programs card">
                    <div className="item">
                        <span>Program Induction</span>
                        <div className="icon-div">
                            <BsCalendarMinus className="icon" />
                            <p> 19th Aug 2023</p>
                        </div>
                        <div className="icon-div">
                            <BiTimeFive className="icon" />
                            <p> 08:00 PM IST</p>
                        </div>
                        <div className="icon-div">
                            <SlCalender className="icon" />
                            <p> Weekend (Sat-Sun)</p>
                        </div>
                    </div>
                    <div className="item item1">
                        <span>Regular Classes</span>
                        <div className="icon-div">
                            <BsCalendarMinus className="icon" />
                            <p> 19th Aug 2023</p>
                        </div>
                        <div className="icon-div">
                            <BiTimeFive className="icon" />
                            <p> 08:00 PM IST</p>
                        </div>
                        <div className="icon-div">
                            <SlCalender className="icon" />
                            <p> Weekend (Sat-Sun)</p>
                        </div>
                    </div>

                    <div className="center">
                        <button className="btn">Apply Now</button>
                    </div>
                </div>

                <div className="card program1">
                    <div className=" column col1">
                        <span></span>
                        <span>Program Induction</span>
                        <span>Regular Classes</span>
                    </div>
                    <div className="column col2">
                        <div className="row1">
                            <div className="icon-div">
                                <BsCalendarMinus className="icon" />
                            </div>
                            <div className="para">Date</div>
                        </div>

                        <span> 19th Aug 2023</span>
                        <span> 19th Aug 2023</span>
                    </div>
                    <div className="column col3">
                        <div className="row1">
                            <div className="icon-div">
                                <BiTimeFive className="icon" />
                            </div>
                            <div className="para">Time</div>
                        </div>

                        <span> 08:00 PM IST</span>
                        <span> 08:00 PM IST</span>
                    </div>
                    <div className="column col4">
                        <div className="row1">
                            <div className="icon-div">
                                <SlCalender className="icon" />
                            </div>
                            <div className="para">Time</div>
                        </div>

                        <span> Weekend (Sat-Sun)</span>
                        <span> Weekend (Sat-Sun)</span>
                    </div>

                    <div className="center center1">
                        <button className="btn">Apply Now</button>
                    </div>
                </div>
                <div className="center2">
                    <button className="btn">Apply Now</button>
                </div>
            </div>

            <div className="heading heading1">
                Frequently Asked <span>Questions</span>
            </div>
            <div className="questions">
                <div className="item">
                    <p className="para">How will I receive my certificate?</p>

                    <div className="icon-part">
                        <AiOutlineDown className="arrow" />
                    </div>
                </div>
                <div className="item">
                    <p className="para">
                        Will IITM Pravartak be helping with the career services?
                    </p>

                    <div className="icon-part">
                        <AiOutlineDown className="arrow" />
                    </div>
                </div>
                <div className="item">
                    <p className="para">
                        Why should I sign up for this Advanced Certification in
                        DevOps and Cloud Computing?
                    </p>

                    <div className="icon-part">
                        <AiOutlineDown className="arrow" />
                    </div>
                </div>
                <div className="item">
                    <p className="para">
                        What if I fail to attend one or more lectures?
                    </p>

                    <div className="icon-part">
                        <AiOutlineDown className="arrow" />
                    </div>
                </div>
                <div className="item">
                    <p className="para">
                        What will be the duration of the campus immersion?
                    </p>

                    <div className="icon-part">
                        <AiOutlineDown className="arrow" />
                    </div>
                </div>
                <div className="item">
                    <p className="para">
                        What exams will I be able to clear if I complete this
                        advanced certification training?
                    </p>

                    <div className="icon-part">
                        <AiOutlineDown className="arrow" />
                    </div>
                </div>
                <div className="item">
                    <p className="para">
                        What is the process of getting into the placement pool?
                    </p>

                    <div className="icon-part">
                        <AiOutlineDown className="arrow" />
                    </div>
                </div>
                <div className="item">
                    <p className="para">
                        What is covered in placement assistance?
                    </p>

                    <div className="icon-part">
                        <AiOutlineDown className="arrow" />
                    </div>
                </div>
            </div>

            <div className="feature-form">
                <div className="features-div">
                    <div className="header">
                        <h2 className="subheading">
                            What is included in this course?
                        </h2>
                    </div>

                    <div className="features">
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>Non-biased career guidance</span>
                        </div>
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>
                                Counselling based on your skills and preference
                            </span>
                        </div>
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>
                                No repetitive calls, only as per convenience
                            </span>
                        </div>
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>
                                Rigorous curriculum designed by industry experts
                            </span>
                        </div>
                        <div className="item">
                            <AiOutlineCheck className="icon" />
                            <span>Complete this program while you work</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h3 className="title">I’m Interested in This Program</h3>

                    <div className="form">
                        <input type="text" placeholder="Full Name*" />
                        <div className="number">
                            <button className="btn">
                                {" "}
                                +91 In <AiOutlineDown />{" "}
                            </button>
                            <input
                                type="number"
                                name=""
                                id=""
                                placeholder="Mobile Number*"
                            />
                        </div>
                        <input type="email" placeholder="Email*" />
                    </div>

                    <button className="btn">Download Curriculum</button>

                    <div className="box">
                        <input type="checkbox" />
                        <p>
                            By providing your contact details, you agree to our
                            <span> Terms of Use </span> &{" "}
                            <span>Privacy Policy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cohort;
