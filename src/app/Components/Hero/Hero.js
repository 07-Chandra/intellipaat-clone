import React from "react";
import "./Hero.scss";
import Contact from "@/app/SubComponents/Contact/Contact";

function Hero({ props }) {
    // console.log("data is ", props);

    const data = props ? props[0].attributes : " ";

    // console.log("hero data" , );
    const courseDetail = props ? props[0].attributes.courseDetail : "";
    const companyRatings = props ? props[0].attributes.ratings : "";



    const dataArray = [];

    if (props) {
        for (const key in companyRatings) {
            if (key !== "id") {
                const ratingData = companyRatings[key].data.attributes;
                dataArray.push(ratingData);
            }
        }
    }

    const score = props ? props[0].attributes.score : "";

    if (props) {
        console.log(props[0]?.id);
    }

    return (
        <div className="hero">
            <div className="cover">
                <div className="contact-form">
                    <Contact />
                </div>

                {/* <> */}
                {props?.map((course, id) => (
                    <div className="hero-course" key={id}>
                        <h1 className="heading">
                            {course.attributes.courseName}
                        </h1>
                        <div className="location">
                            {course.attributes.courseBy}
                        </div>
                        <p className="about">{course.attributes.aboutCourse}</p>
                        <div className="button">
                            <button className="btn apply">Apply Now</button>
                            <button className="btn download">
                                Download Broachure
                            </button>
                        </div>
                        <div className="seats">
                            <p className="seat">{course.attributes.seat}</p>
                            <div className="rank">
                                Ranked #1 Cloud Program by{" "}
                                <a href="#">{course.attributes.country}</a>
                            </div>
                        </div>
                        {/* // console.log(course.attributes.courseDetail) */}

                        <ul></ul>
                    </div>
                ))}
            </div>
            <div className="advertise">
                <div className="about-course">
                    {Object.entries(courseDetail).map(([key, value]) => (
                        <div className="feature" key={key}>
                            <p>{key}</p>
                            <h3>{value}</h3>
                        </div>
                    ))}
                </div>

                <div className="ratings">
                    {dataArray?.map((rating, id) => (
                        <div className="border" key={id}>
                            <div className="image-wrapper">
                                <img src={rating.url} alt="rating1" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="success">
                    <div className="top">
                        <p className="para">{data?.score}</p>
                    </div>
                    <div className="bottom">
                        <div className="image-wrapper">
                            <img
                                src={data?.scoreImage?.data?.attributes.url}
                                alt="sponsor"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;
