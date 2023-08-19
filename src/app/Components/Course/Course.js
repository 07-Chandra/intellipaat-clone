import React from "react";
import "./Course.scss";
import { AiOutlineCheck } from "react-icons/ai";

function Course() {
    return (
        <div className="course">
            <div className="course-container">
                <div className="header">
                    <h2 className="heading">
                        Who Can <span>Apply for the Course?</span>
                    </h2>
                </div>

                <div className="feature-girl">
                    <div className="features card">
                        <div className="item">
                            <div className="icon-div">
                                <AiOutlineCheck className="icon" />
                            </div>
                            <p>
                                Individuals with a bachelor’s degree and a keen
                                interest to learn DevOps and cloud computing
                            </p>
                        </div>
                        <div className="item">
                            <div className="icon-div">
                                <AiOutlineCheck className="icon" />
                            </div>
                            <p>
                                IT professionals looking for a career transition
                                to DevOps and cloud computing
                            </p>
                        </div>
                        <div className="item">
                            <div className="icon-div">
                                <AiOutlineCheck className="icon" />
                            </div>
                            <p>
                                Professionals aiming to move ahead in their
                                careers
                            </p>
                        </div>
                        <div className="item">
                            <div className="icon-div">
                                <AiOutlineCheck className="icon" />
                            </div>
                            <p>DevOps professionals</p>
                        </div>
                        <div className="item">
                            <div className="icon-div">
                                <AiOutlineCheck className="icon" />
                            </div>
                            <p>Cloud computing professionals</p>
                        </div>
                        <div className="item">
                            <div className="icon-div">
                                <AiOutlineCheck className="icon" />
                            </div>
                            <p>
                                Freshers who want to build a career in DevOps
                                and Cloud Computing
                            </p>
                        </div>
                    </div>
                    <div className="girl">
                        <div className="image-size">
                            <img
                                src="https://intellipaat.com/course-image/2020/08/who-can-apply.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="header">
                    <h2 className="heading">
                        What roles can a{" "}
                        <span>
                            DevOps and cloud computing professional play?
                        </span>
                    </h2>
                </div>

                <div className="contain-all">
                    <div className="architect card">
                        <div className="cart">
                            <h3>DevOps Architect</h3>
                            <p>
                                They are experts in using VPC, Lambda, Route 53,
                                AWS ECS, Elastic Load Balancing, and other tools
                                and technologies of AWS.
                            </p>
                        </div>
                        <div className="cart">
                            <h3> Cloud Architect</h3>
                            <p>
                                They design and build documents for setting the
                                best standards and practices for cloud adoption.
                                technologies of AWS.
                            </p>
                        </div>
                        <div className="cart">
                            <h3> AWS DevOps Engineer</h3>
                            <p>
                                They plan project deliverables and ensure the
                                quality of products and their respective
                                criteria as per the user requirements.
                            </p>
                        </div>
                        <div className="cart">
                            <h3> Senior DevOps Engineer</h3>
                            <p>
                                They are responsible for recording aspects of
                                IaC using a wide range of tools like AWS CDK,
                                Terraform, and CloudFormation.
                            </p>
                        </div>
                        <div className="cart">
                            <h3> Release Manager</h3>
                            <p>
                                They are in charge of the overall development
                                pipeline, overall release schedules, individual
                                releases, and coordination with different teams.
                            </p>
                        </div>
                        <div className="cart">
                            <h3> Product Manager</h3>
                            <p>
                                They are from the operations side of DevOps and
                                are an expert in organization and management.
                            </p>
                        </div>
                    </div>

                    <div className="skill-div">
                        <h3 className="subheading">Skills to Master</h3>

                        <div className="skill-part">
                            <div className="skill1">
                                <div className="item">
                                    <p>
                                        <span>AWS</span>
                                    </p>
                                </div>
                                <div className="item">
                                    <span>Elastic Compute</span>
                                </div>
                                <div className="item">
                                    <span>
                                        Load Balancing, Autoscaling and DNS
                                    </span>
                                </div>
                            </div>
                            <div className="skill1 skill2">
                                <div className="item">
                                    <span>VPC</span>
                                </div>
                                <div className="item">
                                    <span>CloudFormation</span>
                                </div>
                                <div className="item">
                                    <span>
                                        Access Management and Monitoring
                                        Services
                                    </span>
                                </div>
                            </div>
                            <div className="skill1 all">
                                <div className="item">
                                    <p>
                                        <span>AWS Migration</span>
                                    </p>
                                </div>
                                <div className="item">
                                    <span>Version Control with Git</span>
                                </div>
                                <div className="item">
                                    <span>Continuous Testing</span>
                                </div>
                                <div className="item">
                                    <p>
                                        <span>Continuous Integration</span>
                                    </p>
                                </div>
                                <div className="item">
                                    <span>Continuous Monitoring using ELK</span>
                                </div>
                                <div className="item">
                                    <span>Data Virtualization</span>
                                </div>
                                <div className="item">
                                    <p>
                                        <span>Devops on AWS</span>
                                    </p>
                                </div>
                                <div className="item">
                                    <span>DevSecOps</span>
                                </div>
                                <div className="item">
                                    <span>Application Deployment</span>
                                </div>
                            </div>
                        </div>

                        <p className="view">
                            {" "}
                            <span> View More </span>
                        </p>
                    </div>

                    <div className="tools-div">
                        <p className="subheading">Tools to Master</p>
                        <div className="tool">
                            <div className="show1">
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2017/09/AWS.jpg"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2019/01/kubernetes.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/docker.png"
                                        alt="aws"
                                    />
                                </div>
                            </div>

                            <div className="show1 show2">
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/ansible.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2021/04/Terraform.png"
                                        alt="aws"
                                    />
                                </div>
                            </div>
                            <div className="show1 show3">
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/puppet.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/chef.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2017/08/AWSLambda.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/selenium.png"
                                        alt="aws"
                                    />
                                </div>
                                <div className="image-wrapper">
                                    <img
                                        src="https://intellipaat.com/course-image/2018/04/jenkins.png"
                                        alt="aws"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="view">View More</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
