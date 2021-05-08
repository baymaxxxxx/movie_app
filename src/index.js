import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  //./는 같은 directory


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//react application은 한번에 하나의 componenet만 redering할수있따.?
// 그래서 모든것은 App.js(application)에 넣어야한다. 
// application안에는 많은 component를 넣을 수 있따. 