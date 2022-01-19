
export abstract class MidiDeviceBase {
    readonly index: number;
    readonly name: string;

    constructor(index: number, name: string) {
        this.index = index;
        this.name = name;
    }

    abstract open(): void;
    abstract close(): void;
    abstract isRunning(): boolean;
}
