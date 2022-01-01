import { MessageTypes } from '../../../midi/message/Constants';
import { PolyphonicKeyPressureMessage } from '../../../midi/message/PolyphonicKeyPressureMessage';

describe("NoteOff tests", () => {
    it("Init", () => {
        const msg = new PolyphonicKeyPressureMessage(1, 5, 32);
        expect(msg.message).toEqual(MessageTypes.PolyphonicKeyPressure)
        expect(msg.channel).toEqual(1)
        expect(msg.key).toEqual(5)
        expect(msg.pressureValue).toEqual(32);
    })
})
