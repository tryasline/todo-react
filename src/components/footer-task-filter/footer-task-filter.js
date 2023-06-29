import { Component } from 'react';
import PropTypes from 'prop-types';

class FooterFilter extends Component {
  static propTypes = {
    getAllItem: PropTypes.func,
    getActiveItem: PropTypes.func,
    getCompletedItem: PropTypes.func,
  };

  render() {
    const { getAllItem, getActiveItem, getCompletedItem } = this.props;

    return (
      <ul className="filters">
        <li>
          <button type="button" className="selected" onClick={getAllItem}>
            All
          </button>
        </li>
        <li>
          <button type="button" onClick={getActiveItem}>
            Active
          </button>
        </li>
        <li>
          <button type="button" onClick={getCompletedItem}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

FooterFilter.defaultProps = {
  getAllItem: () => {},
  getActiveItem: () => {},
  getCompletedItem: () => {},
};

export default FooterFilter;
