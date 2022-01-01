import { MessageTypes } from '../../../midi/message/Constants';
import { NoteOnMessage } from '../../../midi/message/NoteOnMessage';

describe("NoteOff tests", () => {
    it("Init", () => {
        const msg = new NoteOnMessage(1, 5, 32);
        expect(msg.message).toEqual(MessageTypes.NoteOn)
        expect(msg.channel).toEqual(1)
        expect(msg.key).toEqual(5)
        expect(msg.velocity).toEqual(32);
    })
})
