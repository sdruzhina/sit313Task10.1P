import React from 'react';
import { Header, Form, Input } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import './TaskDetails.css';

function TaskDetails(props) {

  const TaskDetails = props.TaskDetails;

  // Event handler
  const handleChange = (e, { value }) => {
    props.onTaskDetailsChange({name: 'TaskDetails', value: value});
  }

  return (
    <div>
      <Header inverted block color='grey'>Describe your task to Workers</Header>
      <Form className='task-details'>
        <Form.Group inline>
          <Form.Field>
            <label className='label'>Title</label>
            <Input placeholder='Enter task title' style={{width: "480px"}}/>
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <label className='label'>Description</label>
            <Input placeholder='Enter task description' style={{width: "480px"}}/>
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <label className='label'>Expiry</label>
            <SemanticDatepicker datePickerOnly='true' />
          </Form.Field>
        </Form.Group>
      </Form>
    </div>
  );
}

export default TaskDetails;
