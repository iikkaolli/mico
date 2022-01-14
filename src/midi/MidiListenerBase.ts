import { ChannelPressureMessage } from './message/ChannelPressureMessage';
import { MessageTypes } from './message/Constants';
import { ControlChangeMessage } from './message/ControlChangeMessage';
import { NoteOffMessage } from './message/NoteOffMessage';
import { NoteOnMessage } from './message/NoteOnMessage';
import { PitchBendChangeMessage } from './message/PitchBendChangeMessage';
import { PolyphonicKeyPressureMessage } from './message/PolyphonicKeyPressureMessage';
import { ProgramChangeMessage } from './message/ProgramChangeMessage';
import { MidiMessage } from './Messages';


export class MidiListenerBase {
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
    protected onProgramChange(message: ProgramChangeMessage): void{}
    protected onChannelPressure(message: ChannelPressureMessage): void{}
    protected onControlChange(message: ControlChangeMessage): void{}
    protected onNoteOff(message: NoteOffMessage): void{}
    protected onNoteOn(message: NoteOnMessage): void{}
    protected onPolyphonicKeyPressure(message: PolyphonicKeyPressureMessage): void{}
    protected onPitchBendChange(message: PitchBendChangeMessage): void{}
}
