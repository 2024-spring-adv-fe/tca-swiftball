import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import { Setup } from "./Setup";
import { Play } from "./Play";

import { SwiftballBallot } from "./SwiftballDefinition";
// import { getLeaderboard } from "./SwiftballScore";
import dummyData from "./dummyBallots.json";

const dummyBallots: SwiftballBallot[] = dummyData as SwiftballBallot[];

const App = () => {

    console.log(dummyBallots);

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
