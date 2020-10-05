import React, { useState }  from 'react';
import './CreateTask.css';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import TaskType from './CreateTaskForm/TaskType';
import TaskDetails from './CreateTaskForm/TaskDetails';

function CreateTask() {

  // Form data
  const [taskData, setTaskData] = useState({
    taskType: 'CHOICE',
  });

  // Event handler
  const handleChange = (e) => {
    const {name, value} = e;
    console.log(e);
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
          <TaskType taskType={taskData.taskType} onTaskTypeChange={handleChange} />
          <TaskDetails taskType={taskData.TaskDetails} onTaskDetailsChange={handleChange} />

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
