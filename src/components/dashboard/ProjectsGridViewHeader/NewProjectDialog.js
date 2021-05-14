import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import { createVolume } from '../../../helpers/socketIO';

import '../styles/ProjectsGridViewHeader.scss';

function NewProjectDialog({ token, user_id, open, handleClose }) {
  const [languages, setLanguages] = useState([]);
  const [langLoading, setLangLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);

  const projectNameRef = useRef();
  const languageRef = useRef();

  useEffect(() => {
    if(!langLoading) return;

    async function loadLanguages() {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/languages/`)
      setLanguages(response.data);
      setLangLoading(false);
      console.log({url: `${process.env.REACT_APP_API_URL}/languages/`, data: response.data});
    }
    loadLanguages();
  }, [langLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCreating(true);

    createVolume(async (volume_id) => {
      const response = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/projects/`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify({
          "name": projectNameRef.current.value,
          "user": `${process.env.REACT_APP_API_URL}/users/${user_id}/`,
          "language": `${process.env.REACT_APP_API_URL}/languages/${languageRef.current.value}/`,
          "volume_id": volume_id
        })
      });
      console.log(response)
      
      setCreating(false);
      handleClose();
    })
  }

  return (
    <Dialog open={open} fullWidth={true} onClose={handleClose} classes={{ root: 'new-dialog-root', paper: 'new-dialog' }}>
      <DialogTitle className="new-dialog-title">Create New Project</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent className="new-dialog-content">
          <TextField 
            autoFocus 
            fullWidth 
            variant="outlined" 
            id="name" 
            label="Project Name"
            required={true}
            inputRef={projectNameRef}
            type="text"
            className="new-dialog-proj-name"
          />

          <FormControl fullWidth variant="outlined" required={true} className="new-dialog-proj-lang" disabled={langLoading}>
            <InputLabel>Programming Language</InputLabel>
            <Select id="demo-simple-select-outlined" label="Programming Language" inputRef={languageRef}>
              {languages.map((language) => {
                return <MenuItem value={language.id}>{language.name}</MenuItem>
              })}
            </Select>
          </FormControl>
          
          <div className='error-message'><Typography variant="caption1" color="error">{error}</Typography></div>
        </DialogContent>
        
        <DialogActions className="new-dialog-actions">
          <Button onClick={handleClose} color="error">
            <Typography variant="button" color="error" disabled={creating}>Cancel</Typography>
          </Button>
          
          <div className='create-button-container'>
            <Button type="submit" color="secondary">
              <Typography variant="button" disabled={creating}>Create</Typography>
            </Button>
            {creating && <CircularProgress className="create-button-progress" size={24} color="secondary" />}
          </div>
          
        </DialogActions>
      </form>
    </Dialog>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user_id: state.user_id
  }
}

export default connect(mapStateToProps)(NewProjectDialog);
