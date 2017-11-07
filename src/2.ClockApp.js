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


/**
In applications with many components, it’s very important to free up resources taken by the components
 when they are destroyed.
We want to set up a timer whenever the Clock is rendered to the DOM for the first time.
 This is called “mounting” in React.
We also want to clear that timer whenever the DOM produced by the Clock is removed.
 This is called “unmounting” in React.
 */

const Clock = class extends Component{

    constructor(props){
        super(props)
        this.state = {
            time: this.calculateTime()
        }
    }

    calculateTime(){
        return moment().tz(this.props.zone).format("dddd, MMMM Do YYYY, h:mm:ss a zz")
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            time: this.calculateTime()
        });
    }

    render(){
        return (
            <div>
                <b>{this.props.zone}: </b> <span>{this.state.time}.</span>
            </div>
        )
    }
}