import { ChannelPressureMessage } from '../../../midi/message/ChannelPressureMessage';
import { MessageTypes } from '../../../midi/message/Constants';

describe("NoteOff tests", () => {
    it("Init", () => {
        const msg = new ChannelPressureMessage(1, 32);
        expect(msg.message).toEqual(MessageTypes.ChannelPressure)
        expect(msg.channel).toEqual(1)
        expect(msg.pressureValue).toEqual(32);
    })
})
