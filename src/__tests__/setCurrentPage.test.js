import {setCurrentPage} from "../setCurrentPage";

describe('setCurrentPage', () => {
    test.each([
        [0, 0, 1],
        [0, 5, 1],
        [1, 1, 1],
        [1, 2, 2],
        [2, 5, 3],
        [-1, 1, -1],
        [-1, 2, -2],
        [-2, 5, -2],
        [3, 1, 1],
        [-3, 1, 1],
        [-3, -1, 1],
        [1, -3, -3],
        [-1, -3, 3],
    ])('setCurrentPage({ max: %p, skip: %p }) = $r', (max, skip, result) => {
        expect(setCurrentPage({max, skip})).toEqual(result);
    });
});