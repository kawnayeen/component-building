import React, { Component } from 'react'
import * as moment from 'moment-timezone'

export default class ClockApp extends Component{
    render(){
        return (
            <div>
                <h1>Your Ultimate Time App!</h1>
                <Clock zone="America/New_York" />
                <Clock zone="Europe/Oslo" />
                <Clock zone="Asia/Dhaka" />
            </div>
        )
    }
}

const Clock = class extends Component{
    render(){
        const timeZone = this.props.zone
        const time = moment().tz(timeZone).format("dddd, MMMM Do YYYY, h:mm:ss a zz")

        return (
            <div>
                <b>{timeZone}: </b> <span>{time}.</span>
            </div>
        )
    }
}