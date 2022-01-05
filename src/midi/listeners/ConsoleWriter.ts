import { ChannelPressureMessage } from '../message/ChannelPressureMessage';
import { ControlChangeMessage } from '../message/ControlChangeMessage';
import { NoteOffMessage } from '../message/NoteOffMessage';
import { NoteOnMessage } from '../message/NoteOnMessage';
import { PitchBendChangeMessage } from '../message/PitchBendChangeMessage';
import { PolyphonicKeyPressureMessage } from '../message/PolyphonicKeyPressureMessage';
import { ProgramChangeMessage } from '../message/ProgramChangeMessage';
import { MidiListenerBase } from '../MidiListenerBase';

export class ConsoleWriter extends MidiListenerBase {
    onProgramChange(message: ProgramChangeMessage): void {
        console.log(JSON.stringify(message));
    }
    onChannelPressure(message: ChannelPressureMessage): void {
        console.log(JSON.stringify(message));
    }
    onControlChange(message: ControlChangeMessage): void {
        console.log(JSON.stringify(message));
    }
    onNoteOff(message: NoteOffMessage): void {
        console.log(JSON.stringify(message));
    }
    onNoteOn(message: NoteOnMessage): void {
        console.log(JSON.stringify(message));
    }
    onPolyphonicKeyPressure(message: PolyphonicKeyPressureMessage): void {
        console.log(JSON.stringify(message));
    }
    onPitchBendChange(message: PitchBendChangeMessage): void {
        console.log(JSON.stringify(message));
    }

}