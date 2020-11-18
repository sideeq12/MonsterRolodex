import React from "react";

let  style ={
    textAlign : "center"
}
function Card(props){
 
    return(
        <div style={style} >
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="Monster Rolodex"></img>
            <h2 style={{color : "white"}}> {props.monster.name}</h2>
            <p style={{color : "white"}}>{props.monster.email}</p>
            </div>
        
    )
}
 
export default Card;