import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import About from './components/about.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/error.jsx';
import Contact from './components/Contact.jsx';
import Body from './components/Body.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Shimmer from './components/Shimmer.jsx';
import Cart from './components/Cart.jsx';
// eslint-disable-next-line react-refresh/only-export-components
const Instamart = lazy(() => import('./components/Instamart.jsx'));

const approuter = createBrowserRouter([
  {
  path: '/',
  element: <App/>,
  errorElement:<Error/>,
  children:[
    {
      path: '/',
      element: <Body/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/cart',
      element:<Cart/>
    },
    {
      path:'/restaurant/:restId',
      element:<RestaurantMenu/>
    },
    {
      path:'/instamart',
      element: ( <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>)
    },
  ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={approuter} />
  </React.StrictMode>,
)
