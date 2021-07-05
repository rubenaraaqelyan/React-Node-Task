import React, { Component } from 'react';

class CreateTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      title: '',
    }
  }

  onInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleAddTodo = evt => {
    evt.preventDefault()

    const { description, title } = this.state
    if (description.length > 0 && title.length > 0 && title.length < 26) {
      this.props.onAddTodo({ description, title })

      this.setState({
        description: '',
        title: '',
      })
    }
  }

  render() {
    const { description, title } = this.state

    return (
      <div className="create-todo mb-5">
        <form onSubmit={this.handleAddTodo}>
          <div className="mb-3">
            <label htmlFor="create-input" className="form-label">Todo Name</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={title}
              name="title"
              className="form-control"
              id="create-input"
              maxLength="25"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              value={description}
              onChange={this.onInputChange}
              rows="3"
              name="description"
              className="form-control"
              id="description"
            />
          </div>

          <button className="btn btn-primary" type="submit">
            create Todo
          </button>
        </form>
      </div>
    );
  }
}

export default CreateTodos;