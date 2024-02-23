import React, { useState } from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home, AppTitle } from "./pages/Home";
import { Leaderboard } from "./pages/Leaderboard";
import { Setup } from "./pages/Setup";
import { Play } from "./pages/Play";

import { SwiftballBallot } from "./Swiftball/SwiftballDefinition";
import { getLeaderboard } from "./Swiftball/SwiftballScore";
import dummyData from "./data/dummyBallots.json";

const dummyBallots: SwiftballBallot[] = dummyData as SwiftballBallot[];

const App = () => {

    const [title, setTitle] = useState(AppTitle);

    const [ballots, setBallots] = useState<SwiftballBallot[]>(dummyBallots);
    const addNewBallot = (ballot: SwiftballBallot) => setBallots([...ballots, ballot]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home
                setTitle={setTitle}
            />,
        },
        {
            path: "/leaderboard",
            element: <Leaderboard
                leaderboardData={getLeaderboard(ballots)}
                setTitle={setTitle}
            />,
        },
        {
            path: "/setup",
            element: <Setup
                setTitle={setTitle}
            />,
        },
{
            path: "/play",
            element: <Play
                addNewBallot={addNewBallot}
                setTitle={setTitle}
            />,
        },
    ]);

    return (
      <div className="App" data-theme="pastel">
          <div className={"navbar bg-base-300"}>
              <h1 className={ "text-lg font-semibold" }>
                  { title }
              </h1>
          </div>
          <div className={"p-3"}>
              <RouterProvider router={ router } />
          </div>
      </div>
    );
}

export default App;
