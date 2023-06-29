import { Component } from 'react';
import PropTypes from 'prop-types';

import TodoTask from '../task/task';

class TodoTaskList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf,
    onDeleted: PropTypes.func,
    onLabelCompleted: PropTypes.func,
  };

  render() {
    const { todos, onDeleted, onLabelCompleted } = this.props;
    const elements = todos.map((item) => {
      const { id, label, ...itemProps } = item;
      return (
        <li key={id} className="">
          <TodoTask
            text={label}
            onDeleted={() => onDeleted(id)}
            onLabelCompleted={() => onLabelCompleted(id)}
            {...itemProps}
          />
        </li>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
    // return (
    //   <ul className="todo-list">
    //     <TodoTask classEl="completed" condition="Completed task" />
    //     <TodoTask classEl="editing" condition="Editing task" />
    //     <TodoTask condition="Active task" />
    //   </ul>
    // );
  }
}

TodoTaskList.defaultProps = {
  todos: {},
  onDeleted: () => {},
  onLabelCompleted: () => {},
};

export default TodoTaskList;
