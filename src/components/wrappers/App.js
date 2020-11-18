import React, {Component} from 'react';
import {CardList} from "../cardList";
import {SearchBox} from "../searchBox"

let style ={
    backgroundColor : "#839b97"
}
let head ={
    color : "yellow",
    font : "cursive",
    textAlign : "center",
    marginTop : "20px",
    fontWeight : "bold"
}
class App extends Component{
    constructor(){
        super();
        this.state= {
            monsters : [],
            searchField : ""
        }
            
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters : users}))
    }

    render(){
        const {monsters, searchField} = this.state;
        const filteredmosters = monsters.filter(inn =>{
           let name = inn.name.toLowerCase();
           let search = searchField.toLowerCase();
           return name.includes(search)
        })
        return(
            <div className="App" style={style}>
            <div style={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
            <h1 style={head}>Monster Rolodex</h1>
            
            <SearchBox placeholder="search monsters..." handlechange={
                 e => { this.setState({searchField : e.target.value});} }
             />
                 </div>
            <CardList monsters={filteredmosters} />
        </div>
        )
    }

}
export default App;
