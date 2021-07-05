import React, { Component } from 'react';
import classNames from 'classnames'
import Modal from 'react-modal'
import { getTodos, updateTodo, deleteTodo } from '../store/actions/table';
import { connect } from 'react-redux';
import _ from 'lodash'

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      todo: {},
      todoButtons: [],
      ...props,
    }

    this.todoStates = ['todo', 'process', 'done']

    this.customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '350px',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
  }

  componentDidMount() {
    this.props.getTodos()
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  handleClick = id => {
    const todo = this.props.todos.find(t => +t.id === +id)
    const todoButtons = this.todoStates.filter(t => t !== todo.status)
    this.setState({ modalIsOpen: true, todo, todoButtons })
  }

  handleStatusChange = ({ id, status }) => {
    this.props.updateTodo({ id, status })
    this.setState({modalIsOpen: false})
  }

  handleMessageDelete = id => {
    this.props.deleteTodo(id)
    this.setState({modalIsOpen: false})
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
  }
  dragEnd(e) {
    this.dragged.style.display = 'block';

      e.target.classList.remove("drag-up");
      this.over.classList.remove("drag-up");
      e.target.classList.remove("drag-down");
      this.over.classList.remove("drag-down");

    let data = this.state.data;
    let from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    data.splice(to, 0, data.splice(from, 1)[0]);


    data = data.map((doc, index)=> {
      doc.newIndex = index + 1;
      return doc;
    })

    this.setState({data: data});
  }

  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if (e.target.tagName !== "Button") {
      return;
    }

    const dgIndex = JSON.parse(this.dragged.dataset.item).newIndex;
    const taIndex = JSON.parse(e.target.dataset.item).newIndex;
    const animateName = dgIndex > taIndex ? "drag-up" : "drag-down";


    if (this.over && e.target.dataset.item !== this.over.dataset.item) {
      this.over.classList.remove("drag-up", "drag-down");
    }

    if(!e.target.classList.contains(animateName)) {
      e.target.classList.add(animateName);
      this.over = e.target;
    }
  }

  render() {
    const { modalIsOpen, todo, todoButtons } = this.state
    const { todos } = this.props

    return (
      <>
        <Modal
          isOpen={!!modalIsOpen}
          onRequestClose={this.closeModal}
          style={this.customStyles}
        >
          <h2>Description</h2>
          {todo && todo.description}

          <div className="buttons">
            {!_.isEmpty(todoButtons) && todoButtons.map(item => (
              <button
                  draggable={true}
                className="btn btn-primary"
                onClick={() => this.handleStatusChange({ id: todo.id, status: item })}
                key={item}
              >
                {item}
              </button>
            ))}
            <button
              className="btn btn-primary"
              onClick={() => this.handleMessageDelete({ id: todo.id })}
            >
              Delete
            </button>
          </div>
        </Modal>

        <div className="main">
          <div className="thead">
            <div>Todo</div>
            <div>Process</div>
            <div>Done</div>
          </div>
          <div className="tbody-wrap">
            <div className="todos">
              {!_.isEmpty(todos) && todos.map(todo => (
                <div
                  key={todo.id}
                  className={classNames('todo', {
                    'todo-todo': todo.status === 'todo',
                    'todo-process': todo.status === 'process',
                    'todo-done': todo.status === 'done',
                  })}
                >
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleClick(todo.id)}
                    draggable='true'
                    onDragEnd={this.dragEnd.bind(this)}
                    onDragStart={this.dragStart.bind(this)}
                  >
                    {todo.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.table.todos,
  // token: state.
});

const mapDispatchToProps = {
  getTodos,
  updateTodo,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
