
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    changeBitrate = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12,
            },
          });
          
    }
    
    changeRes = () => {
        this.setState({
            settings: { // we need to isolate the nested key of 'video' by first accesing the parent of 'settings'
                ...this.state.settings,
                video: {
                    // ...this.state.settings.video,
                    resolution: '720p'
                }
            },
          });
          
    }
    
render(){
        return(
            //Returning multiple elements can be accomplished by wrapping them in a wrapper element. 
            // the div element here is a 'wrapper element'
            <div> 
            <button className='bitrate' onClick={this.changeBitrate}></button>
            <button className='resolution' onClick={this.changeRes}></button>
            </div>
        )
    }

}

