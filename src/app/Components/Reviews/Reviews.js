import React from "react";
import "./Reviews.scss";
import { FaLinkedinIn } from "react-icons/fa6";
function Reviews() {
    return (
        <div className="review">
            <div className="review-container">
                <div className="heading">
                    <span>Reviews</span>
                </div>

                <div className="stars">
                    <span class="val">5 </span>
                    <span class="img"></span>
                    <p className="rate">( 3,145 )</p>
                </div>

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
                        well-systematized. Also, the trainers were experts in
                        their field and answered all my questions.
                    </p>
                </div>

                <h2 className="heading">Hear From Our Hiring Partners</h2>
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
                        The candidates from Intellipaat were very good. They are
                        better than experienced people from the same domain. The
                        learners had hands-on experience. The product managers
                        were very happy with the job-ready recruits.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
