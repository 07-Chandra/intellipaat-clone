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

import SSRPage from "./SubComponents/SSRPage";
import { axiosClient } from "./Utils/axiosClient";
import axios from "axios";

function Home() {
    const [courseData, setCourseData] = useState(null);

    async function fetchData() {
        try {
            const response = await axiosClient.get("/courses");
            const data = response?.data;
            console.log("api call", data);
        } catch (error) {
            console.error("Error fetching course data:", error);
        }
    }

    useEffect(() => {
        fetchData();
        console.log("courseData is ", courseData);
    }, []);

    useEffect(() => {
        console.log("coureData 2", courseData);
    }, [courseData]);

    return (
        // <main>
        //     <Hero />
        //     {/* <Program />
        //     <Transition />
        //     <Course />
        //     <Mentors />
        //     <Curriculum />
        //     <Project />
        //     <Reviews />
        //     <Services />
        //     <Admission />
        // </main>

        <div className="head">
            <Cohort />
        </div>
    );
}

export default Home;
