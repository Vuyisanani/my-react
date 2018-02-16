import React, { Component } from 'react';
import { Container, Dropdown, Divider  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'react-promise';
import { Jockey } from '../Jockey/Jockey';
import data from '../../team.json';

// Selecting 5 unique random jockeys
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
      resolve(data);
      reject(Error);
    }, 100)
})

// Race Component
export class Race extends Component { 
    constructor(props){
        super(props);
        this.state = {
            jockeys: [],
            nextRacers: [],
        }
        prom.then((value) => {
            this.setState({jockeys: value.map(({ id, login }) => ({ key: id, value: login, text: login }))})
        })
    }

    handleChange = (e, { key, value }) => {
        const x = data.map(({login, id})=>({key:id, value: login}))
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
                    <p>The last one forfeits Kurtosys drinks for 2 weeks! </p>
                    <Jockey avatar = { data[uniqueArray[0]].avatar_url } color="#FFD700" />
                    <Jockey avatar = { data[uniqueArray[1]].avatar_url } color="#B413EC" />
                    <Jockey avatar = { data[uniqueArray[2]].avatar_url } color="#FE9A76" />
                    <Jockey avatar = { data[uniqueArray[3]].avatar_url } color="#008080" />
                    <Jockey avatar = { data[uniqueArray[4]].avatar_url } color="#0E6EB8" />
                    
                </div>
            );
        } else  if(this.props.start) {
            return (
                <div className="App-field">
                    <p>The last one forfeits Kurtosys drinks for 2 weeks! </p>
                    <Jockey avatar = { data[y[0]].avatar_url } color="#FFD700" />
                    <Jockey avatar = { data[y[1]].avatar_url } color="#B413EC" />
                    <Jockey avatar = { data[y[2]].avatar_url } color="#FE9A76" />
                    <Jockey avatar = { data[y[3]].avatar_url } color="#008080" />
                    <Jockey avatar = { data[y[4]].avatar_url } color="#0E6EB8" />
                    
                </div>
            );
        }else{ 
            /** default display (note: Realized late that I misunderstood the basic requirements. Only 
            randomness is required. I implemented a non-required option for selection here) */

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
                                <p>Add jockeys to the race in the dropdown below (and click Start)</p>
                                <Dropdown 
                                placeholder='Select Jockey...' 
                                selection
                                search
                                value={value}
                                options={this.state.jockeys}
                                onChange={this.handleChange}
                                />
                            </Container>
                        </div>
                        
                        <div className="App-jockeys">
                            <p><strong>Jockeys selected to race (No more/less than 5)</strong></p>
                            <ul>{lineup}</ul>
                        </div>   
                    </div> 
                </div>  
            );
        }
    }
}