import { MessageTypes } from '../../../midi/message/Constants';
import { ControlChangeMessage } from '../../../midi/message/ControlChangeMessage';

describe("NoteOff tests", () => {
    it("Init", () => {
        const msg = new ControlChangeMessage(1, 5, 32);
        expect(msg.message).toEqual(MessageTypes.ControlChange)
        expect(msg.channel).toEqual(1)
        expect(msg.ccNumber).toEqual(5)
        expect(msg.ccValue).toEqual(32);
    })
})
