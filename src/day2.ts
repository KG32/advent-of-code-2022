import AOC22 from './aoc22';

enum Shape {
    ROCK = 1,
    PAPER,
    SCISSORS
};

type RPCInput = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z' ;

const winMap = {
    [Shape.ROCK]: Shape.SCISSORS,
    [Shape.PAPER]: Shape.ROCK,
    [Shape.SCISSORS]: Shape.PAPER
}

class Day2 extends AOC22 {
    constructor(...props: [string, string]) {
        super(...props)
    }

    convertInputToShape(input: RPCInput): Shape {
        const shapeMap = { A: Shape.ROCK, B: Shape.PAPER, C: Shape.SCISSORS, X: Shape.ROCK, Y: Shape.PAPER, Z: Shape.SCISSORS};
        return shapeMap[input];
    }

    calcRoundScore(pair: string): number {
        const [opponent, player] = pair.split(' ').map(input => this.convertInputToShape(input as RPCInput));
        let wlBonus: 0 | 3 | 6;
        if (player === opponent) {
            wlBonus = 3;
        } else {
            wlBonus = winMap[player] === opponent ? 6 : 0;
        }
        return player + wlBonus;
    }

    solvePart1() {
        const { data } = this;
        let score = 0;
        data.forEach(pair => {
            score += this.calcRoundScore(pair);
        });
        this.partsSolutions.part1 = score;
    }
}

const day2 = new Day2('day2.txt', '\n');
day2.solvePart1();
console.log(day2.solutions);
