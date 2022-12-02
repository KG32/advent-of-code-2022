import fs from 'node:fs';

interface Solution {
    part1: any;
    part2: any
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
        return `${this.constructor.name}:\npart1: ${solution.part1}\npart2: ${solution.part2}`;
    }
}

export default AOC22;
