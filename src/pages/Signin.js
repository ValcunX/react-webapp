import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as actions from '../store/actions/auth'
import PasswordInput from '../components/base/PasswordInput';

import '../styles/Signin.scss';

function Signin({ isAuthenticated, auth_loading, error, onAuth, history }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    // # TODO: Validation

    onAuth(data);
  }

  useEffect(() => {
    if(isAuthenticated) history.push('/dashboard');
  }, [isAuthenticated]);
  
  return (
    <div className='signin-root'>
      <div className='signin-container'>
        {auth_loading ?
          <CircularProgress size="4rem" /> 
        :
          <>
            <div className='signin-header'>
              <Typography variant="h3">ValcunX</Typography>
              <Typography variant="h6">Sign In to Dashboard</Typography>
            </div>
            <Card className='signin-card' elevation='4'>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <TextField 
                    id="email"
                    inputRef={emailRef}
                    type="email" 
                    label="Email" 
                    required={true}
                    variant="outlined" 
                    className='signin-username' 
                  />

                  {/* Password */}
                  <PasswordInput inputRef={passwordRef} />

                  {/* Sign In Button */}
                  <Button type="submits" variant="contained" color="primary" classes={{ root: "signin-button" }}>
                    <Typography variant="button">Sign In</Typography>
                  </Button>

                  <div className='signin-error-message'><Typography variant="caption1" color="error">{error}</Typography></div>
                </form>
              </CardContent>
            </Card>
            <div className='signup-button-div'>
              <Link to="/signup">
                <Button variant="outlined" color="primary" classes={{ root: "signup-button" }}>
                  <Typography variant="button">
                    New to ValcunX? <span className='create-an-account'>Create an account.</span>
                  </Typography>
                </Button>
              </Link>
            </div>
          </>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    auth_loading: state.auth_loading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: ({ email, password }) => dispatch(actions.authLogin(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
