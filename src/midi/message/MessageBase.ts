import { MessageTypes, MidiChannel } from './Constants';

export abstract class MessageBase {
    readonly message: MessageTypes;
    readonly channel: MidiChannel;

    constructor(message: MessageTypes, channel: MidiChannel) {
        this.message = message;
        this.channel = channel;
    }
}
