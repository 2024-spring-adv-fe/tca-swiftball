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

export const SwiftballPoints = {
    Lover: {
        totalPossiblePoints : 9,
        predictions: {
            lover_bodysuit: 5,
            the_man_jacket: 2,
            lover_guitar: 2
        }
    },
    Fearless: {
        totalPossiblePoints: 5,
        predictions: {
            fearless_dress: 5
        }
    },
    Evermore: {
        totalPossiblePoints: 7,
        predictions: {
            evermore_dress: 2,
            champagne_problems_cheer: 5
        }
    },
    Reputation: {
        totalPossiblePoints: 13,
        predictions: {
            reputation: 13
        }
    },
    Speak_Now: {
        totalPossiblePoints: 8,
        predictions: {
            speak_now_dress: 8
        }
    },
    Red: {
        totalPossiblePoints: 7,
        predictions: {
            tt_shirt: 7
        }
    },
    Folklore: {
        totalPossiblePoints: 8,
        predictions: {
            folklore_dress: 8
        }
    },
    NineteenEightyNine: {
        totalPossiblePoints: 6,
        predictions: {
            nineteen_eighty_nine_set: 6
        }
    },
    Surprise: {
        totalPossiblePoints: 32,
        predictions: {
            guitar: {
                speech: 2,
                album: 7,
                song: 7
            },
            piano: {
                speech: 2,
                album: 7,
                song: 7
            }
        }
    },
    Midnights: {
        totalPossiblePoints: 8,
        predictions: {
            midnights_tshirt_dress: 2,
            midnight_rain_bodysuit: 3,
            karma_jacket: 3
        }
    },
    Misc: {
        totalPossiblePoints: 10,
        predictions: {
            special_guest: 5,
            unhinged: 5
        }
    },
}

type Swiftball = {
    Lover: {
        lover_bodysuit: LoverBodysuit,
        the_man_jacket: TheManJacket,
        lover_guitar: LoverGuitar,
        points: typeof SwiftballPoints["Lover"]
    },
    Fearless: {
        fearless_dress: FearlessDress,
        points: typeof SwiftballPoints["Fearless"]
    },
    Evermore: {
        evermore_dress: EvermoreDress,
        champagne_problems_cheer: ChampagneProblemsCheer,
        points: typeof SwiftballPoints["Evermore"]
    },
    Reputation: {
        reputation: Reputation,
        points: typeof SwiftballPoints["Reputation"]
    },
    Speak_Now: {
        speak_now_dress: SpeakNowDress,
        points: typeof SwiftballPoints["Speak_Now"]
    },
    Red: {
        tt_shirt: TwentyTwoShirt,
        points: typeof SwiftballPoints["Red"]
    },
    Folklore: {
        folklore_dress: FolkloreDress,
        points: typeof SwiftballPoints["Folklore"]
    },
    NineteenEightyNine: {
        nineteen_eighty_nine_set: NineteenEightyNineSet,
        points: typeof SwiftballPoints["NineteenEightyNine"]
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
        },
        points: typeof SwiftballPoints["Surprise"]
    },
    Midnights: {
        midnights_tshirt_dress: MidnightsTshirtDress,
        midnight_rain_bodysuit: MidnightRainBodysuit,
        karma_jacket: KarmaJacket,
        points: typeof SwiftballPoints["Midnights"]
    },
    Misc: {
        special_guest: boolean,
        unhinged: boolean,
        points: typeof SwiftballPoints["Misc"]
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

type ScorePoints = {
    total_points: number;
    average_points: number;
}

type ScoreAccuracies = {
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
    misc_accuracy: number;
};

export type LeaderboardEntry = {
    player: string;
    ballots: number;
    points: ScorePoints;
    accuracies: ScoreAccuracies;
};