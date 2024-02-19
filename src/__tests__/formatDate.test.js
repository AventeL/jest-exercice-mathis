import {formatDate, isValidDate, setDate} from "../formatDate";

describe('formatDate', () => {
    test("doit retourner une date formatée jj/MM/AAAA", () => {
            const date = "2020-01-01";
            const expected = "01/01/2020";
            expect(formatDate(date)).toEqual(expected);
        }
    );

    test("formatDate() doit retourner une date formatée 01/01/1970", () => {
            const expected = "01/01/1970";
            expect(formatDate()).toEqual(expected);
        }
    );

    test("formatDate('') doit retourner une chaîne vide", () => {
            const expected = "";
            expect(formatDate('')).toEqual(expected);
        }
    );
});

describe('isValidDate', () => {
    test("doit retourner true si la date est valide", () => {
        expect(isValidDate('2020-01-01')).toEqual(true);
    });

    test("doit retourner false si la date est invalide", () => {
        expect(isValidDate(12)).toEqual(false);
    });

    test("doit retourner false si la date est null", () => {
        expect(isValidDate(null)).toEqual(false);
    });

    test("doit retourner false si la date est undefinied", () => {
        expect(isValidDate(undefined)).toEqual(false);
    });
    
});

describe('setDate', () => {
    test('doit retourner une date formatée jj/MM/AAAA', () => {
        const date = "01-01-2020";
        const expected = "01/01/2020";
        expect(setDate({date: date})).toEqual(expected);
    });

    test("doit renvoyer '' si la date n'est pas valide", () => {
        const date = null;
        const expected = '';
        expect(setDate({date: date})).toEqual(expected);
    });
});