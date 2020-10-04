import React from 'react';
import TaskList from './TaskList'
import './RequesterTasks.css';
import { Container, Segment, Header, Card } from 'semantic-ui-react'

function RequesterTasks() {
  return (
    <div>
      <Header as='h1'>
        Requester Tasks
      </Header>
      <Container>
        <Card.Group>
          <TaskList />
        </Card.Group>
      </Container>
    </div>
  );
}

export default RequesterTasks;
