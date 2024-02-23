import { useNavigate } from 'react-router-dom';
import {LeaderboardEntry} from '../Swiftball/SwiftballDefinition';
import {FC, useEffect} from 'react';

interface LeaderboardProps {
    leaderboardData: LeaderboardEntry[];
    setTitle: (title: string) => void;
}


export const Leaderboard: FC<LeaderboardProps> = ({ leaderboardData, setTitle }) => {
    useEffect(
        () => setTitle("Leaderboard")
    );

    const nav = useNavigate();

    return (
        <>
            <button className="btn btn-link" onClick={() => { nav(-1); }}>
                back home
            </button>
            {
                leaderboardData.length > 0
                    ? (
                        <table className='table'>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Ballots</th>
                                <th>Overall</th>
                                <th>Lover</th>
                                <th>Fearless</th>
                                <th>Evermore</th>
                                <th>Reputation</th>
                                <th>Speak Now</th>
                                <th>Red</th>
                                <th>Folklore</th>
                                <th>1989</th>
                                <th>Midnights</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                               leaderboardData.map(b => (
                                   <tr key={b.player}>
                                       <td>{b.player}</td>
                                       <td>
                                           {b.ballots}
                                       </td>
                                       <td>
                                           {b.overall_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.lover_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.fearless_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.evermore_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.reputation_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.speak_now_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.red_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.folklore_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.nineteen_eighty_nine_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.midnights_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                   </tr>
                               ))
                            }
                            </tbody>
                        </table>
                    )
                    : (<p>Play a game to see the leaderboard!</p>)
            }
        </>
    );
};