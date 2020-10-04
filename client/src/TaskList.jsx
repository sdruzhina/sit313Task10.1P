import React from 'react';
import tasks from './tasks'
import TaskCard from './TaskCard'


function TaskList() {
  return (
    tasks.map((task) => 
      <TaskCard 
        key = {task.key}
        title = {task.title}
        description = {task.description}
        reward = {task.reward}
        expiry = {task.expiry}
        createdAt = {task.createdAt}
      />
  ));
}

export default TaskList;
