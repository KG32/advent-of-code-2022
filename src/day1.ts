import AOC22 from './aoc22';

class Day1 extends AOC22 {
    inventories: number[][];

    constructor(...props: [string, string]) {
        super(...props);
        this.data = this.data.map(d => d === '' ? null : Number(d));
        this.inventories = [];
        this.populateInventories();
    }

    populateInventories(): void {
        const { data } = this;
        const inventories: number[][] = [];
        for (let i = 0; i < data.length; i++) {
            const group: number[] = [data[i]];
            for (let j = i + 1; j < data.length; j++) {
                const next = data[j];
                if (!next) {
                    i = j;
                    break;
                };
                group.push(next);
            }
            inventories.push(group);
        }
        this.inventories = inventories;
    }

    calcCaloriesSum(inventory: number[]): number {
        return inventory.reduce((acc, curr) => acc + curr);
    }

    solvePart1(): void {
        let mostCalories = 0;
        const { inventories } = this;
        inventories.forEach(inventory => {
            const inventorySum = this.calcCaloriesSum(inventory);
            if (inventorySum > mostCalories) mostCalories = inventorySum;
        });
        this.partsSolutions.part1 = mostCalories;
    }

    solvePart2(): void {
        const caloriesSums = this.inventories.map(inv => this.calcCaloriesSum(inv)).sort((a, b) => b - a);
        this.partsSolutions.part2 = caloriesSums[0] + caloriesSums[1] + caloriesSums[2];
    }
}

const day1 = new Day1('day1.txt', '\n');
day1.solvePart1();
day1.solvePart2();
console.log(day1.solutions);
