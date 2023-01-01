import React, { useEffect } from 'react'
import Title from '../Utils/Title'
import Popularproducts from "./Popularproducts"
import Benefits from "../Utils/Benefits"

export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <Title title={"Ürünler"} titleurl="/Products" />
            <Popularproducts />
            <Benefits />
        </React.Fragment>
    )
}
