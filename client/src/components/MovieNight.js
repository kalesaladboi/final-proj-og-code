import React, {useState, useEffect} from 'react'
import { Player } from 'video-react';
import wasabi from "./assets/wasabi.mp4"
import vossiBop from "./assets/vossibop.mp4"
import sayless from "./assets/sayless.mp4"
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import axios from 'axios'
import Upload from './Upload';

class MovieNight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            video: vossiBop,
            option: [vossiBop,  sayless, wasabi]
        }

        this.handleChange.bind(this);
        this.myVideoRef = React.createRef();
    }
    handleChange = (e) => {
        console.log(e.value)
        this.setState({video: e.value})
        this.myVideoRef.current.video.load()
        this.forceUpdate()
    }
    render() {
        return (
            <div className="video-player">
                <Player ref={this.myVideoRef}>
                    <source src={this.state.video} />
                </Player>
                <Dropdown options={this.state.option} onChange={this.handleChange} placeholder="Select a Video" />
                <Upload/>
            </div>
        )
    }
}

export default MovieNight