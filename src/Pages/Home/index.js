import React from 'react'
import Portfolio from "./Portfolio"
import Popularproducts from "./Popularproducts"
import About from "./About"
import Likedproducts from "./Likedproducts"
import Socialmedia from "../Utils/Socialmedia"
import Topproducts from "./Topproducts"
import Benefits from "../Utils/Benefits"

export default function index() {
    return (
        <React.Fragment>
            <Portfolio />
            <Popularproducts />
            <About />
            <Likedproducts />
            <Socialmedia />
            <Topproducts />
            <Benefits />
        </React.Fragment>
    )
}
