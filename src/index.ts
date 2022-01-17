import { MidiApp } from './midi/MidiApp';
import { MidiDeviceCenter } from './midi/MidiDeviceCenter';

const devCenter = MidiDeviceCenter.getInstance();
console.log(devCenter.outputs());

console.log(devCenter.inputs());

const app = new MidiApp();
const output = devCenter.outputs()[0];

app.start();

app.stop();
