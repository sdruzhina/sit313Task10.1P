import React, { useState } from 'react';
import { Header, Form, Input, Button } from 'semantic-ui-react';

function TaskSetupChoice(props) {

  // Set up potential responses
  // const [responsesArray, setResponseArray] = useState([{id: 1, text: ''}]);
  const [responsesArray, setResponseArray] = useState(
    props.responses ? props.responses : [{id: 1, text: ''}]
    );

  function addOption() {
    const index = responsesArray.length + 1;
    setResponseArray(array => [...array, {id: index, text: ''}]);
  }

  // Event handler
  const handleChange = () => {
    props.onTaskDetailsChange({name: 'responses', value: responsesArray});
  }

  // Update individual array elements
  function updateArray(e, data) {
    let newArr = [...responsesArray];
    let index = newArr.findIndex(el => el.id === data.name);
    newArr[index].text = data.value;
    setResponseArray(newArr);
    handleChange();
  }

  // Render selection options
  const renderOptions = () => {
    return(
      responsesArray.map((item) => (
      <Form.Group inline key={item.id}>
        <Form.Field>
        <label className='label'>Option {item.id}</label>
          <Input 
            type='text'
            name={item.id}
            placeholder='Enter option text'
            value={item.text}
            style={{width: "480px"}}
            onChange={updateArray}
          />
        </Form.Field>
      </Form.Group>
      )
    ));
  }

  return (
    <div>
      <Header inverted block color='grey'>Task Setup - Choice</Header>
      <Form className='form-container'>
        {renderOptions()}
        <Form.Field>
          <Button primary onClick={addOption}>+ Add option</Button>
        </Form.Field>
      </Form>
      
    </div>
  );
}

export default TaskSetupChoice;
