import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import { Component } from "react";

export default class App extends Component {
    //預設show在上面的Data
    state = {
        todos: [
            { id: "001", name: "eat", done: true },
            { id: "002", name: "sleep", done: true },
            { id: "003", name: "code", done: false },
            { id: "004", name: "shopping", done: false },
        ],
    };
    //新增一個todo
    addTodo = (todoObj) => {
        const { todos } = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({ todos: newTodos });
    };

    //更新todo
    updateTodo = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done: done };
            else return todoObj;
        });
        this.setState({ todos: newTodos });
    };

    //刪除一個todo
    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        });
        this.setState({ todos: newTodos });
    };

    checkAllTodo = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done: done };
        });
        this.setState({ todos: newTodos });
    };

    clearAllDone = () => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.done !== true;
        });
        this.setState({ todos: newTodos });
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        );
    }
}
