import React, { useEffect } from 'react'
import Title from '../Utils/Title'
import Map from './Map'
import Message from './Message'

export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <Title title={"İletişim"} titleurl="/Contact"/>
            <Map />
            <Message />
        </React.Fragment>
    )
}
