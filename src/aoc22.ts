import fs from 'node:fs';

interface Solution {
    part1: any;
    part2: any;
}

class AOC22 {
    data: any[];
    partsSolutions: Solution;

    constructor(fileName: string, separator: string) {
        const path = `${process.cwd()}/inputs/${fileName}`;
        const input = fs.readFileSync(path, 'utf8');
        this.data = input.split(separator);
        this.data.pop();

        this.partsSolutions = {
            part1: null,
            part2: null
        }
    }

    get solutions(): string {
        const { partsSolutions: solution } = this;
        return `${this.constructor.name}:\n\ part1: ${solution.part1}\n part2: ${solution.part2}\n`;
    }

    solvePart1(): void {}

    solvePart2(): void {}

    solve() {
        this.partsSolutions.part1 = this.solvePart1();
        this.partsSolutions.part2 = this.solvePart2();
        console.log(this.solutions);
    }
}

export default AOC22;
