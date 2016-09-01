class MusicSlot {
  constructor() {
    this.slotMachine = new slotMachine;
  }

  createSlotMachine() {
    const slotMachine = document.createElement('div');
    slotMachine.setAttribute('id', 'slotMachine');
    document.body.appendChild(slotMachine);
    let slotImage = ['images/sbtrkt.jpg', 'images/daftpunk.jpg', 'images/adele.jpg', 'images/michaelJackson.jpg', 'images/rihanna.jpg', 'images/tycho.jpg', 'images/fkatwigs.jpg', 'images/depechemode.jpg', 'images/coldplay.jpg', 'images/calvinHarris.jpg', 'images/kaiydo.jpg', 'images/feverray.jpg'];
    // for (let i = 0; i < 9; i++) {
    //   let slotElement = document.createElement('div');
    //   slotElement.setAttribute('class', 'slot');
    //   let num = Math.floor(Math.random()*slotImage.length);
    //   let img = slotImage[num];
    //   slotElement.innerHTML = '<img src="' + img + '" width="144px">';
    //   slotMachine.appendChild(slotElement);
    // }
    const rowOne = document.createElement('div');
    rowOne.setAttribute('id', 'rowOne');
    slotMachine.appendChild(rowOne);
    for (let i = 0; i < 3; i++) {
      let slotElementOne = document.createElement('div');
      slotElementOne.setAttribute('class', 'slotRowOne');
      let num = Math.floor(Math.random()*slotImage.length);
      let img = slotImage[num];
      slotElementOne.innerHTML = '<img src="' + img + '" width="144px">';
      rowOne.appendChild(slotElementOne);
    }
    const rowTwo = document.createElement('div');
    rowTwo.setAttribute('id', 'rowTwo');
    slotMachine.appendChild(rowTwo);

    for (let i = 0; i < 3; i++) {
      let slotElementTwo = document.createElement('div');
      slotElementTwo.setAttribute('class', 'slotRowTwo');
      let num = Math.floor(Math.random()*slotImage.length);
      let img = slotImage[num];
      slotElementTwo.innerHTML = '<img src="' + img + '" width="144px">';
      rowTwo.appendChild(slotElementTwo);
    }
    const rowThree = document.createElement('div');
    rowThree.setAttribute('id', 'rowThree');
    slotMachine.appendChild(rowThree);

    for (let i = 0; i < 3; i++) {
      let slotElementThree = document.createElement('div');
      slotElementThree.setAttribute('class', 'slotRowThree');
      let num = Math.floor(Math.random()*slotImage.length);
      let img = slotImage[num];
      slotElementThree.innerHTML = '<img src="' + img + '" width="144px">';
      rowThree.appendChild(slotElementThree);
    }
    let spinButton = document.createElement('button');
    spinButton.setAttribute('id', 'spinButton');
    let buttonText = document.createTextNode("SPIN");
    spinButton.appendChild(buttonText);
    document.body.appendChild(spinButton);
    spinButton.addEventListener('click', function () {
       window.location.reload();
    });
  }
  }


let newMachine = new MusicSlot();
newMachine.createSlotMachine();
