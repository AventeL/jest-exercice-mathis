import setConfirmClassModifier from "../setConfirmClassModifier";

describe('setConfirmClassModifier', () => {
    test('setConfirmClassModifier(true) doit retourner confirm disabled', () => {
        const result = setConfirmClassModifier(true);
        expect(result).toEqual('confirm disabled');
    });

    test('setConfirmClassModifier(false) doit retourner confirm success', () => {
        const result = setConfirmClassModifier(false);
        expect(result).toEqual('confirm success');
    });

    test('setConfirmClassModifier(false, $p) doit retourner $p success', () => {
        const p = 'test';
        const result = setConfirmClassModifier(false, p);
        expect(result).toEqual('test success');
    });

    test('setConfirmClassModifier(true, $p) doit retourner $p disabled', () => {
        const p = 'test';
        const result = setConfirmClassModifier(true, p);
        expect(result).toEqual('test disabled');
    });
});