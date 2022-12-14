import AOC22 from './aoc22';

enum OverlapType {
    FULL,
    PARTIAL
}

class Day4 extends AOC22 {
    constructor(...props: [string, string]) {
        super(...props);
    }

    #convertRangeToPoints(range: string): number[] {
        return range.split('-').map(n => Number(n));
    }

    #checkForOverlap(input: string, mode: OverlapType): boolean {
        const [range1, range2] = input.split(',');
        const [range1Start, range1End] = this.#convertRangeToPoints(range1);
        const [range2Start, range2End] = this.#convertRangeToPoints(range2);
        switch (mode) {
            case OverlapType.FULL:
                return (
                    ((range1Start >= range2Start && range1Start <= range2End) && (range1End <= range2End)) ||
                    ((range2Start >= range1Start && range2Start <= range1End) && (range2End <= range1End))
                );
            case OverlapType.PARTIAL:
                return (
                    (range1Start >= range2Start && range1Start <= range2End) ||
                    (range2Start >= range1Start && range2Start <= range1End)
                )
            default:
                throw new Error(`${OverlapType[mode]} overlap not implemented`);
        }

    }

    #calculateOverlaps(data: string[], overlapType: OverlapType): number {
        let overlaps = 0;
        data.forEach(input => {
            const overlap: boolean = this.#checkForOverlap(input, overlapType);
            if (overlap) overlaps++;
        });

        return overlaps;
    }

    solvePart1(): number {
        return this.#calculateOverlaps(this.data, OverlapType.FULL);
    }

    solvePart2(): number {
        return this.#calculateOverlaps(this.data, OverlapType.PARTIAL);
    }
}

export default new Day4('day4.txt', '\n');
