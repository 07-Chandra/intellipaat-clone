"use client";

import { useEffect, useState } from "react";
import Admission from "./Components/Admission/Admission";
import Cohort from "./Components/Cohort/Cohort";
import Course from "./Components/Course/Course";
import Curriculum from "./Components/Curriculum/Curriculum";
import Hero from "./Components/Hero/Hero";
import Mentors from "./Components/Mentors/Mentors";
import Program from "./Components/Program/Program";
import Project from "./Components/Project/Project";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import Transition from "./Components/Transition/Transition";
import Contact from "./SubComponents/Contact/Contact";
import { axiosClient } from "./Utils/axiosClient";
import axios from "axios";

function Home() {
    const [courseData, setCourseData] = useState(null);
    const [programData, setProgramData] = useState(null);

    async function fetchData() {
        try {
            const response = await axiosClient.get(
                "/cloud-computings?populate[Program][populate]=*&populate[Course][populate]=*?&populate[mentors][populate]=*"
            );
            const data = await response?.data?.data;
            await setCourseData(data);

            const program = await axiosClient.get(
                // "/cloud-computings?populate[Program][populate]=*&populate[Course][populate]=*?&populate[mentors][populate]=*&populate[project][populate]=advancement.img,img?&populate[review][populate]=reviewTop.profileImg,reviewCenter.profileImg,reviewBottom.profileImg,img,reviewTop.log"
                "/cloud-computings?populate[Program][populate]=*&populate[Course][populate]=*?&populate[mentors][populate]=*&populate[project][populate]=advancement.img,img?&populate[review][populate]=reviewTop.profileImg,reviewCenter.profileImg,reviewBottom.profileImg,img,reviewTop.log,reviewBottom.icon"
            );

            const programRes = await program?.data?.data;
            await setProgramData(programRes);
        } catch (error) {
            console.error("Error fetching course data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log("programData 2", programData);
    }, [courseData, programData]);

    return (
        <main>
            {/* <Hero props={courseData} /> */}
            {/* <Program program = {programData}/> */}
            {/* <Transition  /> */}
            {/* <Course course = {(programData) ? programData[0]?.attributes.Course : ""} /> */}
            {/* <Mentors
                mentors={(programData) ? programData[0]?.attributes.mentors : ""}
            /> */}
            {/* <Curriculum /> */}
            {/* <Project
                project={programData ? programData[0]?.attributes.project : ""}
            /> */}
            <Reviews
                review={programData ? programData[0]?.attributes.review : ""}
            />
            {/* <Services /> */}
            {/* <Admission />  */}
        </main>
    );
}

export default Home;
