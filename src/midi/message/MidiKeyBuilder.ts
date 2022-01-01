import { MidiKey } from './Constants';

export enum Keys {
    C = 12,
    CSharp = 13,
    D = 14,
    DSharp = 15,
    E = 16,
    F = 17,
    FSharp = 18,
    G = 19,
    GSharp = 20,
    A = 21,
    ASharp = 22,
    B = 23,
}
export type Octave = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export class MidiKeyBuilder {
    private _key: Keys;
    private _octave: Octave;

    /**
     * Constructs MidiKeyBuilder.
     * @param key Key for generating the note
     * @param octave Octave for generating note
     */
    constructor(key: Keys, octave: Octave) {
        this._key = key;
        this._octave = octave;
    }

    /**
     * Builds the midi key.
     * @returns Returns valid midi key. If not on valid range of midi keys returns C-1
     */
    build(): MidiKey {
        const value = (this._key + this._octave * 12);
        if (value > 127) {
            return 0 as MidiKey;
        }
        return value as MidiKey;
    }
    /**
     * Sets key for the builder.
     * @param key New key for the builder.
     * @returns Returns builder for chaining.
     */
    setKey(key: Keys): this {
        this._key = key;
        return this;
    }
    /**
     * Sets ocatve for the builder.
     * @param octave New octave for the builder.
     * @returns Returns builder for chaining.
     */
    setOctave(octave: Octave): this {
        this._octave = octave;
        return this;
    }
}
