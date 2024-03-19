import { useNavigate } from 'react-router-dom';
import {FC, useState, useEffect} from "react";

interface SetupProps {
    setTitle: (title: string) => void;
};

export const Setup: FC<SetupProps> = ({ setTitle }) => {

    const [ballotTitle, setBallotTitle] = useState<string>("");
    const [playerName, setPlayerName] = useState<string>("");

    useEffect(
        () => setTitle("Setup")
    );

    const nav = useNavigate();

    return (
        <>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <input
                    type="text"
                    className="grow"
                    placeholder="Ballot title"
                    onChange={(event) => setBallotTitle(event.target.value)} 
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input
                    type="text"
                    className="grow"
                    placeholder="Your name"
                    onChange={(event) => setPlayerName(event.target.value)}
                />
            </label>

            <button
                className="btn btn-wide btn-primary"
                onClick={() => nav('/play')}
                disabled={!playerName || !ballotTitle}
            >
                Start the game
            </button>

            <p>{playerName}</p>
            <p>{ballotTitle}</p>
        </>
    );
};