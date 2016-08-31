class MusicSlot {
  constructor() {
    this.slotMachine = new slotMachine;
  }

  createSlotMachine() {
    const slotMachine = document.createElement('div');
    slotMachine.setAttribute('id', 'slotMachine');
    document.body.appendChild(slotMachine);

    for (let i = 0; i < 9; i++) {
      let slotElement = document.createElement('div');
      slotElement.setAttribute('class', 'slot');
      slotMachine.appendChild(slotElement);
    }
  }
}

let newMachine = new MusicSlot();
newMachine.createSlotMachine();
