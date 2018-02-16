import React, { Component } from 'react';
import { Container, Dropdown, Divider  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'react-promise';
import { Arrays } from '../Arrays/Arrays';
import dataJson from '../../team.json';

const uniqueArray = [];
const y = [];
while(uniqueArray.length < 5){
    const unique = Math.floor(Math.random() * 30) + 1;
    if(uniqueArray.indexOf(unique) > -1) {
        continue;
    }
    uniqueArray.push(unique);
}

const prom = new Promise( (resolve, reject) =>{
    setTimeout(() =>{
      resolve(dataJson);
      reject(Error);
    }, 100)
})

// Race Component
export class Race extends Component { 
    constructor(props){
        super(props);
        this.state = {
            Arrays: [],
            nextRacers: [],
        }
        prom.then((value) => {
            this.setState({Arrays: value.map(({ id, login }) => ({ key: id, value: login, text: login }))})
        })
    }

    handleChange = (e, { key, value }) => {
        const x = dataJson.map(({login, id})=>({key:id, value: login}))
        const index = x.findIndex(m => m.value === value); 
        y.push(index);
       
        this.setState({ key, value });
        this.state.nextRacers.push({value});
    }

    render() {
        const { value }  = this.state;

        if(this.props.startRandom) { // random selection
            return (
                <div className="App-field">
                    <Arrays avatar = { dataJson[uniqueArray[0]].avatar_url } color="#F3D700" />
                    <Arrays avatar = { dataJson[uniqueArray[1]].avatar_url } color="#B513EC" />
                    <Arrays avatar = { dataJson[uniqueArray[2]].avatar_url } color="#FE8A76" />
                    <Arrays avatar = { dataJson[uniqueArray[3]].avatar_url } color="#008280" />
                    <Arrays avatar = { dataJson[uniqueArray[4]].avatar_url } color="#0E5EB8" />
                    
                </div>
            );
        } else  if(this.props.start) {
            return (
                <div className="App-field">
                    <Arrays avatar = { dataJson[y[0]].avatar_url } color="#FFD700" />
                    <Arrays avatar = { dataJson[y[1]].avatar_url } color="#B413EC" />
                    <Arrays avatar = { dataJson[y[2]].avatar_url } color="#FE9A76" />
                    <Arrays avatar = { dataJson[y[3]].avatar_url } color="#008080" />
                    <Arrays avatar = { dataJson[y[4]].avatar_url } color="#0E6EB8" />
                    
                </div>
            );
        }else{ 
        
            const r = this.state.nextRacers;
            const lineup = r.map((list) => 
                <li className="Race-racers">
                    <div className="ui list">
                        <div className="item">
                        <div className="content">
                            {list.value}
                        </div>
                        </div>
                    </div>
                </li>
            );
            return (
                <div>
                    <Divider />
                    <div className="App-container">
                        <div className="App-dropdown">
                            <Container>
                                <p>Select to Add</p>
                                <Dropdown 
                                placeholder='Select Here' 
                                selection
                                search
                                value={value}
                                options={this.state.jockeys}
                                onChange={this.handleChange}
                                />
                            </Container>
                        </div>
                        
                        <div className="App-jockeys">
                            <ul>{lineup}</ul>
                        </div>   
                    </div> 
                </div>  
            );
        }
    }
}