import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './components/App';
import Blocks from './components/Blocks';
import ConductTransaction from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/blocks",
    element: <Blocks></Blocks>
  },
  {
    path: "/conduct-transaction",
    element: <ConductTransaction></ConductTransaction>
  },
  {
    path: "/transaction-pool",
    element: <TransactionPool></TransactionPool>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
