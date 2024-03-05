import { SwiftballBallot } from "../SwiftballDefinition";
import { SwiftballPoints } from "../SwiftballDefinition";

interface ScoreReturn {
    score: number,
    totalPotentialScore: number
}

export const calcLoverScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Lover.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Lover.lover_bodysuit === ballot.answers.Lover.lover_bodysuit) {
            score += SwiftballPoints.Lover.predictions.lover_bodysuit;
        }

        if (ballot.guesses.Lover.the_man_jacket === ballot.answers.Lover.the_man_jacket) {
            score += SwiftballPoints.Lover.predictions.the_man_jacket;
        }

        if (ballot.guesses.Lover.lover_guitar === ballot.answers.Lover.lover_guitar) {
            score += SwiftballPoints.Lover.predictions.lover_guitar;
        }
    });

    return {score, totalPotentialScore};
};

export const calcFearlessScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Fearless.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Fearless.fearless_dress === ballot.answers.Fearless.fearless_dress) {
            score += SwiftballPoints.Fearless.predictions.fearless_dress;
        };
    });

    return {score, totalPotentialScore};
};

export const calcEvermoreScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Evermore.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Evermore.evermore_dress === ballot.answers.Evermore.evermore_dress) {
            score += SwiftballPoints.Evermore.predictions.evermore_dress;
        };

        if (ballot.guesses.Evermore.champagne_problems_cheer === ballot.answers.Evermore.champagne_problems_cheer) {
            score += SwiftballPoints.Evermore.predictions.champagne_problems_cheer;
        };
    });

    return {score, totalPotentialScore};
};

export const calcReputationScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Reputation.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Reputation.reputation === ballot.answers.Reputation.reputation) {
            score += SwiftballPoints.Reputation.predictions.reputation;
        };
    });

    return {score, totalPotentialScore};
};

export const calcSpeakNowScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Speak_Now.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Speak_Now.speak_now_dress === ballot.answers.Speak_Now.speak_now_dress) {
            score += SwiftballPoints.Speak_Now.predictions.speak_now_dress;
        };
    });

    return {score, totalPotentialScore};
};

export const calcRedScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Red.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Red.tt_shirt === ballot.answers.Red.tt_shirt) {
            score += SwiftballPoints.Red.predictions.tt_shirt;
        };
    });

    return {score, totalPotentialScore};
};

export const calcFolkloreScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Folklore.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Folklore.folklore_dress === ballot.answers.Folklore.folklore_dress) {
            score += SwiftballPoints.Folklore.predictions.folklore_dress;
        };
    });

    return {score, totalPotentialScore};
};

export const calcNineteenEightyNineScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.NineteenEightyNine.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.NineteenEightyNine.nineteen_eighty_nine_set === ballot.answers.NineteenEightyNine.nineteen_eighty_nine_set) {
            score += SwiftballPoints.NineteenEightyNine.predictions.nineteen_eighty_nine_set;
        };
    });

    return {score, totalPotentialScore};
};

export const calcSurpriseScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Surprise.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Surprise.guitar.speech === ballot.answers.Surprise.guitar.speech) {
            score += SwiftballPoints.Surprise.predictions.guitar.speech;
        };

        if (ballot.guesses.Surprise.guitar.album === ballot.answers.Surprise.guitar.album) {
            score += SwiftballPoints.Surprise.predictions.guitar.album;
        };

        if (ballot.guesses.Surprise.guitar.song === ballot.answers.Surprise.guitar.song) {
            score += SwiftballPoints.Surprise.predictions.guitar.song;
        };

        if (ballot.guesses.Surprise.piano.speech === ballot.answers.Surprise.piano.speech) {
            score += SwiftballPoints.Surprise.predictions.piano.speech;
        };

        if (ballot.guesses.Surprise.piano.album === ballot.answers.Surprise.piano.album) {
            score += SwiftballPoints.Surprise.predictions.piano.album;
        };

        if (ballot.guesses.Surprise.piano.song === ballot.answers.Surprise.piano.song) {
            score += SwiftballPoints.Surprise.predictions.piano.song;
        };
    });

    return {score, totalPotentialScore};
};

export const calcMidnightsScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Midnights.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Midnights.midnights_tshirt_dress === ballot.answers.Midnights.midnights_tshirt_dress) {
            score += SwiftballPoints.Midnights.predictions.midnights_tshirt_dress;
        };

        if (ballot.guesses.Midnights.midnight_rain_bodysuit === ballot.answers.Midnights.midnight_rain_bodysuit) {
            score += SwiftballPoints.Midnights.predictions.midnight_rain_bodysuit;
        };

        if (ballot.guesses.Midnights.karma_jacket === ballot.answers.Midnights.karma_jacket) {
            score += SwiftballPoints.Midnights.predictions.karma_jacket;
        };
    });

    return {score, totalPotentialScore};
};

export const calcMiscScore = (ballot: SwiftballBallot[]):ScoreReturn => {
    const totalPotentialScore = SwiftballPoints.Misc.totalPossiblePoints;
    let score = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Misc.special_guest === ballot.answers.Misc.special_guest) {
            score += SwiftballPoints.Misc.predictions.special_guest;
        };

        if (ballot.guesses.Misc.unhinged === ballot.answers.Misc.unhinged) {
            score += SwiftballPoints.Misc.predictions.unhinged;
        };
    });

    return {score, totalPotentialScore};
};