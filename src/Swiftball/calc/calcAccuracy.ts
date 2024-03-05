import { SwiftballBallot } from "../SwiftballDefinition";

export const calcLoverAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcFearlessAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcEvermoreAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcReputationAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcSpeakNowAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcRedAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcFolkloreAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcNineteenEightyNineAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcSurpriseAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcMidnightsAccuracy = (ballot: SwiftballBallot[]):number => {
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

export const calcMiscAccuracy = (ballot: SwiftballBallot[]):number => {
    let correct = 0;
    let total = 0;

    ballot.forEach(ballot => {
        if (ballot.guesses.Misc.special_guest === ballot.answers.Misc.special_guest) correct++;
        else total++;

        if (ballot.guesses.Misc.unhinged === ballot.answers.Misc.unhinged) correct++;
        else total++;
    });

    return total === 0 ? 0 : correct / total;
}