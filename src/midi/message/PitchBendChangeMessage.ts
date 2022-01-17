import { MessageTypes, MidiChannel, MidiPitchBendValue } from './Constants';
import { MessageBase } from './MessageBase';

export class PitchBendChangeMessage extends MessageBase {
    readonly pitchBendValue: MidiPitchBendValue;

    constructor(channel: MidiChannel, value: MidiPitchBendValue) {
        super(MessageTypes.PitchBendChange, channel);
        if (value > 0x3fff) {
            this.pitchBendValue = 0x2000;
        } else {
            this.pitchBendValue = value;
        }
    }

    convert(): number[] {
        return [this.control, this.pitchBendValue];
    }

}