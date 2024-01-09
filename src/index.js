import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Upload from './pdf_upload';
import Header from './header';


function App() {
  return (
    <div className='container'>
      <Header />
      <Upload />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
