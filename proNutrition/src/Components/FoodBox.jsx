import React, { Component } from 'react';
import "./FoodBox.css"

export default class FoodBox extends Component{
    constructor(){
        super()
        this.state = ({
            count : 0,
            calCount : 0
        })
    }

    render(){
        let data = this.props

        let handleReset = () =>{
            this.setState({count:0})
            this.setState({calCount:0})

        }

        let handleQuantity = (event) =>{
            this.setState({count:event.target.value})
        }

        let handleCal = () =>{
            this.setState({
                calCount:this.state.count*data.cal
            })
        }

        return(
            <>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={data.img} width="150px"/>
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{data.name}</strong> <br />
                            <small>{data.cal}</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" value={this.state.count} onChange={handleQuantity}/>
                            </div>
                            <div className="control">
                            <button className="button is-info" onClick={handleCal}>
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>

                    <div className='count'>
                        <h2>{this.state.count} {data.name} = {this.state.calCount} Calories</h2>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </>
        )
    }
} 