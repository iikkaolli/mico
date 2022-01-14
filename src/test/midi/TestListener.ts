
import { ChannelPressureMessage, ControlChangeMessage, MidiControllerNumber, MidiControllerValue, MidiKey, MidiPitchBendValue, MidiPressureValue, MidiProgramNumber, MidiVelocity, NoteOffMessage, NoteOnMessage, PitchBendChangeMessage, PolyphonicKeyPressureMessage, ProgramChangeMessage } from '../../midi/Messages';
import { MidiListenerBase } from "../../midi/MidiListenerBase";

export class TestListener extends MidiListenerBase {
    public name: string;

    public pcValue!: MidiProgramNumber;

    public ccNumber: MidiControllerNumber;
    public ccValue: MidiControllerValue;

    public noteOnKey: MidiKey;
    public noteOnVelocity: MidiVelocity;

    public noteOffKey: MidiKey;
    public noteOffVelocity: MidiVelocity;

    public cpValue: MidiPressureValue;

    public pbValue: MidiPitchBendValue;

    public pkpKey: MidiKey;
    public pkpValue: MidiPressureValue;

    constructor(name: string) {
        super();
        this.name = name;
        this.pcValue = 0;

        this.ccNumber = 0;
        this.ccValue = 0;

        this.noteOnKey = 0;
        this.noteOnVelocity = 0;

        this.noteOffKey = 0;
        this.noteOffVelocity = 0;

        this.cpValue = 0;

        this.pbValue = 0;

        this.pkpKey = 0;
        this.pkpValue = 0;
    }
    onChannelPressure(message: ChannelPressureMessage): void {
        this.cpValue = message.pressureValue;
    }
    onControlChange(message: ControlChangeMessage): void {
        this.ccNumber = message.ccNumber;
        this.ccValue = message.ccValue;
    }
    onProgramChange(message: ProgramChangeMessage): void {
        this.pcValue = message.program;
    }
    onNoteOff(message: NoteOffMessage): void {
        this.noteOffKey = message.key;
        this.noteOffVelocity = message.velocity;
    }
    onNoteOn(message: NoteOnMessage): void {
        this.noteOnKey = message.key;
        this.noteOnVelocity = message.velocity;
    }
    onPitchBendChange(message: PitchBendChangeMessage): void {
        this.pbValue = message.pitchBendValue;
    }
    onPolyphonicKeyPressure(message: PolyphonicKeyPressureMessage): void {
        this.pkpKey = message.key;
        this.pkpValue = message.pressureValue;
    }
}
