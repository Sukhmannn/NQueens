import React, {Component} from "react";
import {visualize} from "../../visualization";
import {board} from "./board";
import "./../../utils/animate.min.css";
import "./nQueens.css";

const SIZE_OF_BOARD = 8;

export default class nQueens extends Component {
    ComponentDidMount() {
        board(SIZE_OF_BOARD);
        
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "col-sm=8">
                        <div className = "row">
                            <div className = "col-sm-12">
                                <center>
                                    
                                    <h2> N-Queens Visualiser</h2>
                                </center>
                            </div>
                        </div>
                        <div className = "box board mb-2" id = "Board"></div>
                        <div className = "row">
                            <div className = "input-group met - 3 ml -1 container col-sm-6">
                                <div className = "input-group-append">
                                    <button className="btn btn-primary"
                                    onClick = {()=>visualize()}>
                                        visualize N-Queens
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id = "iterations" className="col-sm-4 mt-3"></div>
                    </div>



                </div>
            </div>
        );
    }
}