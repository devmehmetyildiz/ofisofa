import React, { useEffect } from 'react'
import Title from '../Utils/Title'
import Detail from "./Detail"
import Benefits from "../Utils/Benefits"

export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <Title title={"Ürün Detayı"} titleurl="/Products" />
            <Detail />
            <Benefits />
        </React.Fragment>
    )
}
