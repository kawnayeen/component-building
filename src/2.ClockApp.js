import React, { Component } from 'react'
import * as moment from 'moment-timezone'

export default class ClockApp extends Component{
    render(){
        const newYork = moment().tz("America/New_York").format("dddd, MMMM Do YYYY, h:mm:ss a zz")
        const oslo = moment().tz("Europe/Oslo").format("dddd, MMMM Do YYYY, h:mm:ss a zz")
        const dhaka = moment().tz("Asia/Dhaka").format("dddd, MMMM Do YYYY, h:mm:ss a zz")

        return (
            <div>
                <h1>Your Ultimate Time App!</h1>
                <h2>It is {newYork}.</h2>
                <h2>It is {oslo}.</h2>
                <h2>It is {dhaka}.</h2>
            </div>
        )
    }
}

