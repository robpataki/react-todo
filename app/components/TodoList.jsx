import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
  },

  render: function() {
    const { todos, showCompleted, searchText } = this.props;

    const renderTodos = () => {

      const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }

      return filteredTodos.map((todo) => {
        return (
          <Todo key={ todo.id } { ...todo } />
        );
      });
    };

    return (
      <div>
        { renderTodos() }
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state
  }
)(TodoList);
