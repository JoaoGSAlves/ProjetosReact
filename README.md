# React Projects

### Projetos desenvolvidos em materiais fornecidos através do curso do John Smilga na Udemy.

> O objetivo é aprender o máximo de React.

## Progresso

![](https://geps.dev/progress/20)

## Projetos 
### Links:
1. [Amazon Best-Sellers](https://amazonbestsellersproject.netlify.app)
2. [Tours Page](https://turismapp.netlify.app/)


```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider projects={projects}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
