import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import '../styles/Signin.scss';

import PasswordInput from '../components/base/PasswordInput';

function Signin() {

  return (
    <div className='signin-root'>
      <div className='signin-container'>
        <div className='signin-header'>
          <Typography variant="h3">ValcunX</Typography>
          <Typography variant="h6">Sign In to Dashboard</Typography>
        </div>
        <Card className='signin-card' elevation='4'>
          <CardContent>
            <form noValidate>
              {/* Username */}
              <TextField id="username" label="Username" variant="outlined" className='signin-username' />

              {/* Password */}
              <PasswordInput />

              {/* Sign In Button */}
              <Button variant="contained" color="primary" classes={{ root: "signin-button" }}>
                <Typography variant="button">Sign In</Typography>
              </Button>
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
      </div>
    </div>
  );
}

export default Signin;
