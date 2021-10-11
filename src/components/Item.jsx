import React, { Component } from "react";
import "../styles/Item.css";

export default class Item extends Component {
    state = { mouse: false };

    //mouse移入移出
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        };
    };

    //勾選/取消勾選
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        };
    };

    handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            this.props.deleteTodo(id);
        }
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
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-dnager" style={{ display: mouse ? "block" : "none" }} onClick={() => this.handleDelete(id)}>
                    刪除
                </button>
            </li>
        );
    }
}
