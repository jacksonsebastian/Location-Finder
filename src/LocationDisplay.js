import React from "react";
import northPic from './images/north.png';
import southPic from './images/south.png';

const LocationConfig= {
    North: {
        text :'Hi you are currently in North region',
        Picture : northPic,
        
    
    },

    South: {
        text : 'Hi you are currently in South region',
        Picture : southPic
    }
}
const LocationDisplay = ({latitude}) => {
    var region = (latitude > 0 ) ? 'North' : 'South';
    const{text, Picture} = LocationConfig[region]
    // var Picture =(latitude > 0) ? northPic : southPic;
    return(
        <div>{text}
        <img src={Picture}/>
        
        </div>
    )
}
export default LocationDisplay;