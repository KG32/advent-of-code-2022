import AOC22 from './aoc22';

enum Shape {
    ROCK = 1,
    PAPER,
    SCISSORS
};

type RPCInput = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z';
type StrategyInput =  'X' | 'Y' | 'Z';
type ShapeCode = 'A' | 'B' | 'C';

const winMap = {
    [Shape.ROCK]: Shape.SCISSORS,
    [Shape.PAPER]: Shape.ROCK,
    [Shape.SCISSORS]: Shape.PAPER
};

const shapeMap = {
    A: Shape.ROCK,
    B: Shape.PAPER,
    C: Shape.SCISSORS,
    X: Shape.ROCK,
    Y: Shape.PAPER,
    Z: Shape.SCISSORS
};

const strategyToPoints = {
    X: 0,
    Y: 3,
    Z: 6
};

class Day2 extends AOC22 {
    constructor(...props: [string, string]) {
        super(...props)
    }

    convertInputToShape(input: RPCInput): Shape {
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

    solvePart2() {
        const { data } = this;
        let score = 0;
        data.forEach(pair => {
            const [opponentCode, strategyCode] = pair.split(' ');
            const targetPoints = strategyToPoints[strategyCode as StrategyInput];
            let playerCode: ShapeCode | null = null;
            if (targetPoints === 3) {
                playerCode = opponentCode;
            } else {
                const opponentShape = this.convertInputToShape(opponentCode);
                const targetShape = [Shape.ROCK, Shape.PAPER, Shape.SCISSORS]
                    .filter(shape => {
                        return shape !== opponentShape;
                    })
                    .find(shape => {
                        if (targetPoints === 6) {
                            return winMap[shape] === opponentShape;
                        } else {
                            return winMap[shape] !== opponentShape;
                        }
                    }
                );
                for (const key in shapeMap) {
                    if (shapeMap[key as ShapeCode] === targetShape) {
                        playerCode = key as ShapeCode;
                        break;
                    }
                }
            }
            score += this.calcRoundScore(`${opponentCode} ${playerCode}`);
        });
        this.partsSolutions.part2 = score;
    }
}

const day2 = new Day2('day2.txt', '\n');
day2.solve();
