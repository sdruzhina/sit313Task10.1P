import React from 'react';
import TaskList from './TaskList'
import './RequesterTasks.css';
import { Container, Header, Card, Button } from 'semantic-ui-react'

function RequesterTasks() {
  return (
    <div>
      <Container>
        <Header as='h1'>
          Requester Tasks
        </Header>
        <Button positive className="new-task-button">+ New Task</Button>
        <Card.Group>
          <TaskList />
        </Card.Group>
      </Container>
    </div>
  );
}

export default RequesterTasks;
