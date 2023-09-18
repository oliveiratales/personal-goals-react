import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Home from "./routes/Home";
import CreateGoal from "./routes/CreateGoal";
import Goal from './routes/Goal.jsx';
import EditGoal from './routes/EditGoal.jsx';

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/goal/new",
      element: <CreateGoal />,
    },
    {
      path: "/goal/:id",
      element: <Goal />,
    },
    {
      path: "/goal/edit/:id",
      element: <EditGoal />,
    },
  ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
