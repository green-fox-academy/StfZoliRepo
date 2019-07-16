"use strict";
// We start with a base, abstract class Instrument.

//     it reserves (e.g. protected) the name of the instrument
//     it should provide a play() method.

// Next, we add another abstract class, StringedInstrument which extends Instrument. It

//     introduces numberOfStrings and
//     sound() method what's implementation is yet unknown
//     but with the help of the sound() the play() method is fully implementable

// StingedInstrument has 3 descendants, namely:-

//     Electric Guitar (6 strings, 'Twang')

//     Bass Guitar (4 strings, 'Duum-duum-duum')

//     Violin (4 strings, 'Screech')

//     The Workshop should be invoked from another file like app.ts or main.ts

abstract class Instrument {
  instName: string;
  constructor(instName: string) {
    this.instName = instName;
  }
  abstract play(): void;
}
abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  constructor(numberOfStrings: number, instName: string) {
    super(instName);
    this.numberOfStrings = numberOfStrings;
  }
  sound(soundOfInst: any): any {
    return soundOfInst;
  }
}
class ElectricGuitar extends StringedInstrument {
  soundOfInst: string = "Twang";
  constructor(numberOfStrings = 6, instName = "EGuitar") {
    super(numberOfStrings, instName);
  }
  sound(soundOfInst: string): string {
    return soundOfInst;
  }
  play(): void {
    console.log(
      this.instName,
      ", a",
      this.numberOfStrings,
      "-stringed instrument that goes",
      this.sound(this.soundOfInst),
      this.numberOfStrings
    );
  }
}
class BassGuitar extends StringedInstrument {
  soundOfInst = "Duum-duum-duum";
  constructor(numberOfStrings = 4, instName = "BGuitar") {
    super(numberOfStrings, instName);
  }
  sound(soundOfInst: string): string {
    return soundOfInst;
  }
  play(): void {
    console.log(
      this.instName,
      "a",
      this.numberOfStrings,
      "-stringed instrument that goes",
      this.sound(this.soundOfInst)
    );
  }
}
class Violin extends StringedInstrument {
  soundOfInst = "Screech";
  constructor(numberOfStrings = 4, instName = "ViolinZ") {
    super(numberOfStrings, instName);
  }
  sound(soundOfInst: string): string {
    return soundOfInst;
  }
  play(): void {
    console.log(
      this.instName,
      ", a",
      this.numberOfStrings,
      "-stringed instrument that goes",
      this.sound(this.soundOfInst)
    );
  }
}

export { StringedInstrument, ElectricGuitar, BassGuitar, Violin };
let gutiar: ElectricGuitar = new ElectricGuitar();
