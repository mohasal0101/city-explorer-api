import { Component } from "react";

export default class Weather extends Component{
    render(){
        return(
            <>
                <h1>{this.props.weather.date}</h1>
                <p>{this.props.weather.description}</p>
            </>
        )
    }
}