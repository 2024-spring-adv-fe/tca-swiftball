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

    const totalBallots = leaderboardData.reduce((acc, b) => acc + b.ballots, 0);

    return (
        <>
            <button className="btn btn-link" onClick={() => { nav(-1); }}>
                back home
            </button>

            <p>Total Ballots: {totalBallots}</p>
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
                                <th>Surprise</th>
                                <th>Midnights</th>
                                <th>Misc</th>
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
                                           {b.accuracies.overall_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.lover_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.fearless_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.evermore_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.reputation_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.speak_now_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.red_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.folklore_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.nineteen_eighty_nine_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.surprise_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.midnights_accuracy.toLocaleString("en", {style: "percent"})}
                                       </td>
                                       <td>
                                           {b.accuracies.misc_accuracy.toLocaleString("en", {style: "percent"})}
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