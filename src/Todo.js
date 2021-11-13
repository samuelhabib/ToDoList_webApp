import React from 'react'

export default function Todo({ todo: {id,name,complete} , toggleTodo }) {
    function handleTodoClick(){
        toggleTodo(id)
    }

    return (
        <div>
            <label>
              <input type="checkbox" checked ={complete} onChange={handleTodoClick}/>
              {name}
            </label>
        </div>
    )
}
