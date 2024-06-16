import React, { useRef } from 'react'

const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props
  const buttonRef = useRef(null)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      buttonRef.current.click()
    }
  }

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder='Add...'
        onKeyDown={handleKeyDown}
      />
      <button
        ref={buttonRef}
        onClick={() => {
          handleAddTodos(todoValue)
          setTodoValue("")
        }}
      >
        Add
      </button>
    </header>
  )
}

export default TodoInput