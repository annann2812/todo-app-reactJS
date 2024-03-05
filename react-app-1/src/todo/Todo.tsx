import React, { Component } from 'react';
import { IoTrashBin } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import './Todo.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      filter: 'All',
      showDeleteIcon: null,
    };
  }

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, { id: Date.now(), text: newTask, completed: false }],
        newTask: '',
      });
    }
  };

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
      showDeleteIcon: null,
    }));
  };

  toggleTaskStatus = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addTask();
    }
  };

  filterTasks = () => {
    const { tasks, filter } = this.state;
    switch (filter) {
      case 'All':
        return tasks;
      case 'Todo':
        return tasks.filter((task) => !task.completed);
      case 'Done':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  render() {
    const { newTask, filter, showDeleteIcon } = this.state;

    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className='input-task'>
          <input
            type="text"
            value={newTask}
            onChange={(e) => this.setState({ newTask: e.target.value })}
            onKeyPress={this.handleKeyPress}
            placeholder="New task is ..."
            className="input-field"
          />
          <button onClick={this.addTask} className="add-button">
            <i className='add-icon'><FaPlus /></i>   
          </button>
        </div>
        <div className="task-list">
            <div className='dropdown-list'>
            <label htmlFor="filter">List:</label>
            <select
                id="filter"
                value={filter}
                onChange={(e) => this.setState({ filter: e.target.value })}
            >
                <option value="All">All</option>
                <option value="Todo">To do</option>
                <option value="Done">Done</option>
            </select>
            </div>
          {this.filterTasks().map((task, index) => (
            <li
              key={task.id}
              className="task"
              onMouseEnter={() => this.setState({ showDeleteIcon: task.id })}
              onMouseLeave={() => this.setState({ showDeleteIcon: null })}
            >
              <span className="order-number">{index + 1}.</span>
              <span
                onClick={() => this.toggleTaskStatus(task.id)}
                className={task.completed ? 'completed' : ''}
              >
                {task.text}
              </span>
              {showDeleteIcon === task.id && (
                <span
                  className="delete-icon"
                  onClick={() => this.deleteTask(task.id)}
                >
                  <IoTrashBin />
                </span>
              )}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;
