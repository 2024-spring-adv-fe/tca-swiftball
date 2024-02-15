export type SwiftballBallot = {
    player: string;
    guesses: string[];
};

export type LeaderboardEntry = {
    wins: number;
    losses: number;
    avg: number;
    name: string;
};