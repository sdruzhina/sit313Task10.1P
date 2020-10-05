import React, { useState }  from 'react';
import './CreateTask.css';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import TaskType from './CreateTaskForm/TaskType';
import TaskDetails from './CreateTaskForm/TaskDetails';
import WorkerRequirements from './CreateTaskForm/WorkerRequirements';

function CreateTask() {

  // Form data
  const [taskData, setTaskData] = useState({
    type: 'CHOICE',
    title: '',
    description: '',
    expiry: '',
    responses: {},
    master: false,
    numberWorkers: 1,
    reward: 0
  });

  // Event handler
  const handleChange = (e) => {
    const {name, value} = e;
    setTaskData((data) => {
      return {
        ...data,
        [name]: value
      };
    });
  }

  return (
    <div>
      <Container>
        <Header as='h1'>
          New Task
        </Header>
        <Segment>
          <TaskType 
            type={taskData.type} 
            onTaskTypeChange={handleChange} 
          />
          <TaskDetails 
            title={taskData.title} 
            description={taskData.description} 
            expiry={taskData.expiry} 
            onTaskDetailsChange={handleChange} 
          />
          <WorkerRequirements 
            master={taskData.master} 
            reward={taskData.reward} 
            numberWorkers={taskData.numberWorkers} 
            onTaskDetailsChange={handleChange} 
          />
          <div className='action-buttons'>
            <Link to='/'>
              <Button>Cancel</Button>
            </Link>
            <Button positive>Save</Button>
          </div>
        </Segment>
      </Container>
    </div>
  );
}

export default CreateTask;
