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
          <button className="btn btn-primary">Primary</button>

          <div className="card w-96 bg-base-100 shadow-md">
              <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;
