import { MessageTypes } from '../../../midi/message/Constants';
import { ProgramChangeMessage } from '../../../midi/message/ProgramChangeMessage';

describe("NoteOff tests", () => {
    it("Init", () => {
        const msg = new ProgramChangeMessage(1, 5);
        expect(msg.message).toEqual(MessageTypes.ProgramChange)
        expect(msg.channel).toEqual(1)
        expect(msg.program).toEqual(5)
    })
})
