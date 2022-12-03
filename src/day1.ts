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

    solvePart1(): number {
        let mostCalories = 0;
        const { inventories } = this;
        inventories.forEach(inventory => {
            const inventorySum = this.calcCaloriesSum(inventory);
            if (inventorySum > mostCalories) mostCalories = inventorySum;
        });

        return mostCalories;
    }

    solvePart2(): number {
        const caloriesSums = this.inventories.map(inv => this.calcCaloriesSum(inv)).sort((a, b) => b - a);
        return caloriesSums[0] + caloriesSums[1] + caloriesSums[2];
    }
}

export default new Day1('day1.txt', '\n');
