import React, { useState } from 'react';
import NewTasks from './components/NewTasks';
import TasksOpen from './components/TasksOpen';
import TasksDone from './components/TasksDone';

const App = () => {
  const [openTasks, setOpenTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      name: `Tarefa ${openTasks.length + 1}`,
    };
    setOpenTasks([...openTasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedOpenTasks = openTasks.filter((task) => task.id !== taskId);
    const updatedDoneTasks = doneTasks.filter((task) => task.id !== taskId);
    setOpenTasks(updatedOpenTasks);
    setDoneTasks(updatedDoneTasks);
  };

  const handleCompleteTask = (taskId) => {
    const taskToComplete = openTasks.find((task) => task.id === taskId);
    setOpenTasks(openTasks.filter((task) => task.id !== taskId));
    setDoneTasks([...doneTasks, taskToComplete]);
  };

  const handleReopenTask = (taskId) => {
    const taskToReopen = doneTasks.find((task) => task.id === taskId);
    setDoneTasks(doneTasks.filter((task) => task.id !== taskId));
    setOpenTasks([...openTasks, taskToReopen]);
  };

  return (
    <div>
      <NewTasks handleAddTask={handleAddTask} />
      <TasksOpen
        tasks={openTasks}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
      <TasksDone
        tasks={doneTasks}
        handleDeleteTask={handleDeleteTask}
        handleReopenTask={handleReopenTask}
      />
    </div>
  );
};

export default App;
