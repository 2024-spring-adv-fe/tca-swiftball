// LOVER
type lover_bodysuit =
    "pink and blue" |
    "blue and gold" |
    "barbie pink" |
    "new bodysuit"

type the_man_jacket =
    "black" |
    "silver" |
    "purple-ish" |
    "barbie jacket" |
    "new jacket"

type lover_guitar =
    "pink" |
    "blue"

// FEARLESS
type fearless_dress =
    "fringe" |
    "gold noodle" |
    "silver noodle" |
    "new dress"

// EVERMORE
type evermore_dress =
    "orange with flowers" |
    "bronze" |
    "new dress"

type champagne_problems_cheer =
    "< 1 minute" |
    "> 1, < 2 minutes" |
    "> 2, < 3 minutes" |
    "> 3 minutes" |
    "record breaker"

// REPUTATION
type reputation =
    "black and red snake jumpsuit" |
    "new jumpsuit"

// SPEAK NOW
type speak_now_dress =
    "pink ball gown" |
    "champange gown" |
    "tissue flower gown" |
    "silver gown" |
    "cupcake wrapper gown" |
    "elsa gown" |
    "new dress"

// RED
type tt_shirt =
    "we are never ever getting back together" |
    "who's taylor swift anyway?" |
    "a lot going on at the moment" |
    "new shirt"

// FOLKLORE
type folklore_dress =
    "purple" |
    "cream" |
    "pink lace" |
    "green" |
    "blue fairy" |
    "new dress"

// 1989
type nnen_set =
    "aquamarine green" |
    "sunrise boulevard orange" |
    "rose garden pink" |
    "crystal skies blue" |
    "new set"

// SURPRISE SONGS
type albums =
    "debut" |
    "fearless" |
    "speak now" |
    "red" |
    "1989" |
    "reputation" |
    "lover" |
    "folklore" |
    "evermore" |
    "midnights" |
    "non-album single"

// MIDNIGHTS
type midnights_tshirt_dress =
    "light blue" |
    "pink" |
    "purple" |
    "silver sequin" |
    "elusive blue/purple/pink" |
    "new dress"

type midnight_rain_bodysuit =
    "navy starbust pattern" |
    "blurple scallop pattern" |
    "rorshach cutout" |
    "new bodysuit"

type karma_jacket =
    "link pink" |
    "multicolor" |
    "magenta/red" |
    "blue" |
    "no jacket" |
    "new jacket"

type Swiftball = {
    Lover: {
        lover_bodysuit: lover_bodysuit,
        the_man_jacket: the_man_jacket,
        lover_guitar: lover_guitar,
    },
    Fearless: {
        fearless_dress: fearless_dress
    },
    evermore: {
        evermore_dress: evermore_dress,
        champagne_problems_cheer: champagne_problems_cheer
    },
    reputation: {
        reputation: reputation
    },
    Speak_Now: {
        speak_now_dress: speak_now_dress
    },
    Red: {
        tt_shirt: tt_shirt
    },
    folklore: {
        folklore_dress: folklore_dress
    },
    "1989": {
        "1989_set": nnen_set
    },
    surprise: {
        guitar: {
            speech: boolean,
            album: albums,
            song: string
        },
        piano: {
            speech: boolean,
            album: albums,
            song: string
        },
    },
    midnights: {
        midnights_tshirt_dress: midnights_tshirt_dress,
        midnight_rain_bodysuit: midnight_rain_bodysuit,
        karma_jacket: karma_jacket
    },
    misc: {
        special_guest: boolean,
        unhinged: boolean
    }
}

export type SwiftballBallot = {
    player: string;
    guesses: Swiftball
    answers: Swiftball
};

export type LeaderboardEntry = {
    player: string;
    overall_accuracy: number;
    lover_accuracy: number;
    fearless_accuracy: number;
    evermore_accuracy: number;
    reputation_accuracy: number;
    speak_now_accuracy: number;
    red_accuracy: number;
    folklore_accuracy: number;
    "1989_accuracy": number;
    surprise_accuracy: number;
    midnights_accuracy: number;
};