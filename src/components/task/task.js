import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

class TodoTask extends Component {
  state = {
    created: new Date().toISOString(),
  };

  static defaultProps = {
    completed: 'false',
    text: '',
    onLabelCompleted: () => {},
    onDeleted: () => {},
  };

  static propTypes = {
    completed: PropTypes.bool,
    text: PropTypes.string,
    onLabelCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
  };

  render() {
    const { completed, onLabelCompleted, text, onDeleted } = this.props;
    let classNames = '';

    if (completed) {
      classNames += 'completed';
    }
    if (!completed) {
      classNames = '';
    }

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onLabelCompleted} />
        <label className={classNames}>
          <span className="description">{text}</span>
          <span className="created">
            {formatDistanceToNow(new Date(this.state.created), {
              includeSeconds: true,
              addSuffix: true,
            })}
          </span>
        </label>
        <button type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  }
}

export default TodoTask;
