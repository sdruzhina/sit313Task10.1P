import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";
import './CreateTask.css';
import { Container, Segment, Header, Button, Modal } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import TaskType from './CreateTaskForm/TaskType';
import TaskDetails from './CreateTaskForm/TaskDetails';
import WorkerRequirements from './CreateTaskForm/WorkerRequirements';
import TaskSetupChoice from './CreateTaskForm/TaskSetupChoice';
import TaskSetupDecision from './CreateTaskForm/TaskSetupDecision';
import TaskSetupSentence from './CreateTaskForm/TaskSetupSentence';

function CreateTask() {
  // Router history
  const history = useHistory();

  // Form data
  const [taskData, setTaskData] = useState({
    type: 'CHOICE',
    title: '',
    description: '',
    expiry: '',
    responses: null,
    master: false,
    numberWorkers: 1,
    reward: 0
  });

  // Confirmation modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [success, setSuccess] = useState(true);

  // Open confirmation modal
  const openModal = (res) => {
    setSuccess(res.errors ? false : true);
    setModalMessage(res.message);
    setModalOpen(true);
  }

  // Close confirmation modal
  const closeModal = () => {
    setModalOpen(false);
    if (success) {
      history.push('/');
    }
  }

  // Event handler
  const handleChange = (e) => {
    const {name, value} = e;
    setTaskData((data) => {
      if (name !== 'type') {
        return {
          ...data,
          [name]: value
        };
      }
      else {
        return {
          ...data,
          [name]: value,
          responses: null
        };
      }
    });
  }

  // Save the task to DB
  function saveTask() {
    fetch('http://localhost:8080/requester/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
    .then(res => res.json())
    .then((res) => openModal(res))
    .catch((err) => console.log(err));
  }

  // Render appropriate celement depending on task type
  function renderTaskSetup() {
    switch (taskData.type) {
      case 'CHOICE':
        return <TaskSetupChoice
          responses={taskData.responses} 
          onTaskDetailsChange={handleChange}  
        />;
      case 'DECISION':
        return <TaskSetupDecision
          responses={taskData.responses} 
          onTaskDetailsChange={handleChange}  
        />;
      case 'SENTENCE':
        return <TaskSetupSentence
          responses={taskData.responses} 
          onTaskDetailsChange={handleChange}  
        />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Container>
        <Header as='h1'>
          New Task
        </Header>
        <Segment>
          <TaskType 
            type={taskData.type} 
            onTaskTypeChange={handleChange} 
          />
          <TaskDetails 
            title={taskData.title} 
            description={taskData.description} 
            expiry={taskData.expiry} 
            onTaskDetailsChange={handleChange} 
          />

          {renderTaskSetup()}

          <WorkerRequirements 
            master={taskData.master} 
            reward={taskData.reward} 
            numberWorkers={taskData.numberWorkers} 
            onTaskDetailsChange={handleChange} 
          />
          <div className='action-buttons'>
            <Link to='/'>
              <Button>Cancel</Button>
            </Link>
            <Button positive onClick={saveTask}>Save</Button>
          </div>
        </Segment>
      </Container>

      <Modal
        size='mini'
        open={modalOpen}
        onClose={closeModal}
      >
        <Modal.Header>{success ? 'Success' : 'Error'}</Modal.Header>
        <Modal.Content>
          <p>{modalMessage}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={closeModal}>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default CreateTask;
