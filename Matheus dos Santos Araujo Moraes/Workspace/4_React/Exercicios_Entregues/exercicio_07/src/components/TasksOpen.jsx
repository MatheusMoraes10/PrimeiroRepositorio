import React from 'react';
import { FaTimes, FaToggleOff } from 'react-icons/fa';

const TasksOpen = ({ tasks, handleDeleteTask, handleCompleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => handleDeleteTask(task.id)}>
                <FaTimes />
              </button>
              <button onClick={() => handleCompleteTask(task.id)}>
                <FaToggleOff />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Não há tarefas em aberto.</p>
      )}
    </div>
  );
};

export default TasksOpen;
