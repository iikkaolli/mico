import { Keys, MidiKeyBuilder } from '../../../midi/message/MidiKeyBuilder';

describe("KeyBuilder tests", () => {
    it("Default constructor", () => {
        const key = new MidiKeyBuilder(Keys.C, 2).build();
        expect(key).toEqual(36);
    })
    it("Set Key", () => {
        const key = new MidiKeyBuilder(Keys.C, 2)
            .setKey(Keys.CSharp)
            .build();
        expect(key).toEqual(37);
    })
    it("Set Octave", () => {
        const key = new MidiKeyBuilder(Keys.C, 2)
            .setOctave(3)
            .build();
        expect(key).toEqual(48);
    })
    it("Set both Key and Octave", () => {
        const key = new MidiKeyBuilder(Keys.C, 2)
            .setKey(Keys.CSharp)
            .setOctave(3)        
            .build();
        expect(key).toEqual(49);
    })
    
    it("Not valid midi key", () => {
        const key = new MidiKeyBuilder(Keys.GSharp, 9).build();
        expect(key).toEqual(0)
    })
})