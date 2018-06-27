const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let testNum = 15;
        expect(isRealString(testNum)).toBe(false);
    })

    it('should reject string with only spaces', () => {
        let onlySpaceString = '      ';
        expect(isRealString(onlySpaceString)).toBe(false);
    })

    it('should allow string with non-space characters', () => {
        let testString = '  This is a string  ';
        expect(isRealString(testString)).toBe(true);
    })
})