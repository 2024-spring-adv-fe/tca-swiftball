import { useNavigate } from 'react-router-dom';
import {FC, useEffect} from "react";

export const AppTitle = "Swiftball";

interface HomeProps {
    setTitle: (title: string) => void;
}


export const Home: FC<HomeProps> = ({setTitle}) => {
    useEffect(
        () => setTitle(AppTitle)
    );

    const nav = useNavigate();

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => nav('/setup')}
            >
                Play
            </button>
            <button
                className="btn btn-secondary"
                onClick={() => nav('/leaderboard')}
            >
                Leaderboard
            </button>
        </>
    );
};