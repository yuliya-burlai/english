import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ReactQueryContext} from './context/ReactQueryContext';
import { worker } from './mocks/browser';

// Start the mocking conditionally.
// if (process.env.NODE_ENV === 'development') { //
  worker.start();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryContext>
      <App />
    </ReactQueryContext>
  </React.StrictMode>
)
