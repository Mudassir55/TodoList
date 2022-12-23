import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";
export const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className='text-center my-3'>Todos List</h3>

            {props.todos.length === 0 ? <div class="alert alert-primary" role="alert">
                No Todos To show
            </div> :
                props.todos.map((Todos) => {
                    return (

                        <TodoItem todos={Todos} key={Todos.sno} onDelete={props.onDelete} />)
                })}


        </div >
    )
}
