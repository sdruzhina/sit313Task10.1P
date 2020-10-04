import React, { useState }  from 'react';
import './CreateTask.css';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import TaskType from './CreateTaskForm/TaskType';

function CreateTask() {

  // Form data
  const [taskData, setTaskData] = useState({

  });

  return (
    <div>
      <Container>
        <Header as='h1'>
          New Task
        </Header>
        <Segment>
          <TaskType />

          <div className='action-buttons'>
            <Link to='/'>
              <Button>Cancel</Button>
            </Link>
            <Button positive>Create Task</Button>
          </div>
        </Segment>
      </Container>
    </div>
  );
}

export default CreateTask;
