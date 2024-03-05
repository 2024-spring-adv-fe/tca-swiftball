// LOVER
enum LoverBodysuit {
    pink_and_blue,
    blue_and_gold,
    barbie_pink,
    new_bodysuit
}

enum TheManJacket {
    black,
    silver,
    purpleish,
    barbie,
    new_jacket
}

enum LoverGuitar {
    pink,
    blue
}

// FEARLESS
enum FearlessDress {
    fringe,
    gold_noodle,
    silver_noodle,
    new_dress
}

// EVERMORE
enum EvermoreDress {
    orange_with_flowers,
    bronze,
    new_dress
}

enum ChampagneProblemsCheer {
    less_than_1_minute,
    greater_than_1_less_than_2_minutes,
    greater_than_2_less_than_3_minutes,
    greater_than_3_minutes,
    record_breaker
}

// REPUTATION
enum Reputation {
    black_and_red_snake_jumpsuit,
    new_jumpsuit
}

// SPEAK NOW
enum SpeakNowDress {
    pink_ball_gown,
    champange_gown,
    tissue_flower_gown,
    silver_gown,
    cupcake_wrapper_gown,
    elsa_gown,
    new_dress
}

// RED
enum TwentyTwoShirt {
    we_are_never_ever_getting_back_together,
    whos_taylor_swift_anyway,
    a_lot_going_on_at_the_moment,
    new_shirt
}

// FOLKLORE
enum FolkloreDress {
    purple,
    cream,
    pink_lace,
    green,
    blue_fairy,
    new_dress
}

// 1989
enum NineteenEightyNineSet {
    aquamarine_green,
    sunrise_boulevard_orange,
    rose_garden_pink,
    crystal_skies_blue,
    new_set
}

// SURPRISE SONGS
enum Albums {
    debut,
    fearless,
    speak_now,
    red,
    nineteen_eighty_nine,
    reputation,
    lover,
    folklore,
    evermore,
    midnights,
    non_album_single
}

// MIDNIGHTS
enum MidnightsTshirtDress {
    light_blue,
    pink,
    purple,
    silver_sequin,
    elusive_blue_purple_pink,
    new_dress
}

enum MidnightRainBodysuit {
    navy_starbust_pattern,
    blurple_scallop_pattern,
    rorshach_cutout,
    new_bodysuit
}

enum KarmaJacket {
    link_pink,
    multicolor,
    magenta_red,
    blue,
    no_jacket,
    new_jacket
}

type Swiftball = {
    Lover: {
        lover_bodysuit: LoverBodysuit,
        the_man_jacket: TheManJacket,
        lover_guitar: LoverGuitar
    },
    Fearless: {
        fearless_dress: FearlessDress
    },
    Evermore: {
        evermore_dress: EvermoreDress,
        champagne_problems_cheer: ChampagneProblemsCheer
    },
    Reputation: {
        reputation: Reputation
    },
    Speak_Now: {
        speak_now_dress: SpeakNowDress
    },
    Red: {
        tt_shirt: TwentyTwoShirt
    },
    Folklore: {
        folklore_dress: FolkloreDress
    },
    NineteenEightyNine: {
        nineteen_eighty_nine_set: NineteenEightyNineSet
    },
    Surprise: {
        guitar: {
            speech: boolean,
            album: Albums,
            song: string
        },
        piano: {
            speech: boolean,
            album: Albums,
            song: string
        }
    },
    Midnights: {
        midnights_tshirt_dress: MidnightsTshirtDress,
        midnight_rain_bodysuit: MidnightRainBodysuit,
        karma_jacket: KarmaJacket
    },
    Misc: {
        special_guest: boolean,
        unhinged: boolean
    }
}

enum BallotVersion {
    v1 = 1
}

export type SwiftballBallot = {
    player: string;
    guesses: Swiftball;
    answers: Swiftball;
    date: string; // ISO 8601
    ballot_version: BallotVersion;
};

type SwiftballAccuracies = {
    overall_accuracy: number;
    lover_accuracy: number;
    fearless_accuracy: number;
    evermore_accuracy: number;
    reputation_accuracy: number;
    speak_now_accuracy: number;
    red_accuracy: number;
    folklore_accuracy: number;
    nineteen_eighty_nine_accuracy: number;
    surprise_accuracy: number;
    midnights_accuracy: number;
};

export type LeaderboardEntry = {
    player: string;
    ballots: number;
    accuracies: SwiftballAccuracies;
};