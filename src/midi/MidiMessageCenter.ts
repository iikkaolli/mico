import { MidiMessage } from "./message/MidiMessage";
import { MidiChannel } from './Messages';
import { MidiListenerBase } from './MidiListenerBase';

export class MidiMessageCenter {
    private _listeners: MidiListenerBase[][];

    constructor() {
        this._listeners = new Array<MidiListenerBase[]>(16);
        for (let index = 0; index < 16; index++) {
            this._listeners[index] = new Array<MidiListenerBase>();
        }
    }

    register(channel: MidiChannel, listener: MidiListenerBase) {
        this._listeners[channel].push(listener);
    }

    unregister(channel: MidiChannel, listener: MidiListenerBase) {
        this._listeners[channel] = this._listeners[channel].filter((element) => {
            return element !== listener;
        });
    }
    
    send(message: MidiMessage): number {
        this._listeners[message.channel].map((listener: MidiListenerBase) => {
            listener.receive(message);
        })
        return 0;
    }
    
    get totalListeners(): number {
        const total = this._listeners.reduce(
            (total: number, array: MidiListenerBase[]): number => {
                return total + array.length;
            }, 0);
        return total;
    }
}