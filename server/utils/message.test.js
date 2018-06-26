let expect = require('expect');

let { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Thomas';
        let text = 'This is a text string';

        let message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe('number');
    })
});