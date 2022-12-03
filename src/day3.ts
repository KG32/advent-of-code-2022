import AOC22 from './aoc22';

class Day3 extends AOC22 {
    constructor(...props: [string, string]) {
        super(...props);
    }

    getItemPriority(item: string): number {
        const offset = item === item.toLowerCase() ? 96 : 38;
        return item.charCodeAt(0) - offset;
    }

    getCommonItems(backpackContent: string): string[] {
        const commonItems: string[] = [];
        const mid = backpackContent.length / 2;
        const comp1 = backpackContent.slice(0, mid);
        const comp2 = backpackContent.slice(mid, backpackContent.length);
        for (let i = 0; i < comp1.length; i++) {
            const item = comp1[i];
            if (commonItems.includes(item)) continue;
            if (comp2.includes(item)) {
                commonItems.push(item);
            }
        }

        return commonItems;
    }

    solvePart1(): void {
        const { data } = this;
        let prioritiesSum = 0;
        data.forEach(backpack => {
            const commonItems = this.getCommonItems(backpack);
            const backpackSum = commonItems.reduce((acc, item) => acc + this.getItemPriority(item),0);
            prioritiesSum += backpackSum;
        });
        this.partsSolutions.part1 = prioritiesSum;
    }
}

const day3 = new Day3('day3.txt', '\n');
day3.solvePart1();
day3.solve();
