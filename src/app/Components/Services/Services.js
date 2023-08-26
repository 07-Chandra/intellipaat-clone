"use client";

import React, { useState } from "react";
import "./Services.scss";
import { VscBellDot } from "react-icons/vsc";
import { BsCalendar2Event } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { HiUserGroup } from "react-icons/hi";
function Services() {
    const [state, setState] = useState(1);
    const [imageCount, setImageCount] = useState(1);


    console.log( "value is : " , imageCount);

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
                            <button
                                className={`btn1 ${state == 1 ? "start" : ""}`}
                                onClick={() => setState(1)}
                            >
                                Job Assitance
                            </button>
                            <button
                                className={`btn1 ${state == 2 ? "start" : ""}`}
                                onClick={() => setState(2)}
                            >
                                Interview Preparation
                            </button>
                            <button
                                className={`btn1 ${state == 3 ? "start" : ""}`}
                                onClick={() => setState(3)}
                            >
                                Profile Building
                            </button>
                        </div>

                        {state == 1 ? (
                            <>
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
                                                After 100% of the course
                                                completions
                                            </p>
                                        </div>
                                    </div>

                                    <p className="desc">
                                        Placement opportunities are provided
                                        once the learner is moved to the
                                        placement pool. Get noticed by our 400+
                                        hiring partners.
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
                                                Exclusive access to Intellipaat
                                                Job portal
                                            </h2>
                                            <p className="footer">
                                                After 80% of the course
                                                completion
                                            </p>
                                        </div>
                                    </div>

                                    <p className="desc">
                                        Exclusive access to our dedicated job
                                        portal and apply for jobs. More than 400
                                        hiring partners’ including top start-ups
                                        and product companies hiring our
                                        learners. Mentored support on job search
                                        and relevant jobs for your career
                                        growth.
                                    </p>
                                </div>
                            </>
                        ) : (
                            " "
                        )}

                        {state == 2 ? (
                            <>
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
                                                Mock Interview Preparation
                                            </h2>
                                            <p className="footer">
                                                After 80% of the course
                                                completions
                                            </p>
                                        </div>
                                    </div>

                                    <p className="desc">
                                        Students will go through a number of
                                        mock interviews conducted by technical
                                        experts who will then offer tips and
                                        constructive feedback for reference and
                                        improvement.
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
                                                1 on 1 Career Mentoring Sessions
                                            </h2>
                                            <p className="footer">
                                                After 90% of the course
                                                completion
                                            </p>
                                        </div>
                                    </div>

                                    <p className="desc">
                                        Attend one-on-one sessions with career
                                        mentors on how to develop the required
                                        skills and attitude to secure a dream
                                        job based on a learner’s educational
                                        background, past experience, and future
                                        career aspirations.
                                    </p>
                                </div>
                            </>
                        ) : (
                            " "
                        )}

                        {state == 3 ? (
                            <>
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
                                                Career Oriented Sessions
                                            </h2>
                                            <p className="footer">
                                                Throughout the course
                                            </p>
                                        </div>
                                    </div>

                                    <p className="desc">
                                        Over 10+ live interactive sessions with
                                        an industry expert to gain knowledge and
                                        experience on how to build skills that
                                        are expected by hiring managers. These
                                        will be guided sessions and that will
                                        help you stay on track with your
                                        up-skilling objective.
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
                                                Resume & LinkedIn Profile
                                                Building
                                            </h2>
                                            <p className="footer">
                                                After 70% of course completion
                                            </p>
                                        </div>
                                    </div>

                                    <p className="desc">
                                        Get assistance in creating a world-class
                                        resume & Linkedin Profile from our
                                        career services team and learn how to
                                        grab the attention of the hiring manager
                                        at the profile shortlisting stage
                                    </p>
                                </div>
                            </>
                        ) : (
                            " "
                        )}
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
                        {imageCount == 1 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_1.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                        {imageCount == 2 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_2.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                        {imageCount == 3 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_3.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                        {imageCount == 4 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_4.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                        {imageCount == 5 ? (
                            <img
                                src="https://intellipaat.com/course-image/2021/05/peer_5.png"
                                alt=""
                            />
                        ) : (
                            " "
                        )}
                    </div>

                    <div className="pros">
                        <div
                            className={`items ${
                                imageCount == 1 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(1)}
                        >
                            <div className="icon-wrapper">
                                <VscBellDot className="icon" />
                            </div>

                            <span>Class Notifications</span>
                        </div>

                        <div
                            className={`items ${
                                imageCount == 2 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(2)}
                        >
                            <div className="icon-wrapper">
                                <BsCalendar2Event className="icon" />
                            </div>

                            <span> Hackathons</span>
                        </div>

                        <div
                            className={`items ${
                                imageCount == 3 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(3)}
                        >
                            <div className="icon-wrapper">
                                <MdMiscellaneousServices className="icon" />
                            </div>

                            <span>Career Services</span>
                        </div>

                        <div
                            className={`items ${
                                imageCount == 4 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(4)}
                        >
                            <div className="icon-wrapper">
                                <TfiAnnouncement className="icon" />
                            </div>

                            <span>Major Annoncement</span>
                        </div>

                        <div
                            className={`items ${
                                imageCount == 5 ? "start" : ""
                            }`}
                            onClick={() => setImageCount(5)}
                        >
                            <div className="icon-wrapper">
                                <HiUserGroup className="icon" />
                            </div>

                            <span> Collaborative Learning</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
