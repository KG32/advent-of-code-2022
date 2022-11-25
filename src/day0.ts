import AOC22 from './aoc22';

class Day0 extends AOC22 {
    solve(): void {
        const { data } = this;
        const sum = data.reduce((acc, curr) => acc + Number(curr), 0);
        this.partsSolutions.part1 = sum;

        const avg = sum / data.length;
        this.partsSolutions.part2 = avg;
    }
}

const day0 = new Day0('day0.txt');
day0.solve();

console.log(day0.solutions);
