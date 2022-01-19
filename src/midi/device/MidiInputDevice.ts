import midi from 'midi';
import { ChannelPressureMessage, ControlChangeMessage, Data4Bit, Data7Bit, MessageTypes, MidiMessage, NoteOffMessage, NoteOnMessage, PitchBendChangeMessage, PolyphonicKeyPressureMessage, ProgramChangeMessage } from '../Messages';
import { MidiDeviceBase } from "./MidiDeviceBase";


export class MidiInputDevice extends MidiDeviceBase {
    private _input: any;

    constructor(index: number, name: string) {
        super(index, name);
    }

    setCallback(callback: (deltaTime: string, message: MidiMessage) => void) {
        this._input('message', (delta: string, message: number[]) => {
            const channel = (message[0] & 0x0f) as Data4Bit;
            switch (message[0] & 0xf0) {
                case MessageTypes.ProgramChange:
                    callback(delta, new ProgramChangeMessage(channel, message[1] as Data7Bit));
                    break;
                case MessageTypes.ControlChange:
                    callback(delta, new ControlChangeMessage(channel, message[1] as Data7Bit, message[2] as Data7Bit));
                    break;
                case MessageTypes.NoteOn:
                    callback(delta, new NoteOnMessage(channel, message[1] as Data7Bit, message[2] as Data7Bit));
                    break;
                case MessageTypes.NoteOff:
                    callback(delta, new NoteOffMessage(channel, message[1] as Data7Bit, message[2] as Data7Bit));
                    break;
                case MessageTypes.ChannelPressure:
                    callback(delta, new ChannelPressureMessage(channel, message[1] as Data7Bit));
                    break;
                case MessageTypes.PitchBendChange:
                    callback(delta, new PitchBendChangeMessage(channel, message[1] + message[2]));
                    break;
                case MessageTypes.PolyphonicKeyPressure:
                    callback(delta, new PolyphonicKeyPressureMessage(channel, message[1] as Data7Bit, message[2] as Data7Bit));
                    break;
                default:
                    break;
            }
        });
    }

    open(): void {
        if (this._input === undefined) {
            this._input = new midi.Input();
        }
        if (!this._input.isPortOpen()) {
            this._input.openPort(this.index);
        }
    }
    close(): void {
        if (this._input !== undefined && this._input.isPortOpen()) {
            this._input.closePort();
        }
    }
    isRunning(): boolean {
        return this._input.isPortOpen();
    }
}
