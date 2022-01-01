import { ChannelPressureMessage } from './ChannelPressureMessage';
import { ControlChangeMessage } from './ControlChangeMessage';
import { NoteOffMessage } from './NoteOffMessage';
import { NoteOnMessage } from './NoteOnMessage';
import { PitchBendChangeMessage } from './PitchBendChangeMessage';
import { PolyphonicKeyPressureMessage } from './PolyphonicKeyPressureMessage';
import { ProgramChangeMessage } from './ProgramChangeMessage';

export type MidiMessage = NoteOffMessage | NoteOnMessage | PolyphonicKeyPressureMessage | ControlChangeMessage | ProgramChangeMessage | ChannelPressureMessage | PitchBendChangeMessage;