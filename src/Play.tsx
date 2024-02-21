import { useNavigate } from 'react-router-dom';
import { SwiftballBallot } from './SwiftballDefinition';
import { FC } from 'react';

import newDummyBallot from "./newDummyBallot.json";
const dummyBallot: SwiftballBallot = newDummyBallot as SwiftballBallot;

interface PlayProps {
    addNewBallot: (ballot: SwiftballBallot) => void;
}

export const Play: FC<PlayProps> = ({ addNewBallot }) => {

    const nav = useNavigate();

    return (
        <>
            <h3>Play</h3>
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