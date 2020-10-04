import React, { useState }  from 'react';
import { Segment, Header, Button, Form, Checkbox } from 'semantic-ui-react';
import './TaskType.css';

function TaskType() {

  // State
  const [taskType, setTaskType] = useState('CHOICE');

  // Event handler
  const handleChange = (e, { value }) => {
    setTaskType(value);
  }

  return (
    <Form className='flex'>
      <Form.Field>
        Select task type:
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Choice Task'
          name='taskType'
          value='CHOICE'
          checked={taskType === 'CHOICE'}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Decision-Making Task'
          name='taskType'
          value='DECISION'
          checked={taskType === 'DECISION'}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Sentence-Level Task'
          name='taskType'
          value='SENTENCE'
          checked={taskType === 'SENTENCE'}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
}

export default TaskType;
