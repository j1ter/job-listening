import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAdvertisement, updateAdvertisement } from '../redux/actions';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { BsPencil, BsTrash } from 'react-icons/bs';

const AdvertisementList = () => {
  const dispatch = useDispatch();
  const advertisements = useSelector((state) => state.advertisements);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedAdvertisement, setEditedAdvertisement] = useState({});
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedSalary, setEditedSalary] = useState('');
  const [editedSchedule, setEditedSchedule] = useState('');
  const [editedTechStack, setEditedTechStack] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteAdvertisement(id));
  };

  const handleEdit = (advertisement) => {
    setEditedAdvertisement(advertisement);
    setEditedTitle(advertisement.title);
    setEditedDescription(advertisement.description);
    setEditedSalary(advertisement.salary || '');
    setEditedSchedule(advertisement.schedule || '');
    setEditedTechStack(advertisement.techStack || '');
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    dispatch(
      updateAdvertisement(editedAdvertisement.id, {
        title: editedTitle,
        description: editedDescription,
        salary: editedSalary,
        schedule: editedSchedule,
        techStack: editedTechStack,
      })
    );
    setShowEditModal(false);
    setEditedAdvertisement({});
    setEditedTitle('');
    setEditedDescription('');
    setEditedSalary('');
    setEditedSchedule('');
    setEditedTechStack('');
  };

  return (
    <div>
      <h2>Advertisements</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Salary</th>
            <th>Schedule</th>
            <th>Tech Stack</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {advertisements.map((ad) => (
            <tr key={ad.id}>
              <td>{ad.title}</td>
              <td>{ad.description}</td>
              <td>{ad.salary}</td>
              <td>{ad.schedule}</td>
              <td>{ad.techStack}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(ad)}>
                  <BsPencil />
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(ad.id)}>
                  <BsTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Advertisement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formEditedTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEditedDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEditedSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter salary"
              value={editedSalary}
              onChange={(e) => setEditedSalary(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEditedSchedule">
            <Form.Label>Schedule</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter schedule"
              value={editedSchedule}
              onChange={(e) => setEditedSchedule(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEditedTechStack">
            <Form.Label>Tech Stack</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter required tech stack"
              value={editedTechStack}
              onChange={(e) => setEditedTechStack(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdvertisementList;
