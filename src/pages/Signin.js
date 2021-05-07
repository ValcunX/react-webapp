import React from 'react';
import clsx from 'clsx';
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

import '../styles/Signin.scss';

function Signin() {
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
              {/* className={clsx(classes.margin, classes.textField)} */}
              <TextField id="username" label="Username" variant="outlined" className='signin-username'/>

              {/* Password */}
              {/* className={clsx(classes.margin, classes.textField)} */}
              <FormControl variant="outlined" className='signin-password-control'>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  className='signin-password'
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
              <Button variant="contained" color="primary" classes={{ root: "signin-button" }}>
                <Typography variant="button">
                  Sign In
                  </Typography>
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className='sign-up-button-div'>
          <Button variant="outlined" color="primary" classes={{ root: "signup-button" }}>
            <Typography variant="button">
              New to ValcunX? <span className='create-an-account'>Create an account.</span>
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
