import React from 'react';

//Adding users-avatars
export default function Card(props){
    
    return [
        <div style={{margin: '1em'}}>
            <img width="75"  src={props.whatever[20].avatar_url} alt='' />
            <div> {props.whatever[20].name}</div>
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                    {props.whatever[1].name}
                </div>
                <div>{props.company}</div>
            </div>
        </div> 
        
    ];
    
  };

 