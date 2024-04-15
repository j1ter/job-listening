import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertisement, updateAdvertisement } from '../redux/actions';
import { Form, Button } from 'react-bootstrap';

const AdvertisementForm = ({ advertisementToEdit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(advertisementToEdit ? advertisementToEdit.title : '');
  const [description, setDescription] = useState(advertisementToEdit ? advertisementToEdit.description : '');
  const [salary, setSalary] = useState(advertisementToEdit ? advertisementToEdit.salary : '');
  const [schedule, setSchedule] = useState(advertisementToEdit ? advertisementToEdit.schedule : '');
  const [techStack, setTechStack] = useState(advertisementToEdit ? advertisementToEdit.techStack : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (advertisementToEdit) {
      dispatch(updateAdvertisement(advertisementToEdit.id, { title, description, salary, schedule, techStack }));
    } else {
      dispatch(addAdvertisement({ title, description, salary, schedule, techStack }));
    }
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setSalary('');
    setSchedule('');
    setTechStack('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formSchedule">
        <Form.Label>Schedule</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter schedule"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formTechStack">
        <Form.Label>Tech Stack</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter required tech stack"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {advertisementToEdit ? 'Update' : 'Add'}
      </Button>
    </Form>
  );
};

export default AdvertisementForm;
