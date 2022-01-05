import { ConsoleWriter } from './midi/listeners/ConsoleWriter';
import { MidiProgramNumber } from './midi/message/Constants';
import { ProgramChangeMessage } from './midi/message/ProgramChangeMessage';
import { MidiMessageCenter } from './midi/MidiMessageCenter';

console.log("Hello World!")

const mc = new MidiMessageCenter();
const cw = new ConsoleWriter();
mc.register(1, cw);
for (let index = 0; index < 50; index++) {
    mc.send(new ProgramChangeMessage(1, index as MidiProgramNumber));
}
