import React from 'react'
import Title from '../Utils/Title'
import Popularproducts from "./Popularproducts"
import Benefits from "../Utils/Benefits"

export default function index() {
    return (
        <React.Fragment>
            <Title title={"Ürünler"} titleurl="/Products" />
            <Popularproducts />
            <Benefits />
        </React.Fragment>
    )
}
