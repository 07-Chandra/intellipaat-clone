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
                "/courses?populate[scoreImage]=*&populate[ratings][populate] =*"
            );
            const data = await response?.data?.data;
            await setCourseData(data);

            const program = await axiosClient.get(
                "/cloud-computings?populate[Program][populate]=*"
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
            <Hero props={courseData} />
            {/* <Program program = {programData}/> */}
            {/* <Transition />
            <Course />
            <Mentors />
            <Curriculum />
            <Project />
            <Reviews />
            <Services />
            <Admission /> */}
        </main>
    );
}

export default Home;
