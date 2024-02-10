import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './redux/store.ts';
import './index.css';
import { Path } from './enums/enums.ts';
import { SignIn } from './pages';

const router = createBrowserRouter([
    {
        path: Path.home,
        element: <h1>Home</h1>,
    },
    {
        path: Path.signIn,
        element: <SignIn />,
    },
    {
        path: Path.signUp,
        element: <h1>Sign In</h1>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
