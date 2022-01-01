import { MessageTypes, MidiChannel, MidiKey, MidiVelocity } from './Constants';
import { MessageBase } from './MessageBase';

export class NoteOnMessage extends MessageBase {
    readonly key: MidiKey;
    readonly velocity: MidiVelocity;
 
    constructor(channel: MidiChannel, key: MidiKey, velocity: MidiVelocity) {
        super(MessageTypes.NoteOn, channel);
        this.key = key;
        this.velocity = velocity;
    }
}
