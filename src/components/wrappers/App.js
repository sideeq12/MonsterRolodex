import React, {Component} from 'react';
import {CardList} from "../cardList"

class App extends Component{
    constructor(){
        super();
        this.state= {
            monsters : []
        }
            
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters : users}))
    }

    render(){
        return(
            <div className="App">
        {this.state.monsters.map(monster =>(
            <CardList name="pop" key={monster.id} >{monster.name} </CardList>
         )
         )}
         
        </div>
        )
    }

}
export default App;
