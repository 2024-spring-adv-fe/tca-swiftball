import { useNavigate } from 'react-router-dom';
import { SwiftballBallot } from './SwiftballDefinition';
import {FC, useEffect} from 'react';

import newDummyBallot from "./newDummyBallot.json";
const dummyBallot: SwiftballBallot = newDummyBallot as SwiftballBallot;

interface PlayProps {
    addNewBallot: (ballot: SwiftballBallot) => void;
    setTitle: (title: string) => void;
}

export const Play: FC<PlayProps> = ({ addNewBallot, setTitle }) => {
    useEffect(
        () => setTitle("Play")
    );

    const nav = useNavigate();

    return (
        <>
            <button
                className="btn btn-link"
                onClick={() => {
                    addNewBallot(dummyBallot);
                    nav(-2);
                }}
            >
                donee
            </button>
        </>
    );
};