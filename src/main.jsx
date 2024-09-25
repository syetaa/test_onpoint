import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page2 from './assets/pages/page2/Page2.jsx'
import Page3 from './assets/pages/page3/Page3.jsx'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/page2',
    element: <Page2/>,
  },
  {
    path: '/page3',
    element: <Page3/>,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <RouterProvider router={router}/>
    <Footer/>
  </StrictMode>,
)
