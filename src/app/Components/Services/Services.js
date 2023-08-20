import React from "react";
import "./Services.scss";
import { VscBellDot } from "react-icons/vsc";
import { BsCalendar2Event } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { HiUserGroup } from "react-icons/hi";
function Services() {
    return (
        <div className="service">
            <div className="service-container">
                <h2 className="heading">
                    Career Services By <span>Intellipaat</span>
                </h2>

                <div className="main-part">
                    <div className="career">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2020/08/career-services-1.png"
                                alt="service"
                            />
                        </div>
                    </div>

                    <div className="right-part">
                        <div className="btn-wrapper">
                            <button className="btn1 start">
                                Job Assitance
                            </button>
                            <button className="btn1">
                                Interview Preparation
                            </button>
                            <button className="btn1">Profile Building</button>
                        </div>

                        <div className="placement">
                            <div className="item">
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2020/08/guaranteed.png"
                                        alt=""
                                    />
                                </div>
                                <div className="about">
                                    <h2 className="subheading">
                                        Placement Assistance
                                    </h2>
                                    <p className="footer">
                                        After 100% of the course completions
                                    </p>
                                </div>
                            </div>

                            <p className="desc">
                                Placement opportunities are provided once the
                                learner is moved to the placement pool. Get
                                noticed by our 400+ hiring partners.
                            </p>
                        </div>

                        <div className="placement">
                            <div className="item">
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2020/08/job_portal.png"
                                        alt=""
                                    />
                                </div>
                                <div className="about">
                                    <h2 className="subheading">
                                        Exclusive access to Intellipaat Job
                                        portal
                                    </h2>
                                    <p className="footer">
                                        After 80% of the course completion
                                    </p>
                                </div>
                            </div>

                            <p className="desc">
                                Exclusive access to our dedicated job portal and
                                apply for jobs. More than 400 hiring partners’
                                including top start-ups and product companies
                                hiring our learners. Mentored support on job
                                search and relevant jobs for your career growth.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="heading">
                    Our <span>Alumni Works At</span>{" "}
                </h2>
                <div className="alumni">
                    <div className="image-div">
                        <img
                            src="https://intellipaat.com/wp-content/themes/intellipaat/images/Hiring-Partners.png"
                            alt=""
                        />
                    </div>
                </div>

                <h2 className="heading">
                    Peer <span>Learning</span>
                </h2>
                <p>
                    {" "}
                    Via <span> Intellipaat PeerChat</span>, you can interact
                    with your peers across all classes and batches and even our
                    alumni. Collaborate on projects, share job referrals &
                    interview experiences, compete with the best, make new
                    friends – the possibilities are endless and our community
                    has something for everyone!
                </p>
                <div className="peer-learning">
                    <div className="image-wrapper">
                        <img
                            src="https://intellipaat.com/course-image/2021/05/peer_1.png"
                            alt=""
                        />
                    </div>

                    <div className="pros">
                        <div className="items start">
                            <div className="icon-wrapper">
                                <VscBellDot className="icon" />
                            </div>

                            <span>Class Notifications</span>
                        </div>
                        <div className="items">
                            <div className="icon-wrapper">
                                <BsCalendar2Event className="icon" />
                            </div>

                            <span>Class Notifications</span>
                        </div>
                        <div className="items">
                            <div className="icon-wrapper">
                                <MdMiscellaneousServices className="icon" />
                            </div>

                            <span>Class Notifications</span>
                        </div>
                        <div className="items">
                            <div className="icon-wrapper">
                                <TfiAnnouncement className="icon" />
                            </div>

                            <span>Class Notifications</span>
                        </div>
                        <div className="items">
                            <div className="icon-wrapper">
                                <HiUserGroup className="icon" />
                            </div>

                            <span>Class Notifications</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
