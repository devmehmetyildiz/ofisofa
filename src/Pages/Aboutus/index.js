import React from 'react'
import Title from "../Utils/Title"
import About from "./About"
import Benefits from "../Utils/Benefits"
import Socialmedia from "../Utils/Socialmedia"

export default function index() {
    return (
        <React.Fragment>
            <Title title={"About"} titleurl="/Aboutus" />
            <About />
            <Socialmedia />
            <Benefits />
        </React.Fragment>
    )
}
