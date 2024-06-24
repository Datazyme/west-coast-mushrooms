import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import MushroomDetails from './pages/MushroomDetails'
import MushroomFamilies from './pages/MushroomFamilies'
import MushroomEdibility from './pages/MushroomEdibility'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    //used in Outlet in layout
    children: [
      {index: true, element: <Home></Home>},
      {path: 'mushrooms/:id', element: <MushroomDetails></MushroomDetails>},
      {path: 'mushrooms/families/:family', element: <MushroomFamilies></MushroomFamilies>},
      {path: 'mushrooms/edibility/id', element: <MushroomEdibility></MushroomEdibility>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

