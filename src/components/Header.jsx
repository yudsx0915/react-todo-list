import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import "../styles/Header.css";

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    };

    handleKeyUp = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) return;
        if (target.value.trim() === "") {
            alert("can not input empty string");
            return;
        }
        const todoObj = { id: nanoid(), name: target.value, done: false };
        this.props.addTodo(todoObj);
        target.value = "";
    };

    render() {
        return (
            <div className="todo-header">
                <input
                    onKeyUp={this.handleKeyUp}
                    type="text"
                    placeholder="Please input task name then press Enter"
                />
            </div>
        );
    }
}
