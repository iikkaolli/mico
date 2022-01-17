import { MessageTypes, MidiChannel, MidiProgramNumber } from './Constants';
import { MessageBase } from './MessageBase';

export class ProgramChangeMessage extends MessageBase {
    readonly program: MidiProgramNumber;

    constructor(channel: MidiChannel, program: MidiProgramNumber) {
        super(MessageTypes.ProgramChange, channel);
        this.program = program;
    }

    convert(): number[] {
        return [this.control, this.program];
    }

}
