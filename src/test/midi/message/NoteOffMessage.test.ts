import { MessageTypes } from '../../../midi/message/Constants';
import { NoteOffMessage } from '../../../midi/message/NoteOffMessage';

describe("NoteOff tests", () => {
    it("Init", () => {
        const msg = new NoteOffMessage(1, 5, 32)
        expect(msg.message).toEqual(MessageTypes.NoteOff)
        expect(msg.channel).toEqual(1)
        expect(msg.key).toEqual(5)
        expect(msg.velocity).toEqual(32);
    })
})
