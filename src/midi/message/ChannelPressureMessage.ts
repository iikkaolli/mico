import { MessageTypes, MidiChannel, MidiPressureValue } from './Constants';
import { MessageBase } from './MessageBase';

export class ChannelPressureMessage extends MessageBase {
    readonly pressureValue: MidiPressureValue;

    constructor(channel: MidiChannel, value: MidiPressureValue) {
        super(MessageTypes.ChannelPressure, channel);
        this.pressureValue = value;
    }
    convert(): number[] {
        return [ this.control, this.pressureValue]
    }
}