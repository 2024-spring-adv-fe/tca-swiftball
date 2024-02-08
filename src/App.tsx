import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <h3>Home</h3>,
        },
        {
            path: "/setup",
            element: <h3>Setup</h3>,
        },
{
            path: "/play",
            element: <h3>Play</h3>,
        },
    ]);

    return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
    );
}

export default App;
