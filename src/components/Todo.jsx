import React from 'react';
import TodoCard from './TodoCard';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            todos: [
            {
                title: "let the bodies hit the floor",
                description: "why do they always send the poor?"
            }
            ]
        }
    }
    
    addTodo = () => {
        const newTodoList = [ ...this.state.todos, { title: this.state.title, description: this.state.description } ]
        this.setState({todos: newTodoList, title: '', description:''})
    }

    removeTodo = (i) => {
        let newTodoList = this.state.todos;
        newTodoList.splice(i, 1);
        this.setState({todos: newTodoList})
    }


    changeDescription = (event) => {
        this.setState({description: event.target.value})
    }

    changeTitle = (event) => {
        this.setState({title: event.target.value})
    }
    
    render() {
        return (
            <div className="todo">
                <div className="todo-body">
                    {
                        this.state.todos.map((eaTodo, i) => (
                            <TodoCard remove={this.removeTodo} todo={eaTodo} index={i}/>
                        ))
                    }
                </div>
                <div className="control-nav">
                    <input onChange={this.changeTitle} value={this.state.title} />
                    <input onChange={this.changeDescription} value={this.state.description} />
                    <button onClick={this.addTodo}/>
                </div>
            </div>
        )
    }
}

export default Todo;