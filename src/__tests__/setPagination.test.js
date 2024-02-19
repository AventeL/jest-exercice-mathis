import {setPagination} from '../setPagination.js';

describe('setPagination', () => {
    test.each([
        [{}, {total: 1, numberItems: 1, numberPages: 1, currentPage: 1}],
        [{total: 10, skip: 0, max: 20}, {total: 10, numberItems: 20, numberPages: 1, currentPage: 1}],
    ])('setPagination({%t,$s,$m}) = %d', (input, expected) => {
        expect(setPagination(input)).toEqual(expected);
    });
});
