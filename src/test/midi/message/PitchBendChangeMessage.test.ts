import { MessageTypes } from '../../../midi/message/Constants';
import { PitchBendChangeMessage } from '../../../midi/message/PitchBendChangeMessage';

describe("NoteOff tests", () => {
    it("Init", () => {
        const msg = new PitchBendChangeMessage(1, 32);
        expect(msg.message).toEqual(MessageTypes.PitchBendChange)
        expect(msg.channel).toEqual(1)
        expect(msg.pitchBendValue).toEqual(32);
    })
    it("Over boundaary value", () => {
        const msg = new PitchBendChangeMessage(1, 32000);
        expect(msg.message).toEqual(MessageTypes.PitchBendChange);
        expect(msg.channel).toEqual(1);
        expect(msg.pitchBendValue).toEqual(0x2000);
    })
})
