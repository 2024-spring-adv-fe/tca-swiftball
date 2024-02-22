import { useNavigate } from 'react-router-dom';
import {FC, useEffect} from "react";

interface SetupProps {
    setTitle: (title: string) => void;
};

export const Setup: FC<SetupProps> = ({ setTitle }) => {
    useEffect(
        () => setTitle("Setup")
    );

    const nav = useNavigate();

    return (
        <>
            <h3>Setup</h3>
            <button
                className="btn btn-link"
                onClick={() => nav('/play')}
            >
                Start the game
            </button>
        </>
    );
};