import React, { Component } from 'react';
import Progress from 'react-progressbar';

export class Arrays extends Component {

    constructor(props){
        super(props);
        this.state = {
          interval: Math.floor(Math.random() * 200),
          progress: 0,
        }
    }

    componentDidMount = () => {
        this.interval = setInterval(this.timer, this.state.interval);
    }

    timer = () => {
        this.setState({ progress: this.state.progress + 1 });
        
        (this.state.progress >= 99) ? this.setState({ progress: 100 }) : "" ;
    }
    break;
    render() {
        return (
            <div>
                <div className="App-lane">
                    <img src={ this.props.avatar } alt=""/>
                    <Progress className="App-progress" completed={this.state.progress} color={this.props.color}/>
                </div>
            </div>
        );
    }
}
