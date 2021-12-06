/* eslint react/prop-types: 0 */
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
const Modal = ({
  open,
  handleClose,
  handleInputChange,
  handleSubmit,
  data,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="firstname"
          label="First Name"
          type="text"
          fullWidth
          onChange={handleInputChange}
          value={data.firstname}
        />
        <TextField
          autoFocus
          margin="dense"
          name="lastname"
          label="Last Name"
          type="text"
          fullWidth
          onChange={handleInputChange}
          value={data.lastname}
        />
        <TextField
          margin="dense"
          name="email"
          label="email"
          type="email"
          fullWidth
          onChange={handleInputChange}
          value={data.email}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>

        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
