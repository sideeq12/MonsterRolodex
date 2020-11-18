import React from "react";


export const CardList = (props) =>{
    console.log(props)
    return <div className="card" style={{width : "18rem"}}>
    <div className="card-body">
     <div className="card-title">
    {props.children}</div>
    </div></div>
}