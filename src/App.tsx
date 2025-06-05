import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BaseballPage from './pages/BaseballPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/baseball',
    element: <BaseballPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
