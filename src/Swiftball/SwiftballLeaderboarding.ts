import { SwiftballBallot } from "./SwiftballDefinition";
import { LeaderboardEntry } from "./SwiftballDefinition";

import {
    calcLoverScore,
    calcFearlessScore,
    calcEvermoreScore,
    calcReputationScore,
    calcSpeakNowScore,
    calcRedScore,
    calcFolkloreScore,
    calcNineteenEightyNineScore,
    calcSurpriseScore,
    calcMidnightsScore,
    calcMiscScore
} from "./calc/calcScore";

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
    calcMidnightsAccuracy,
    calcMiscAccuracy
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
        if (b.accuracies.overall_accuracy !== a.accuracies.overall_accuracy) {
            return b.accuracies.overall_accuracy - a.accuracies.overall_accuracy;
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
    console.log("ballots played:" + ballotsPlayed);

    const loverScoring = calcLoverScore(ballot);
    const fearlessScoring = calcFearlessScore(ballot);
    const evermoreScoring = calcEvermoreScore(ballot);
    const reputationScoring = calcReputationScore(ballot);
    const speakNowScoring = calcSpeakNowScore(ballot);
    const redScoring = calcRedScore(ballot);
    const folkloreScoring = calcFolkloreScore(ballot);
    const nineteenEightyNineScoring = calcNineteenEightyNineScore(ballot);
    const surpriseScoring = calcSurpriseScore(ballot);
    const midnightsScoring = calcMidnightsScore(ballot);
    const miscScoring = calcMiscScore(ballot);
    
    const totalPoints: number = loverScoring.score + fearlessScoring.score + evermoreScoring.score + reputationScoring.score + speakNowScoring.score + redScoring.score + folkloreScoring.score + nineteenEightyNineScoring.score + surpriseScoring.score + midnightsScoring.score + miscScoring.score;
    const averagePoints: number = totalPoints / ballotsPlayed;

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
    const miscAccuracy:number = calcMiscAccuracy(ballot);

    const overallAccuracy: number = (loverAccuracy + fearlessAccuracy + evermoreAccuracy + reputationAccuracy + speakNowAccuracy + redAccuracy + folkloreAccuracy + nineteenEightyNineAccuracy + surpriseAccuracy + midnightsAccuracy + miscAccuracy) / 11;

    return {
        player: player,
        ballots: ballotsPlayed,
        points: {
            total_points: totalPoints,
            average_points: averagePoints
        },
        accuracies: {
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
            misc_accuracy: miscAccuracy
        }
    };
};

