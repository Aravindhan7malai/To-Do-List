import ReactDom from 'react-dom/client';
import React, { useState } from 'react';
import './index.css';
import Todo from './App';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <div className='container'>
  <Todo />
  </div>
  </>
)