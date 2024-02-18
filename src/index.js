import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

let text = 'Hello world!'
//const elem = <h2>Hello World!</h2>;
//const elem = React.createElement('h2', { className: 'greetings' }, 'Hello World');
const elem = (
  <div>
    <h2 className="text">{text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button></button>
    <button />
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  elem
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
