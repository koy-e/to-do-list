import React, { useState } from 'react';
import './App.css';

function App() {
//   const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const [tasks, setTasks] = useState([
    {
      title: 'Buy groceries',
      description: 'Milk, bread, eggs, and vegetables',
      priority: 'low',
      completed: false
    },
    {
      title: 'Finish project report',
      description: 'Due Monday by 5pm',
      priority: 'high',
      completed: false
    },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      title: newTaskTitle,
      description: newTaskDescription,
      priority: 'low', // Default priority
      completed: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="toggle-dark-mode">
        <input type="checkbox" id="darkModeToggle" checked={darkMode} onChange={toggleDarkMode} />
        <label htmlFor="darkModeToggle">Dark Mode</label>
      </div>
      <h1>Todo List</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className={darkMode ? 'dark-input' : ''}
        />
        <input
          type="text"
          placeholder="Task description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className={darkMode ? 'dark-input' : ''}
        />
        <button onClick={addTask} className={darkMode ? 'dark-button' : ''}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`${darkMode ? 'dark-task' : ''} ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
