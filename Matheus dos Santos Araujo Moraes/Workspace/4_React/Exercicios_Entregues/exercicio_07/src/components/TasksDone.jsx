import React from 'react';
import { FaTimes, FaToggleOn } from 'react-icons/fa';

const TasksDone = ({ tasks, handleDeleteTask, handleReopenTask }) => {
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
              <button onClick={() => handleReopenTask(task.id)}>
                <FaToggleOn />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Não há tarefas concluídas.</p>
      )}
    </div>
  );
};

export default TasksDone;
