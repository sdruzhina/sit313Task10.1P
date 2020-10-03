import React from 'react';
import RequesterList from './RequesterList'
import './MainContent.css';
import { Container, Segment, Header, Card } from 'semantic-ui-react'

function MainContent() {
  return (
    <div>
      <Segment
        textAlign='center'
      >
        <Header as='h1'>
          Featured Requesters
        </Header>
        <Container>
          <Card.Group centered itemsPerRow={3}>
            <RequesterList />
          </Card.Group>
        </Container>
      </Segment>
    </div>
  );
}

export default MainContent;
