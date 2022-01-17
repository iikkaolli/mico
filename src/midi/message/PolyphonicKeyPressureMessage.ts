import { MessageTypes, MidiChannel, MidiKey, MidiPressureValue } from './Constants';
import { MessageBase } from './MessageBase';

export class PolyphonicKeyPressureMessage extends MessageBase {
    readonly key: MidiKey;
    readonly pressureValue: MidiPressureValue;
    
    constructor(channel: MidiChannel, key:MidiKey, value: MidiPressureValue) {
        super(MessageTypes.PolyphonicKeyPressure, channel);
        this.key = key;
        this.pressureValue = value;
    }

    convert(): number[] {
        return [ this.control, this.key, this.pressureValue]
    }

}
