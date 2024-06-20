import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider } from 'react-redux';
import store from './data/store.ts';
import Layout from './routes/Layout.tsx';
import Error from './components/page/Error/index.tsx';
import Cart from './components/page/Cart/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/page/Home/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
