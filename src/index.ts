import { argv } from 'node:process';
import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';

const days = [
    Day1,
    Day2,
    Day3
];

const daySelector = argv[2];
if (daySelector === undefined) {
    days.forEach(day => day.solve());
} else {
    const dayNo = Number(daySelector);
    if (Number.isNaN(dayNo)) throw new Error('Day must be a number');
    days[dayNo - 1].solve();
}
