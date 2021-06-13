import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './styles/index.scss';
import App from './App';
import reportWebVitals from './vitals/reportWebVitals';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <StylesProvider injectFirst>
        <Provider store={store}>
          <App />
        </Provider>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
