import midi from 'midi';
import { MidiInputDevice, MidiOutputDevice } from './Devices';

export class MidiDeviceCenter {
    private static _devCenter: MidiDeviceCenter;

    static getInstance(): MidiDeviceCenter {
        if (this._devCenter === undefined) {
            this._devCenter = new MidiDeviceCenter();
        }
        
        return this._devCenter;
    }
    
    private constructor() {
    }

    inputs(): Array<MidiInputDevice> {
        const input = new midi.Input();
        const inputs = Array<MidiInputDevice>();
        const nInputs = input.getPortCount();
        for (let index = 0; index < nInputs; index++) {
            inputs.push(new MidiInputDevice(index, input.getPortName(index)));
        }
        return inputs;
    }

    outputs(): Array<MidiOutputDevice> {
        const output = new midi.Output();
        const outputs = Array<MidiOutputDevice>();
        const nOutputs = output.getPortCount();
        for (let index = 0; index < nOutputs; index++) {
            outputs.push(new MidiOutputDevice(index, output.getPortName(index)))
        }
        return outputs;
    }
}
