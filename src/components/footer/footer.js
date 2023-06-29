import PropTypes from 'prop-types';

import FooterFilter from '../footer-task-filter/footer-task-filter';

function Footer({ getAllItem, getActiveItem, getCompletedItem, allDeleted, todos }) {
  const doneCount = todos.filter((el) => el.completed).length;
  const todoCount = todos.length - doneCount;

  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <FooterFilter getAllItem={getAllItem} getActiveItem={getActiveItem} getCompletedItem={getCompletedItem} />
      <button type="button" className="clear-completed" onClick={allDeleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  getAllItem: () => {},
  getActiveItem: () => {},
  getCompletedItem: () => {},
  allDeleted: () => {},
  todos: {},
};

Footer.propTypes = {
  getAllItem: PropTypes.func,
  getActiveItem: PropTypes.func,
  getCompletedItem: PropTypes.func,
  allDeleted: PropTypes.func,
  todos: PropTypes.arrayOf,
};

export default Footer;
