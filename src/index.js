import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, AppDataProvider } from './Context/index';

ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <AppDataProvider>
          <App />
        </AppDataProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
