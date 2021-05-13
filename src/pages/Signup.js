import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import * as actions from '../store/actions/auth'
import PasswordInput from '../components/base/PasswordInput';

import '../styles/Signup.scss';

function Signup({ auth_loading, error, onAuth, history }) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: emailRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    // # TODO: Validation

    onAuth(data);
    history.push('/dashboard')
  }

  return (
    <div className='signup-root'>
      <div className='signup-container'>
      {auth_loading ?
          <CircularProgress size="4rem" /> 
        :
          <>
            <div className='signup-header'>
              <Typography variant="h3">ValcunX</Typography>
              <Typography variant="h6">Create your account</Typography>
            </div>
            <Card className='signup-card' elevation='4'>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <TextField 
                    id="username" 
                    inputRef={usernameRef} 
                    type="text" 
                    required={true}
                    label="Username" 
                    variant="outlined" 
                    className='signup-username' 
                  />

                  {/* Email */}
                  <TextField 
                    id="email"
                    inputRef={emailRef}
                    type="email"
                    required={true}
                    label="Email"
                    variant="outlined"
                    className='signup-email' 
                  />

                  {/* Password */}
                  <PasswordInput inputRef={passwordRef} />

                  {/* Sign In Button */}
                  <Button type="submit" variant="contained" color="primary" classes={{ root: "signup-button" }}>
                    <Typography variant="button">Sign Up</Typography>
                  </Button>

                  <div className='signin-error-message'><Typography variant="caption1" color="error">{error}</Typography></div>
                </form>
              </CardContent>
            </Card>

            <div className='signin-button-div'>
              <Link to="/signin">
                <Button variant="outlined" color="primary" classes={{ root: "signin-button" }}>
                  <Typography variant="button">
                    Already have an account? <span className='signin'>Sign In</span>
                  </Typography>
                </Button>
              </Link>
            </div>

            <div className='tos-div'>
              <Typography variant="subtitle2">
                By creating an account, you agree to the <br /> <span className='tos'>Terms of Service</span>
              </Typography>
            </div>
          </>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth_loading: state.auth_loading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: ({ username, email, password }) => dispatch(actions.authSignup(username, email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
