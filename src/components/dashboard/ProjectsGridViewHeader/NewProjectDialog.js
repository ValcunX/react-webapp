import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import '../styles/ProjectsGridViewHeader.scss';

function NewProjectDialog({ open, handleClose }) {
  const [languages, setLanguages] = useState([]);
  const [langLoading, setLangLoading] = useState(true);

  useEffect(() => {
    console.log(langLoading);
    if(!langLoading) return;

    async function loadLanguages() {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/languages/`)
      setLanguages(response.data);
      setLangLoading(false);
      console.log({url: `${process.env.REACT_APP_API_URL}/languages/`, data: response.data});
    }
    loadLanguages();
  }, [langLoading]);

  return (
    <Dialog open={open} fullWidth={true} onClose={handleClose} classes={{ root: 'new-dialog-root', paper: 'new-dialog' }}>
      <DialogTitle className="new-dialog-title">Create New Project</DialogTitle>
      <DialogContent className="new-dialog-content">
        <TextField autoFocus fullWidth variant="outlined" id="name" label="Project Name" type="text" className="new-dialog-proj-name"/>
        <FormControl fullWidth variant="outlined" className="new-dialog-proj-lang" disabled={langLoading}>
          <InputLabel>Programming Language</InputLabel>
          <Select id="demo-simple-select-outlined" label="Programming Language">
            {languages.map((language) => {
              return <MenuItem value={language.id}>{language.name}</MenuItem>
            })}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions className="new-dialog-actions">
        <Button onClick={handleClose} color="error">
          <Typography variant="button" color="error">Cancel</Typography>
        </Button>
        <Button onClick={handleClose} color="secondary">
          <Typography variant="button">Create</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewProjectDialog;
