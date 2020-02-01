import uuid from "uuid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./Actions/todoAction";
import { removeTodo } from "./Actions/todoAction";
import { EditTodo } from "./Actions/todoAction";
import { UpdateTodo } from "./Actions/todoAction";

import { changeTodo } from "./Actions/todoAction";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      newInput: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  add = () => {
    this.props.addnewTodo({
      text: this.state.input,
      complete: false,
      edit: false,
      id: uuid()
    });
    this.setState({ input: "" });
  };

  delete = id => {
    this.props.RemoveTodo(id);
  };
  complete = id => {
    this.props.ChangeTodo(id);
  };
  edit = (id, text) => {
    this.props.EditTodo(id);
    this.setState({ newInput: text });
  };
  update = id => {
    this.props.UpdateTodo(id, this.state.newInput);
  };
  render() {
    return (
      <div>
        <div className="todoapp">
          <h1>TO DO APP</h1>
          <div className="section">
            <input
              className="input"
              type="text"
              placeholder="Enter new task"
              onChange={this.handleChange}
              value={this.state.input}
              name="input"
            />
            <button type="button" className="add" onClick={this.add}>
              Add
            </button>
          </div>
        </div>
        <div className="todolist">
          <h1 className="text">Let's get some work done!</h1>

          <ul className="bloc">
            {this.props.todos.map(el => (
              <li className="list">
                <button onClick={() => this.complete(el.id)}>
                  {el.complete ? "Undo" : "Complete"}
                </button>
                <button onClick={() => this.delete(el.id)}>Delete</button>
                <button
                  onClick={
                    el.edit
                      ? () => this.update(el.id)
                      : () => this.edit(el.id, el.text)
                  }
                >
                  {!el.edit ? "Edit" : "Done"}
                </button>
                {!el.edit ? (
                  <h4 className={!el.complete ? "item" : "item2"}>{el.text}</h4>
                ) : (
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newInput}
                    name="newInput"
                    className="newinput"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.TodosReducer
  };
};

const mapDisptachToProps = dispatch => {
  return {
    addnewTodo: newTodo => dispatch(addTodo(newTodo)),
    RemoveTodo: id => dispatch(removeTodo(id)),
    ChangeTodo: id => dispatch(changeTodo(id)),
    EditTodo: (id) => dispatch(EditTodo(id)),
    UpdateTodo: (id, text) => dispatch(UpdateTodo(id, text))
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Todo);
