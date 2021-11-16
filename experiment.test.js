const experiment = require('./experiment');

test('calculate elapsed days from 02/06/1983 to 22/06/1983 equals to 19days ', () => {
    expect(experiment('02/06/1983', '22/06/1983')).toBe(19);
});

test('calculate elapsed days from 04/07/1984 to 25/12/1984 equals to 173days ', () => {
    expect(experiment('04/07/1984', '25/12/1984')).toBe(173);
});

test('calculate elapsed days from 03/01/1989 to 03/08/1983 equals to 1979days ', () => {
    expect(experiment('03/08/1983', '03/01/1989')).toBe(1979);
});

test('calculate elapsed days from 03/01/1989 to 03/08/1983 equals to -1981 which is negative value', () => {
    expect(experiment('03/01/1989', '03/08/1983')).toBe(-1981);
});