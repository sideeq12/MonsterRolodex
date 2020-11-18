import React from "react";
import Card from "./card"

let first = {
    display : "flex",
    flexDirection : "row",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center"
}

let style ={
    backgroundColor : "#ec5858",
     padding : "20px",
     margin : "20px"
}

export const CardList = (props) =>{
    
    return(
         <div style={first} >
         {props.monsters.map(monster =>(
            <div style={style}  key={monster.id}>
             <Card monster={monster} />
             </div>
          ))}
     </div>
    )
}