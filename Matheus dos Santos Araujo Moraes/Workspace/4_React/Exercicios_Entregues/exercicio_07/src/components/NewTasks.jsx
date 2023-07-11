import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './NewTasks.css';

const NewTasks = ({ handleAddTask }) => {
  return (
    <header className="header">
      <h2>Tarefas</h2>
      <button className="add-button" onClick={handleAddTask}>
        <FaPlus />
        Add
      </button>
    </header>
  );
};

export default NewTasks;
