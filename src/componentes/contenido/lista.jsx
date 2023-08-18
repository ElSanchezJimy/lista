import React, { useState } from 'react';
import './lista.css';

function Lista() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const toggleCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div className="App">
                <h1>Lista de Tareas</h1>
                <div>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Agregar tarea"
                    />
                    <button onClick={addTask}>Agregar</button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span
                                className={task.completed ? 'completed ' : ''}
                                onClick={() => toggleCompletion(index)}
                            >
                                <ul>
                                    <li><input type="checkbox" name="frutas" value="manzana" checked /> {task.text}</li>
                                </ul>
                            </span>
                            <button onClick={() => deleteTask(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Lista;
