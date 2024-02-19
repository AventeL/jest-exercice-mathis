import {setResponseError, STATUS_API, STATUS_HTTP_MESSAGES} from "../setResponseError";

describe('setResponseError', () => {
    test.each([
        [{anomaly: undefined, status: STATUS_API.WARNING}, {
            label: STATUS_HTTP_MESSAGES[status],
            detail: '',
            type: 'danger',
            iconName: 'alert'
        }],
        [{anomaly: undefined, status: STATUS_API.ERROR}, {
            label: STATUS_HTTP_MESSAGES[status],
            detail: '',
        }],
        [{anomaly: undefined, status: STATUS_API.CREATED}, {}],
        [{anomaly: undefined, status: STATUS_API.SUCCESS}, {}],
        [{anomaly: {label: 'test'}, status: STATUS_API.WARNING}, {
            label: 'test',
            detail: '',
            type: 'danger',
            iconName: 'alert'
        }], [{anomaly: {label: 'test', detail: 'test'}, status: STATUS_API.WARNING}, {
            label: 'test',
            detail: 'test',
            type: 'danger',
            iconName: 'alert'
        }],

    ])(
        'setResponseError({$i}) retourne $r',
        (input, expected) => {
            expect(setResponseError({response: input})).toEqual(expected);
        }
    );
});
