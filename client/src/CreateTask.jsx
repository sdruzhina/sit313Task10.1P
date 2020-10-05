import React, { useState }  from 'react';
import './CreateTask.css';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import TaskType from './CreateTaskForm/TaskType';
import TaskDetails from './CreateTaskForm/TaskDetails';
import WorkerRequirements from './CreateTaskForm/WorkerRequirements';
import TaskSetupChoice from './CreateTaskForm/TaskSetupChoice';
import TaskSetupDecision from './CreateTaskForm/TaskSetupDecision';

function CreateTask() {

  // Form data
  const [taskData, setTaskData] = useState({
    type: 'CHOICE',
    title: '',
    description: '',
    expiry: '',
    responses: null,
    master: false,
    numberWorkers: 1,
    reward: 0
  });

  // Event handler
  const handleChange = (e) => {
    const {name, value} = e;
    setTaskData((data) => {
      if (name != 'type') {
        return {
          ...data,
          [name]: value
        };
      }
      else {
        return {
          ...data,
          [name]: value,
          responses: null
        };
      }
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
          <TaskSetupChoice
            responses={taskData.responses} 
            onTaskDetailsChange={handleChange}  
          />
          <TaskSetupDecision
            responses={taskData.responses} 
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
