import React, { useState } from 'react';




export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description cannot be empty");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");

        }
    }


    return (

        <div className='container'>

            <h3 className='text-center'>Add a Todo</h3>



            <form onSubmit={submit}>
                <div className=" mb-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" placeholder="Enter Your Todo" />
                </div>
                <div className=" mb-3">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="Description" />
                </div>


                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>

        </div>
    )
}
