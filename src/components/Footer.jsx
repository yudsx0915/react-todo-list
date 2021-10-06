import React, { Component } from "react";
import "../styles/Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"></input>
                </label>
                <span>
                    <span>已完成0</span> / 全部2
                </span>
                <button className="btn btn-danger">清除已完成任務</button>
            </div>
        );
    }
}
