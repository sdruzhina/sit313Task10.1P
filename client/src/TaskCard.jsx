import React from 'react';
import './TaskCard.css';
import { Card } from 'semantic-ui-react' 

function TaskCard(props) {
  return (
    <Card fluid className='task-card'>
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
  );
}

export default TaskCard;
