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

    constructor(props){
        super(props)
        this.state = {
            time: moment().tz(this.props.zone).format("dddd, MMMM Do YYYY, h:mm:ss a zz")
        }
    }

    render(){
        return (
            <div>
                <b>{this.props.zone}: </b> <span>{this.state.time}.</span>
            </div>
        )
    }
}