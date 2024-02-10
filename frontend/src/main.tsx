import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './redux/store.ts';
import { Path } from './enums/enums.ts';
import { Home, SignIn, SignUp } from './pages';

import './index.css';

const router = createBrowserRouter([
    {
        path: Path.home,
        element: <Home />,
    },
    {
        path: Path.signIn,
        element: <SignIn />,
    },
    {
        path: Path.signUp,
        element: <SignUp />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
