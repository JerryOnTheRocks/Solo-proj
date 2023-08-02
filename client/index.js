//this file is the webpack entry point for our application. Hangs React app off of #contents in index.html
//no need to add Provider store since we wont be using redux

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
