import React from "react";
import "./Reviews.scss";
import { FaLinkedinIn } from "react-icons/fa6";
function Reviews() {
    return (
        <div className="review">
            <div className="review-container">
                <div className="header">
                    <div className="heading">
                        <span>Reviews</span>
                    </div>

                    <div className="stars">
                        <span class="val">5 </span>
                        <span class="img"></span>
                        <p className="rate">( 3,145 )</p>
                    </div>
                </div>

                <div className="all-review-list">
                    <div className="review-list">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2018/09/Anil-sharma.png"
                                alt="review"
                            />
                        </div>
                        <div className="name">
                            <p className="para">Anil Sharma</p>
                            <div className="icon-div">
                                <FaLinkedinIn className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="review-list list1">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2018/09/Masud-chowdhury.png"
                                alt="review"
                            />
                        </div>
                        <div className="name">
                            <p className="para">Masud Chowdhury</p>
                            <div className="icon-div">
                                <FaLinkedinIn className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="review-list list2">
                        <div className="image-wrapper">
                            <img
                                src="https://intellipaat.com/course-image/2018/09/Faith-Okpedo.png"
                                alt="review"
                            />
                        </div>
                        <div className="name">
                            <p className="para">Faith Okpedo</p>
                            <div className="icon-div">
                                <FaLinkedinIn className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="all-user">
                    <div className="user">
                        <div className="info-div">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2020/05/5e379f3f76565-bpfull.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <p className="para">Nick Vlachos</p>
                                <p>Cloud Technical Specialist</p>
                                <span className="img"></span>
                            </div>
                        </div>
                        <p>
                            Well explained study material. I liked this cloud
                            architect course very much and the content was
                            well-systematized. Also, the trainers were experts
                            in their field and answered all my questions.
                        </p>
                    </div>
                    <div className="user user1">
                        <div className="info-div">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2020/05/5e130a4ac2001-bpfull.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <p className="para">Anji Pulusu</p>
                                <p>
                                    Software Developer at System Soft
                                    Technologies
                                </p>
                                <span className="img"></span>
                            </div>
                        </div>
                        <p>
                            Intellipaat delivered a great learning experience
                            which was more than expected. This cloud architect
                            certification was worth it and I am totally
                            satisfied with the content and the way the trainers
                            taught in the sessions.
                        </p>
                    </div>

                    <div className="user user2">
                        <div className="info-div">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2020/05/Rafeal.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <p className="para">Rafeal Sanchez</p>
                                <p>Technology Engineer</p>
                                <span className="img"></span>
                            </div>
                        </div>
                        <p>
                            The best part I liked about this course is the
                            trainers. They are interactive and highly
                            intelligent and handle the course properly and
                            clarify all my doubts. They helped me learn the
                            concepts from scratch.
                        </p>
                    </div>
                </div>

                <h2 className="heading">Hear From Our Hiring Partners</h2>

                <div className="hiring-partners">
                    <div className="partners">
                        <div className="info-div">
                            <div className="image-wrapper">
                                <img src="https://intellipaat.com/course-image/2022/06/Anbareen.jpg" />
                            </div>
                            <div className="info">
                                <p className="para">Anbareen</p>
                                <p>Lead Recruiter at Accenture, India</p>
                                <span className="img"></span>
                            </div>

                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/wp-content/themes/intellipaat/images/hire-jobs/ply-icon.svg?dev=werg7"
                                    alt=""
                                />
                            </div>
                        </div>
                        <p>
                            The candidates from Intellipaat were very good. They
                            are better than experienced people from the same
                            domain. The learners had hands-on experience. The
                            product managers were very happy with the job-ready
                            recruits.
                        </p>
                    </div>
                    <div className="partners partners1">
                        <div className="info-div">
                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/course-image/2022/06/Mani.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <p className="para">Mani</p>
                                <p>HR at Genex Corporate Services, India</p>
                                <span className="img"></span>
                            </div>

                            <div className="image-wrapper">
                                <img
                                    src="https://intellipaat.com/wp-content/themes/intellipaat/images/hire-jobs/ply-icon.svg?dev=werg7"
                                    alt=""
                                />
                            </div>
                        </div>
                        <p>
                            Even freshers from Intellipaat are technically
                            strong and have hands-on experience. During the
                            interview, they were able to answer everything that
                            was asked. Certification plays a crucial role to
                            move forward any resume.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
