import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ListView from '../pages/ListView';
import ContentView from '../pages/ContentView';
import WriteView from '../pages/WriteView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ListView />,
      },
      {
        path: 'content/:id',
        element: <ContentView />,
      },
      {
        path: 'write',
        element: <WriteView />,
      },
    ],
  },
]);

export default router;
