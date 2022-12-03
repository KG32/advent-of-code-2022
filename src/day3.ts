import AOC22 from './aoc22';

type Group = [string, string, string];

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

    groupRucksacks(rucksacks: string[]): Group[] {
        const groups: Group[] = [];
        for (let i = 0; i < rucksacks.length; i += 3) {
            const group: Group = [rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]];
            groups.push(group);
        }
        return groups;
    }

    findCommonGroupItem(group: Group): string {
        const commonItem = group[0].split('').find(item => {
            return group[1].includes(item) && group[2].includes(item);
        });

        return commonItem || '';
    };

    solvePart1(): number {
        const { data } = this;
        let prioritiesSum = 0;
        data.forEach(backpack => {
            const commonItems = this.getCommonItems(backpack);
            const backpackSum = commonItems.reduce((acc, item) => acc + this.getItemPriority(item),0);
            prioritiesSum += backpackSum;
        });
        // this.partsSolutions.part1 = prioritiesSum;
        return prioritiesSum
    }

    solvePart2(): number {
        const grouped = this.groupRucksacks(this.data);
        let sum = 0;
        grouped.forEach(group => {
            const commonItem = this.findCommonGroupItem(group);
            sum += this.getItemPriority(commonItem);
        });
        return sum;
    }
}

export default new Day3('day3.txt', '\n');
