import { SwiftballBallot } from "./SwiftballDefinition";
import { LeaderboardEntry } from "./SwiftballDefinition";

import {
    calcLoverAccuracy,
    calcFearlessAccuracy,
    calcEvermoreAccuracy,
    calcReputationAccuracy,
    calcSpeakNowAccuracy,
    calcRedAccuracy,
    calcFolkloreAccuracy,
    calcNineteenEightyNineAccuracy,
    calcSurpriseAccuracy,
    calcMidnightsAccuracy
} from "./calc/calcAccuracy";

export const getPreviousPlayers = (results: SwiftballBallot[]) => {

    const players:string[] = results.flatMap(
        x => x.player
    );

    return [...new Set(players)]

};

export const getLeaderboard = (ballot: SwiftballBallot[]): LeaderboardEntry[] => {

    const players:string[] = getPreviousPlayers(ballot);

    const leaderboard = players.map(
        x => getLeaderboardEntryForPlayer(ballot, x)
    );

    return leaderboard.sort((a, b) => {
        if (b.overall_accuracy !== a.overall_accuracy) {
            return b.overall_accuracy - a.overall_accuracy;
        } else if (b.ballots !== a.ballots) {
            return b.ballots - a.ballots;
        } else {
            return a.player.localeCompare(b.player);
        }
    });
};

export const getLeaderboardEntryForPlayer = (ballots: SwiftballBallot[], player: string): LeaderboardEntry => {

    const ballot = ballots.filter(
        b => b.player === player
    );

    const ballotsPlayed = ballot.length;
    const loverAccuracy: number = calcLoverAccuracy(ballot);
    const fearlessAccuracy: number = calcFearlessAccuracy(ballot);
    const evermoreAccuracy: number = calcEvermoreAccuracy(ballot);
    const reputationAccuracy: number = calcReputationAccuracy(ballot);
    const speakNowAccuracy:number = calcSpeakNowAccuracy(ballot);
    const redAccuracy:number = calcRedAccuracy(ballot);
    const folkloreAccuracy:number = calcFolkloreAccuracy(ballot);
    const nineteenEightyNineAccuracy:number = calcNineteenEightyNineAccuracy(ballot);
    const surpriseAccuracy:number = calcSurpriseAccuracy(ballot);
    const midnightsAccuracy:number = calcMidnightsAccuracy(ballot);

    const overallAccuracy: number = (loverAccuracy + fearlessAccuracy + evermoreAccuracy + reputationAccuracy + speakNowAccuracy + redAccuracy + folkloreAccuracy + nineteenEightyNineAccuracy + surpriseAccuracy + midnightsAccuracy) / 10;

    return {
        player: player,
        ballots: ballotsPlayed,
        overall_accuracy: overallAccuracy,
        lover_accuracy: loverAccuracy,
        fearless_accuracy: fearlessAccuracy,
        evermore_accuracy: evermoreAccuracy,
        reputation_accuracy: reputationAccuracy,
        speak_now_accuracy: speakNowAccuracy,
        red_accuracy: redAccuracy,
        folklore_accuracy: folkloreAccuracy,
        nineteen_eighty_nine_accuracy: nineteenEightyNineAccuracy,
        surprise_accuracy: surpriseAccuracy,
        midnights_accuracy: midnightsAccuracy,
    };
};

