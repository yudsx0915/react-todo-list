import React, { Component } from "react";
import "../styles/Item.css";

export default class Item extends Component {
    state = { mouse: false };

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        };
    };

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        };
    };

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        return (
            <li
                style={{ backgroundColor: mouse ? "grey" : "white" }}
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}
            >
                <label>
                    <input
                        type="checkbox"
                        defaultChecked={done}
                        onChange={this.handleCheck(id)}
                    />
                    <span>{name}</span>
                </label>
                <button
                    className="btn btn-dnager"
                    style={{ display: mouse ? "block" : "none" }}
                >
                    刪除
                </button>
            </li>
        );
    }
}
