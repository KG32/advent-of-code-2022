"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
class AOC22 {
    constructor(fileName) {
        const path = `${process.cwd()}/inputs/${fileName}`;
        const input = node_fs_1.default.readFileSync(path, 'utf8');
        this.data = input.split('\n')[0].split(',');
        this.partsSolutions = {
            part1: null,
            part2: null
        };
    }
    get solutions() {
        const { partsSolutions: solution } = this;
        return `${this.constructor.name}:\npart1: ${solution.part1}\npart2: ${solution.part2}`;
    }
}
exports.default = AOC22;
