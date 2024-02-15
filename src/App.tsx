import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import { Setup } from "./Setup";
import { Play } from "./Play";
import {SwiftballBallot} from "./SwiftballDefinition";

const dummySwiftballBallots: SwiftballBallot[] = [
    {
        player: "Tom"
        , guesses: [
            "pink"
            , "green"
            , "blue"
            , "purple"
        ]
    }
    , {
        player: "John"
        , guesses: [
            "gold"
            , "green"
            , "green"
            , "pink"
        ]
    }
];

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
