import { ChannelPressureMessage } from './message/ChannelPressureMessage';
import { MessageTypes } from './message/Constants';
import { ControlChangeMessage } from './message/ControlChangeMessage';
import { MidiMessage } from './message/MidiMessage';
import { NoteOffMessage } from './message/NoteOffMessage';
import { NoteOnMessage } from './message/NoteOnMessage';
import { PitchBendChangeMessage } from './message/PitchBendChangeMessage';
import { PolyphonicKeyPressureMessage } from './message/PolyphonicKeyPressureMessage';
import { ProgramChangeMessage } from './message/ProgramChangeMessage';


export abstract class MidiListenerBase {
    receive(message: MidiMessage): void {
        switch (message.message) {
            case MessageTypes.ProgramChange:
                return this.onProgramChange(message as ProgramChangeMessage);
            
            case MessageTypes.ControlChange:
                return this.onControlChange(message as ControlChangeMessage);
        
            case MessageTypes.NoteOff:
                return this.onNoteOff(message as NoteOffMessage);
            
            case MessageTypes.NoteOn:
                return this.onNoteOn(message as NoteOffMessage);
            
            case MessageTypes.PolyphonicKeyPressure:
                return this.onPolyphonicKeyPressure(message as PolyphonicKeyPressureMessage);
            
            case MessageTypes.PitchBendChange:
                return this.onPitchBendChange(message as PitchBendChangeMessage);
            
            case MessageTypes.ChannelPressure:
                return this.onChannelPressure(message as ChannelPressureMessage);
            
            default:
                break;
        }
    }
    abstract onProgramChange(message: ProgramChangeMessage): void;
    abstract onChannelPressure(message: ChannelPressureMessage): void;
    abstract onControlChange(message: ControlChangeMessage): void;
    abstract onNoteOff(message: NoteOffMessage): void;
    abstract onNoteOn(message: NoteOnMessage): void;
    abstract onPolyphonicKeyPressure(message: PolyphonicKeyPressureMessage): void;
    abstract onPitchBendChange(message: PitchBendChangeMessage): void;
}
