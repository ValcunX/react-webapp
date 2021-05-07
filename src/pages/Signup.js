import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import '../styles/Signup.scss';

function Signup() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
              <FormControl variant="outlined" className='signup-password-control'>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  className='signup-password'
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

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