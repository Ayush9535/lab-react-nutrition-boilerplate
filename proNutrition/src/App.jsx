import React, { Component } from 'react';
import FoodBox from "./Components/FoodBox.jsx"
import "./App.css"
import FoodData from "./resources/FoodData.js"

export default class App extends Component{

  constructor(){
    super()
    this.state = ({
      newarr : FoodData
    })
  }

  render(){

    let {newarr} = this.state

    let handleChange = (event) =>{
      let filteredData = FoodData.filter((el , i)=>{
        if (el.name.includes(event.target.value)){
          return el
        }
      })
      this.setState({newarr:filteredData})
    }

    return (
      <>

        <div className='searchBar'>
          <input type="text" placeholder="Search data here" onChange={handleChange}/>
        </div>

        {
        newarr.map((ele,i)=>(
          <FoodBox key={i} {...ele}/>
        ))
        }
      </>
    )
  }
}

