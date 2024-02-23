import { SwiftballBallot } from "./SwiftballDefinition";
import { LeaderboardEntry } from "./SwiftballDefinition";

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

const calcLoverAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Lover.lover_bodysuit === ballot.answers.Lover.lover_bodysuit) guessIsCorrect();
        else total++;

        if (ballot.guesses.Lover.the_man_jacket === ballot.answers.Lover.the_man_jacket) guessIsCorrect();
        else total++;

        if (ballot.guesses.Lover.lover_guitar === ballot.answers.Lover.lover_guitar) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcFearlessAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Fearless.fearless_dress === ballot.answers.Fearless.fearless_dress) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcEvermoreAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Evermore.evermore_dress === ballot.answers.Evermore.evermore_dress) guessIsCorrect();
        else total++;

        if (ballot.guesses.Evermore.champagne_problems_cheer === ballot.answers.Evermore.champagne_problems_cheer) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcReputationAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Reputation.reputation === ballot.answers.Reputation.reputation) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcSpeakNowAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Speak_Now.speak_now_dress === ballot.answers.Speak_Now.speak_now_dress) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcRedAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Red.tt_shirt === ballot.answers.Red.tt_shirt) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcFolkloreAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Folklore.folklore_dress === ballot.answers.Folklore.folklore_dress) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcNineteenEightyNineAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.NineteenEightyNine.nineteen_eighty_nine_set === ballot.answers.NineteenEightyNine.nineteen_eighty_nine_set) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcSurpriseAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Surprise.guitar.speech === ballot.answers.Surprise.guitar.speech) guessIsCorrect();
        else total++;

        if (ballot.guesses.Surprise.guitar.album === ballot.answers.Surprise.guitar.album) guessIsCorrect();
        else total++;

        if (ballot.guesses.Surprise.guitar.song === ballot.answers.Surprise.guitar.song) guessIsCorrect();
        else total++;

        if (ballot.guesses.Surprise.piano.speech === ballot.answers.Surprise.piano.speech) guessIsCorrect();
        else total++;

        if (ballot.guesses.Surprise.piano.album === ballot.answers.Surprise.piano.album) guessIsCorrect();
        else total++;

        if (ballot.guesses.Surprise.piano.song === ballot.answers.Surprise.piano.song) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};

const calcMidnightsAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    const guessIsCorrect = () => {
        correct++;
        total++;
    };

    ballot.forEach(ballot => {
        if (ballot.guesses.Midnights.midnights_tshirt_dress === ballot.answers.Midnights.midnights_tshirt_dress) guessIsCorrect();
        else total++;

        if (ballot.guesses.Midnights.midnight_rain_bodysuit === ballot.answers.Midnights.midnight_rain_bodysuit) guessIsCorrect();
        else total++;

        if (ballot.guesses.Midnights.karma_jacket === ballot.answers.Midnights.karma_jacket) guessIsCorrect();
        else total++;
    });

    return total === 0 ? 0 : correct / total;
};