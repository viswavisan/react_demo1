import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* This will render Home at the root path */}
        <Route path="/home" element={<Home />} /> {/* This will render Home at /home */}
        <Route path="/Page1" element={<Page1 />} /> {/* Example for another route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Home() {return <h2>Home Page</h2>;}

function Page1() {return <h2>Page 1</h2>;}

function NotFound() {return <h2>Page not found</h2>;}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

reportWebVitals();