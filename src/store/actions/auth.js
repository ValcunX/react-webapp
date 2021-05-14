import axios from 'axios';
import * as actionTypes from './actionTypes';

const TOKEN_KEY = 'token';
const USER_ID_KEY = 'user_id';
const EXPIRATION_DATE_KEY = 'expirationDate';


export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, user_id) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    user_id: user_id
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_ID_KEY);
  localStorage.removeItem(EXPIRATION_DATE_KEY);

  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  }
}

export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post(`${process.env.REACT_APP_AUTH_URL}/login/`, {
      username: email,
      email: email,
      password: password
    })
    .then((res) => {
      const token = res.data.key;
      const user_id = res.data.user;

      const expiration = 3600 * 1000;
      const expirationDate = new Date(new Date().getTime() + expiration);
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_ID_KEY, user_id);
      localStorage.setItem(EXPIRATION_DATE_KEY, expirationDate);

      dispatch(authSuccess(token, user_id));
      dispatch(checkAuthTimeout(expiration));
    })
    .catch((error) => dispatch(authFail(error)))
  }
}

export const authSignup = (username, email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post(`${process.env.AUTH_URL}/registration/`, {
      username: username,
      email: email,
      password1: password,
      password2: password
    })
    .then((res) => {
      const token = res.data.key;
      const user_id = res.data.user;

      const expiration = 3600 * 1000;
      const expirationDate = new Date(new Date().getTime() + expiration);
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_ID_KEY, user_id);
      localStorage.setItem(EXPIRATION_DATE_KEY, expirationDate);

      dispatch(authSuccess(token, user_id));
      dispatch(checkAuthTimeout(expiration));
    })
    .catch((error) => dispatch(authFail(error)))
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem(TOKEN_KEY);
    const user_id = localStorage.getItem(USER_ID_KEY);

    if(token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem(EXPIRATION_DATE_KEY));
      
      if(expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token, user_id));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())));
      }
    }
  }
}
