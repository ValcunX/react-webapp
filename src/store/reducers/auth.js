import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
  token: null,
  user_id: null,
  error: null,
  auth_loading: false
}

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    auth_loading: true
  });
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    user_id: action.user_id,
    error: null,
    auth_loading: false
  });
}

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    auth_loading: false
  });
}

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    user_id: null,
  });
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    default: return state;
  }
}

export default reducer;
