import React from 'react';


const TodoCard = ({ todo, index, remove }) => {

    return (
        <div className="todo-card">
            <div className="title">
                {todo.title}
            </div>
            <div className="description">
                {todo.description}
            </div>
            <div className="remove">
                <button onClick={ ()=>{
                    remove(index);
                }}></button>
            </div>
        </div>
    )
}

export default TodoCard;