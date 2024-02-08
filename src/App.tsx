import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";

const Setup = () => {
    return (
        <h3>Setup</h3>
    );
};

const Play = () => {
    return (
        <>
            <h3>Play</h3>
            <p>are you ready for it??</p>
        </>
    );
};

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/setup",
            element: <Setup />,
        },
{
            path: "/play",
            element: <Play />,
        },
    ]);

    return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
    );
}

export default App;
