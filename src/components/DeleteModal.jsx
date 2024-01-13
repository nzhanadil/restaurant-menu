import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export function DeleteModal({deleteModal, toggleDelete, handleDelete, id}) {
  return (
    <div>
      <Modal isOpen={deleteModal} toggle={toggleDelete}>
        <ModalHeader toggle={toggleDelete}>Delete?</ModalHeader>
        <ModalBody>Are you sure you wanna delete this meal?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDelete(id)}>
            Delete
          </Button>
          <Button color="secondary" onClick={toggleDelete}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}