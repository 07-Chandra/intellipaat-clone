import React from "react";
import "./Project.scss";

import { RiUserSettingsLine } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

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
                            <HiMiniUserGroup className="icon" />
                        </div>
                        <p className="para">Designed by Industry Experts</p>
                    </div>

                    <div className="items">
                        <div className="icon-div">
                            <IoMdSettings className="icon" />
                        </div>
                        <p className="para">Get Real-world Experience</p>
                    </div>
                </div>

                <div className="btn-div">
                    <button className="start btn">Beginner</button>
                    <button className="btn">Intermediate</button>
                    <button className="btn setting">Advance</button>
                </div>
                <div className="all-sponsor">
                    <div className="sponsor">
                        <h2 className="subheading">
                            Containerized Application Hosting with Jenkins and
                            Docker
                        </h2>
                        <p>
                            In this project, we establish multiple branches,
                            each triggering automatic code hosting from GitHub
                            via Git, Docker, and Jenkins upon any changes. This
                            integration ensures a streamlined and efficient
                            deployment process.
                        </p>
                    </div>
                    <div className="sponsor sponsor1">
                        <h2 className="subheading">
                            Create Custom Containers in Docker
                        </h2>
                        <p>
                            Build a custom container from the base Ubuntu
                            container. This hands-on project also requires the
                            learners to successfully create a Dockerfile,
                            pushing the container to Dockerhub, and also create
                            custom Docker images.
                        </p>
                    </div>
                    <div className="sponsor sponsor2">
                        <h2 className="subheading">
                            Deploy a Multi-tier Website using AWS EC2
                        </h2>
                        <p>
                            Enable fast scaling of a website using AWS, while
                            ensuring low or zero upfront cost. This multi-tier
                            website deploying project also requires learners to
                            successfully launch an EC2 instance to develop and
                            deploy applications.
                        </p>
                    </div>
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
