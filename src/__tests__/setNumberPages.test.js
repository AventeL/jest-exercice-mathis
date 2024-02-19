import {setNumberPages} from "../setNumberPages";

describe('setNumberPages', () => {
    test.each([
        [undefined, undefined, 1],
        [1, 1, 1],
        [1, 2, 1],
        [2, 1, 1],
        [10, 4, 2],
        [10, 3, 3],
        [0, -5, -1],
        [5, 0, Infinity],
    ])('setNumberPages({ total: $t, max: $m }) = $r', (total, max, expected) => {
        expect(setNumberPages({total, max})).toEqual(expected);
    });
});