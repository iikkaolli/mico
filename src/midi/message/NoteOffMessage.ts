import { MessageTypes, MidiChannel, MidiKey, MidiVelocity } from './Constants';
import { MessageBase } from './MessageBase';

export class NoteOffMessage extends MessageBase {
    readonly key: MidiKey;
    readonly velocity: MidiVelocity;
 
    constructor(channel: MidiChannel, key: MidiKey, velocity: MidiVelocity) {
        super(MessageTypes.NoteOff, channel);
        this.key = key;
        this.velocity = velocity;
    }

    convert(): number[] {
        return [this.control, this.key, this.velocity];
    }

}
