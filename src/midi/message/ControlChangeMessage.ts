import { MessageTypes, MidiChannel, MidiControllerNumber, MidiControllerValue } from './Constants';
import { MessageBase } from './MessageBase';

export class ControlChangeMessage extends MessageBase {
    readonly ccNumber: MidiControllerNumber;
    readonly ccValue: MidiControllerValue;

    constructor(channel: MidiChannel, ccNumber: MidiControllerNumber, ccValue: MidiControllerValue) {
        super(MessageTypes.ControlChange, channel);
        this.ccNumber = ccNumber;
        this.ccValue = ccValue;
    }
}
