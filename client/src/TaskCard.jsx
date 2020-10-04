import React from 'react';
import './TaskCard.css';
import { Card } from 'semantic-ui-react' 

function TaskCard(props) {
  return (
    <Card className='task-card'>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>${props.reward}</Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default TaskCard;
