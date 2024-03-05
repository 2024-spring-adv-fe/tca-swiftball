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
                                <th>Ballots Submitted</th>
                                <th>Total Points</th>
                                <th>Average Points Per Ballot</th>
                                <th>Overall Accuracy</th>
                                <th>Lover Accuracy</th>
                                <th>Fearless Accuracy</th>
                                <th>Evermore Accuracy</th>
                                <th>Reputation Accuracy</th>
                                <th>Speak Now Accuracy</th>
                                <th>Red Accuracy</th>
                                <th>Folklore Accuracy</th>
                                <th>1989 Accuracy</th>
                                <th>Surprise Accuracy</th>
                                <th>Midnights Accuracy</th>
                                <th>Misc Accuracy</th>
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
                                           {b.points.total_points}
                                       </td>
                                       <td>
                                           {b.points.average_points}
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