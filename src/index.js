import { createRoot } from 'react-dom/client';
import { Component } from 'react';

import TodoTaskList from './components/task-list/task-list';
import NewTaskForm from './components/new-task-form/new-task-form';
import Footer from './components/footer/footer';

import './index.css';

class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, completed: false, id: 1 },
      { label: 'Make Awesome App', important: true, completed: false, id: 2 },
      { label: 'Have a lunch', important: false, completed: false, id: 3 },
    ],

    todoDataAlways: [
      { label: 'Drink Coffee', important: false, completed: false, id: 1 },
      { label: 'Make Awesome App', important: true, completed: false, id: 2 },
      { label: 'Have a lunch', important: false, completed: false, id: 3 },
    ],
  };

  clearCompletedItem = () => {
    const newArr = this.state.todoData;
    const result = newArr.filter((item) => !item.completed);
    this.setState({
      todoData: result,
    });
  };

  getAllItem = () => {
    this.setState({
      todoData: this.state.todoDataAlways,
    });
  };

  getActiveItem = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData];
      const result = newArr.filter((item) => {
        if (item.completed === false) {
          return {
            ...item,
          };
        }
      });
      if (result.length > 0) {
        return {
          todoData: result,
        };
      }
      return {
        todoData: this.state.todoDataAlways,
      };
    });
  };

  getCompletedItem = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData];
      const result = newArr.filter((item) => {
        if (item.completed === true) {
          return {
            ...item,
          };
        }
      });
      if (result.length > 0) {
        return {
          todoData: result,
        };
      }
      return {
        todoData: this.state.todoDataAlways,
      };
    });
  };

  createTodoItem(label) {
    return {
      label,
      completed: false,
      important: false,
      id: this.maxId++,
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  deletedItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onLabelCompleted = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'completed'),
    }));
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdd={this.addItem} />
        </header>
        <section className="main">
          <TodoTaskList
            todos={this.state.todoData}
            onDeleted={this.deletedItem}
            onLabelCompleted={this.onLabelCompleted}
          />
          <Footer
            getAllItem={this.getAllItem}
            getActiveItem={this.getActiveItem}
            getCompletedItem={this.getCompletedItem}
            todos={this.state.todoData}
            allDeleted={this.clearCompletedItem}
          />
        </section>
      </section>
    );
  }
}

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
