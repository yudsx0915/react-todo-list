import React, { Component } from "react";
import "../styles/Footer.css";

export default class Footer extends Component {
    //全選/取消全選
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    };
    //清除已完成
    handleClearAllDone = (params) => {
        this.props.clearAllDone();
    };

    render() {
        const { todos } = this.props;
        const total = todos.length;
        const doneCount = todos.reduce((pre, current) => {
            return current.done ? pre + 1 : pre;
        }, 0);
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total > 0 ? true : false}></input>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>
                    清除已完成任務
                </button>
            </div>
        );
    }
}
