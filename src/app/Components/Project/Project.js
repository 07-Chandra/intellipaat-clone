"use client";
import React, { useState } from "react";
import "./Project.scss";

import { RiUserSettingsLine } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

function Project() {
    const [level, setLevel] = useState(1);
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
                    <button
                        className={`btn ${level == 1 ? "start" : ""}`}
                        onClick={() => setLevel(1)}
                    >
                        Beginner
                    </button>
                    <button
                        className={`btn ${level == 2 ? "start" : ""}`}
                        onClick={() => setLevel(2)}
                    >
                        Intermediate
                    </button>
                    <button
                        className={`btn setting ${level == 3 ? "start" : ""}`}
                        onClick={() => setLevel(3)}
                    >
                        Advance
                    </button>
                </div>

                {level == 1 ? (
                    <div className="all-sponsor">
                        <div className="sponsor">
                            <h2 className="subheading">
                                Containerized Application Hosting with Jenkins
                                and Docker
                            </h2>
                            <p>
                                In this project, we establish multiple branches,
                                each triggering automatic code hosting from
                                GitHub via Git, Docker, and Jenkins upon any
                                changes. This integration ensures a streamlined
                                and efficient deployment process.
                            </p>
                        </div>
                        <div className="sponsor sponsor1">
                            <h2 className="subheading">
                                Create Custom Containers in Docker
                            </h2>
                            <p>
                                Build a custom container from the base Ubuntu
                                container. This hands-on project also requires
                                the learners to successfully create a
                                Dockerfile, pushing the container to Dockerhub,
                                and also create custom Docker images.
                            </p>
                        </div>
                        <div className="sponsor sponsor2">
                            <h2 className="subheading">
                                Deploy a Multi-tier Website using AWS EC2
                            </h2>
                            <p>
                                Enable fast scaling of a website using AWS,
                                while ensuring low or zero upfront cost. This
                                multi-tier website deploying project also
                                requires learners to successfully launch an EC2
                                instance to develop and deploy applications.
                            </p>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {level == 2 ? (
                    <div className="all-sponsor">
                        <div className="sponsor">
                            <h2 className="subheading">
                                Send Notifications to Patients using Push
                                Notifications
                            </h2>
                            <p>
                                The project is based on a dataset related to the
                                medical industry. It will allow you to design an
                                architecture to send notifications to patients
                                based on their doctors’ feedback. Using SNS will
                                increase reliability and resilience.
                            </p>
                        </div>
                        <div className="sponsor sponsor1">
                            <h2 className="subheading">
                                Setting Up a Secure Data Bunker Account
                            </h2>
                            <p>
                                Establish a secure data bunker: Create AWS
                                account via AWS Organizations. Configure
                                exclusive S3 bucket with KMS encryption.
                                Activate CloudTrail for logs. Ensure backups
                                within the bunker for data security.
                            </p>
                        </div>
                        <div className="sponsor sponsor2">
                            <h2 className="subheading">
                                WordPress Installation on CentOS8
                            </h2>
                            <p>
                                Create an account on WordPress as a part of the
                                project, using flush privileges to flush its
                                database. Also, learn to successfully install a
                                PHP module. Learners can get the package from
                                the default repositories of CentOS directly.
                            </p>
                        </div>
                    </div>
                ) : (
                    " "
                )}

                {level == 3 ? (
                    <div className="all-sponsor">
                        <div className="sponsor">
                            <h2 className="subheading">
                                Deploy an App on Kubernetes using CI/CD
                                Pipelines
                            </h2>
                            <p>
                                This application deployment project offers
                                practical learning to successfully create a
                                CI/CD pipeline integrated with Kubernetes. Also,
                                containerize the code pushed in Git, save the
                                Docker image, and push the image to Dockerhub.
                            </p>
                        </div>
                        <div className="sponsor sponsor1">
                            <h2 className="subheading">
                                Cloud-Native Application Hosting and Data
                                Management
                            </h2>
                            <p>
                                This project deploys a US-based solution sans
                                public IPs, featuring auto-scaling at 80% CPU,
                                fault-tolerant DB separation, AWS CodeDeploy
                                automation, and Kubernetes integration via
                                GitHub Dockerfile.
                            </p>
                        </div>
                        <div className="sponsor sponsor2">
                            <h2 className="subheading">
                                AWS Pipeline Management
                            </h2>
                            <p>
                                We will use CodeCommit, CodeBuild, CodeDeploy,
                                and CodePipeline to create a AWS pipeline to
                                ensure effective automation of infrastructure.
                            </p>
                        </div>
                    </div>
                ) : (
                    " "
                )}

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
