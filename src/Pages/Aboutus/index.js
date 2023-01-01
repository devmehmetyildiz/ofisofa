import React, { useEffect } from 'react'
import Title from "../Utils/Title"
import About from "./About"
import Benefits from "../Utils/Benefits"
import Socialmedia from "../Utils/Socialmedia"

export default function Index() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <Title title={"Hakkımızda"} titleurl="/Aboutus" />
            <About />
            <Socialmedia />
            <Benefits />
        </React.Fragment>
    )
}
