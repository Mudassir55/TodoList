import React from 'react'

export const TodoItem = ({ todos, onDelete }) => {
    return (
        <>
            <div>
                <h4>{todos.title}</h4>
                <p>{todos.description}</p>
                <button className="btn btn-danger" onClick={() => { onDelete(todos) }}>Delete</button>

            </div>
            <hr />
        </>
    )
}
