"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aoc22_1 = __importDefault(require("./aoc22"));
class Day0 extends aoc22_1.default {
    solve() {
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
