import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import '../styles/Signup.scss';


import PasswordInput from '../components/base/PasswordInput';

function Signup() {


  return (
    <div className='signup-root'>
      <div className='signup-container'>
        <div className='signup-header'>
          <Typography variant="h3">ValcunX</Typography>
          <Typography variant="h6">Create your account</Typography>
        </div>
        <Card className='signup-card' elevation='4'>
          <CardContent>
            <form noValidate>
              {/* Username */}
              <TextField id="username" label="Username" variant="outlined" className='signup-username'/>
              
              {/* Email */}
              <TextField id="email" label="Email" variant="outlined" className='signup-email'/>

              {/* Password */}
              
              <PasswordInput />

              {/* Sign In Button */}
              <Button variant="contained" color="primary" classes={{ root: "signup-button" }}>
                <Typography variant="button">
                  Sign Up
                </Typography>
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className='signin-button-div'>
          <Button variant="outlined" color="primary" classes={{ root: "signin-button" }}>
            <Typography variant="button">
              Already have an account? <span className='signin'>Sign In</span>
            </Typography>
          </Button>
        </div>

        <div className='tos-div'>
          <Typography variant="subtitle">
            By creating an account, you agree to the <br/> <span className='tos'>Terms of Service</span>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Signup;