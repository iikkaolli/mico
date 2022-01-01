import { ChannelPressureMessage } from '../../midi/message/ChannelPressureMessage';
import { MidiControllerNumber, MidiControllerValue, MidiKey, MidiPitchBendValue, MidiPressureValue, MidiProgramNumber, MidiVelocity } from '../../midi/message/Constants';
import { ControlChangeMessage } from '../../midi/message/ControlChangeMessage';
import { NoteOffMessage } from '../../midi/message/NoteOffMessage';
import { NoteOnMessage } from '../../midi/message/NoteOnMessage';
import { PitchBendChangeMessage } from '../../midi/message/PitchBendChangeMessage';
import { PolyphonicKeyPressureMessage } from '../../midi/message/PolyphonicKeyPressureMessage';
import { ProgramChangeMessage } from '../../midi/message/ProgramChangeMessage';
import { MidiListenerBase } from "../../midi/MidiListenerBase";
import { MidiMessageCenter } from '../../midi/MidiMessageCenter';

class TestListener extends MidiListenerBase {
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
        super()
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
        this.cpValue = message.pressureValue        
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
        this.pkpKey = message.key
        this.pkpValue = message.pressureValue;
    }
}

describe("MidiMessageCenter tests", () => {
    it("Construction", () => {
        const mc = new MidiMessageCenter();
        expect(mc).not.toBeNull();
    })
    it("Register listener", () => {
        const mc = new MidiMessageCenter();
        const listener = new TestListener("1")
        mc.register(1, listener);
        expect(mc.totalListeners).toEqual(1);
    })
    it("Register listener", () => {
        const mc = new MidiMessageCenter();
        const listener1 = new TestListener("1")
        mc.register(1, listener1);
        const listener2 = new TestListener("1");
        mc.register(2, listener2)
        expect(mc.totalListeners).toEqual(2);
    })
    it("Send message", () => {
        const mc = new MidiMessageCenter();
        const listener = new TestListener("1")
        mc.register(1, listener);
        expect(mc.totalListeners).toEqual(1);
        mc.send(new ProgramChangeMessage(1, 25));
        expect(listener.pcValue).toEqual(25)
    })
    it("Send all different messages", () => {
        const mc = new MidiMessageCenter();
        const listener = new TestListener("1");
        mc.register(3, listener);
        mc.send(new ProgramChangeMessage(3, 85));
        expect(listener.pcValue).toEqual(85)
        mc.send(new ControlChangeMessage(3, 35, 65));
        expect(listener.ccNumber).toEqual(35);
        expect(listener.ccValue).toEqual(65);
        mc.send(new NoteOnMessage(3, 60, 120));
        expect(listener.noteOnKey).toEqual(60);
        expect(listener.noteOnVelocity).toEqual(120);
        mc.send(new NoteOffMessage(2, 50, 100));
        expect(listener.noteOffKey).toEqual(0);
        expect(listener.noteOffVelocity).toEqual(0);
        mc.send(new NoteOffMessage(3, 50, 100));
        expect(listener.noteOffKey).toEqual(50);
        expect(listener.noteOffVelocity).toEqual(100);
        mc.send(new ChannelPressureMessage(3, 123))
        expect(listener.cpValue).toEqual(123);
        mc.send(new PolyphonicKeyPressureMessage(3, 60, 123));
        expect(listener.pkpKey).toEqual(60);
        expect(listener.pkpValue).toEqual(123);
        mc.send(new PitchBendChangeMessage(3, 12345))
        expect(listener.pbValue).toEqual(12345);
    })
    it("Register and unregister", () => {
        const mc = new MidiMessageCenter();
        const listener1 = new TestListener("1");
        const listener2 = new TestListener("2");
        const listener3 = new TestListener("3");
        mc.register(3, listener1);
        mc.register(3, listener2);
        mc.register(3, listener3);
        mc.unregister(3, listener2);
        expect(mc.totalListeners).toEqual(2);
    })
})
