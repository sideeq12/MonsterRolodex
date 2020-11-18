import React from "react";

export const SearchBox = ({ placeholder , handlechange})=>{
  return  <input type="search" 
         placeholder={placeholder}
            onChange= {handlechange}
            className="form-control" style={{width : "250px"}} />
}