import midi from 'midi';
import { MidiMessage } from './Messages';
import { MidiDeviceBase } from "./MidiDeviceBase";


export class MidiOutputDevice extends MidiDeviceBase {
    private _output: any;

    constructor(index: number, name: string) {
        super(index, name);
    }

    open(): void {
        if (this._output === undefined) {
            this._output = new midi.Output();
        }
        if (!this._output.isPortOpen()) {
            this._output.openPort(this.index);
        }
    }
    close(): void {
        if (this._output !== undefined && this._output.isPortOpen()) {
            this._output.closePort();
        }
    }
    send(message: MidiMessage) {
        if (this._output !== undefined && this._output.isPortOpen()) {
            this._output.send(message.convert());
        }
    }
}
