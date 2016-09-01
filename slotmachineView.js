class MusicSlot {
  constructor() {
    this.slotMachine = new slotMachine;
  }

  createSlotMachine() {
    const slotMachine = document.createElement('div');
    slotMachine.setAttribute('id', 'slotMachine');
    document.body.appendChild(slotMachine);
    let slotImage = ['images/sbtrkt.jpg', 'images/daftpunk.jpg', 'images/adele.jpg', 'images/michaelJackson.jpg', 'images/rihanna.jpg', 'images/tycho.jpg', 'images/fkatwigs.jpg', 'images/depechemode.jpg', 'images/coldplay.jpg', 'images/xx.jpg', 'images/kaiydo.jpg', 'images/feverray.jpg'];
    for (let i = 0; i < 9; i++) {
      let slotElement = document.createElement('div');
      slotElement.setAttribute('class', 'slot');
      let num=  Math.floor(Math.random()*slotImage.length);
      let img = slotImage[num];
      slotElement.innerHTML = '<img src="' + img + '" width="144px">';
      slotMachine.appendChild(slotElement);
    }
  }
  }


let newMachine = new MusicSlot();
newMachine.createSlotMachine();
