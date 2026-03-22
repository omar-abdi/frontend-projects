import React, { useState } from 'react'
import { toast , ToastContainer } from 'react-toastify'
function Todoform() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleAdd = () => {
    if (!task) {
        toast.error("Please Write Task")
        return
    }

    setTasks([...tasks, task])
    setTask("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          📝 Todo App
        </h1>

        {/* Input + Button */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            placeholder="Enter your task..."
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-3 rounded-xl outline-none bg-white/20 text-white placeholder-gray-300"
          />

          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-xl transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="bg-white/20 text-white p-3 rounded-xl flex justify-between items-center"
            >
              {t}
            </li>
          ))}
        </ul>

      </div>
<ToastContainer/>
    </div>
  )
}

export default Todoform