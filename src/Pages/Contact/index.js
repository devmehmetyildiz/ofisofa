import React from 'react'
import Title from '../Utils/Title'
import Map from './Map'
import Message from './Message'

export default function index() {
    return (
        <React.Fragment>
            <Title title={"Contact"} titleurl="/Contact"/>
            <Map />
            <Message />
        </React.Fragment>
    )
}
