import React from "react";
import "./Project.scss";

import { GrUserSettings } from "react-icons/gr";
import { RiUserSettingsLine } from "react-icons/ri";
function Project() {
    return (
        <div className="project">
            <div className="project-container">
                <div className="header">
                    <p className="heading">
                        <span>Projects</span>
                    </p>
                    <p>
                        One month of project work will be a part of your
                        certification to consolidate your learning in DevOps and
                        cloud computing. These projects will ensure that you
                        have industry-relevant experience in the field.
                    </p>
                </div>
                <div className="work">
                    <div className="items">
                        <div className="icon-div">
                            <RiUserSettingsLine className="icon" />
                        </div>
                        <p className="para">Practice 20+ Essential Tools</p>
                    </div>

                    <div className="items">
                        <div className="icon-div">
                            <RiUserSettingsLine className="icon" />
                        </div>
                        <p className="para">Designed by Industry Experts</p>
                    </div>

                    <div className="items">
                        <div className="icon-div">
                            <RiUserSettingsLine className="icon" />
                        </div>
                        <p className="para">Get Real-world Experience</p>
                    </div>
                </div>

                <div className="btn-div">
                    <button className="start btn">Beginner</button>
                    <button className="btn">Intermediate</button>
                    <button className="btn">Advance</button>
                </div>

                <div className="sponsor">
                    <h2 className="subheading">
                        Deploy an App on Kubernetes using CI/CD Pipelines
                    </h2>
                    <p>
                        This application deployment project offers practical
                        learning to successfully create a CI/CD pipeline
                        integrated with Kubernetes. Also, containerize the code
                        pushed in Git, save the Docker image, and push the image
                        to Dockerhub.
                    </p>
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

export default Project;
