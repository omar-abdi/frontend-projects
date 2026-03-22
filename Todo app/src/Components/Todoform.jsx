import React, { useState } from 'react'

function Todoform() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleAdd = () => {
    if (!task) return   // ka hortag empty

    setTasks([...tasks, task])
    setTask("") // clear input
  }

  return (
    <div>
      <input
        type="text"
        value={task}
        placeholder='Task'
        onChange={(e) => setTask(e.target.value)}
        className=''
      />

      <button className='' onClick={handleAdd}>
        add
      </button>

      <div>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </div>
    </div>
  )
}

export default Todoform