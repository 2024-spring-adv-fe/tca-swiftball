import React, { useState } from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import { Leaderboard } from "./Leaderboard";
import { Setup } from "./Setup";
import { Play } from "./Play";

import { SwiftballBallot } from "./SwiftballDefinition";
import { getLeaderboard } from "./SwiftballScore";
import dummyData from "./dummyBallots.json";

const dummyBallots: SwiftballBallot[] = dummyData as SwiftballBallot[];

const App = () => {

    const [title, setTitle] = useState("Swiftball");

    const [ballots, setBallots] = useState<SwiftballBallot[]>(dummyBallots);
    const addNewBallot = (ballot: SwiftballBallot) => setBallots([...ballots, ballot]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/leaderboard",
            element: <Leaderboard leaderboardData={getLeaderboard(ballots)} />,
        },
        {
            path: "/setup",
            element: <Setup />,
        },
{
            path: "/play",
            element: <Play addNewBallot={addNewBallot} />,
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
