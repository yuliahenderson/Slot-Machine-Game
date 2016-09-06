class MusicSlot {
  constructor() {
    this.slotMachine = new slotMachine;
  }
  createSlotMachine() {
    const slotMachine = document.createElement('div');
    slotMachine.setAttribute('id', 'slotMachine');
    document.body.appendChild(slotMachine);
    let slotImage = ['images/sbtrkt.jpg', 'images/daftpunk.jpg', 'images/adele.jpg', 'images/michaelJackson.jpg', 'images/tycho.jpg', 'images/fkatwigs.jpg', 'images/calvinHarris.jpg'];
    // for (let i = 0; i < 9; i++) {
    //   let slotElement = document.createElement('div');
    //   slotElement.setAttribute('class', 'slot');
    //   let num = Math.floor(Math.random()*slotImage.length);
    //   let img = slotImage[num];
    //   slotElement.innerHTML = '<img src="' + img + '" width="144px">';
    //   slotMachine.appendChild(slotElement);
    // }
    let winElement = document.createElement('div');
    winElement.setAttribute('id', 'win');
    document.body.appendChild(winElement);
    let winSound = document.createElement('div');
    winSound.setAttribute('id', 'sound');
    document.body.appendChild(winSound);
    const rowOne = document.createElement('div');
    rowOne.setAttribute('id', 'rowOne');
    slotMachine.appendChild(rowOne);
    for (let i = 0; i < 3; i++) {
      let slotElementOne = document.createElement('div');
      slotElementOne.setAttribute('class', 'slotRowOne');
      let num = Math.floor(Math.random()*slotImage.length);
      let img = slotImage[num];
      rowOne.appendChild(slotElementOne);
      slotElementOne.innerHTML = '<img src="' + img + '" width="144px">';
    }
    let slot1 = document.getElementsByClassName('slotRowOne')[0].innerHTML;
    let slot4 = document.getElementsByClassName('slotRowOne')[1].innerHTML;
    let slot7 = document.getElementsByClassName('slotRowOne')[2].innerHTML;
    const rowTwo = document.createElement('div');
    rowTwo.setAttribute('id', 'rowTwo');
    slotMachine.appendChild(rowTwo);
    for (let i = 0; i < 3; i++) {
      let slotElementTwo = document.createElement('div');
      slotElementTwo.setAttribute('class', 'slotRowTwo');
      let num = Math.floor(Math.random()*slotImage.length);
      let img = slotImage[num];
      rowTwo.appendChild(slotElementTwo);
      slotElementTwo.innerHTML = '<img src="' + img + '" width="144px">';
    }
    let slot2 = document.getElementsByClassName('slotRowTwo')[0].innerHTML;
    let slot5 = document.getElementsByClassName('slotRowTwo')[1].innerHTML;
    let slot8 = document.getElementsByClassName('slotRowTwo')[2].innerHTML;
    const rowThree = document.createElement('div');
    rowThree.setAttribute('id', 'rowThree');
    slotMachine.appendChild(rowThree);
    for (let i = 0; i < 3; i++) {
      let slotElementThree = document.createElement('div');
      slotElementThree.setAttribute('class', 'slotRowThree');
      let num = Math.floor(Math.random()*slotImage.length);
      let img = slotImage[num];
      rowThree.appendChild(slotElementThree);
      slotElementThree.innerHTML = '<img src="' + img + '" width="144px">';
    }
    let slot3 = document.getElementsByClassName('slotRowThree')[0].innerHTML;
    let slot6 = document.getElementsByClassName('slotRowThree')[1].innerHTML;
    let slot9 = document.getElementsByClassName('slotRowThree')[2].innerHTML;
    if (slot1 === slot4 && slot4 === slot7) {
      document.getElementById('win').innerHTML = 'You Won!';
      document.getElementById('sound').innerHTML = '<audio src="applause.ogg" autoplay></audio>';
    } else if (slot2 === slot5 && slot5 === slot8) {
      document.getElementById('win').innerHTML = 'You Won!';
      document.getElementById('sound').innerHTML = '<audio src="applause.ogg" autoplay></audio>';
    } else if (slot3 === slot6 && slot6 === slot9) {
      document.getElementById('win').innerHTML = 'You Won!';
      document.getElementById('sound').innerHTML = '<audio src="applause.ogg" autoplay></audio>';
    } else if (slot1 === slot5 && slot5 === slot9) {
      document.getElementById('win').innerHTML = 'You Won!';
      document.getElementById('sound').innerHTML = '<audio src="applause.ogg" autoplay></audio>';
    } else if (slot7 === slot5 && slot5 === slot3) {
      document.getElementById('win').innerHTML = 'You Won!';
      document.getElementById('sound').innerHTML = '<audio src="applause.ogg" autoplay></audio>';
    } else if (slot1 === slot2 && slot2 === slot3) {
      document.getElementById('win').innerHTML = 'You Won!';
      document.getElementById('sound').innerHTML = '<audio src="applause.ogg" autoplay></audio>';
    } else if (slot4 === slot5 && slot5 === slot6) {
      document.getElementById('win').innerHTML = 'You Won!';
      document.getElementById('sound').innerHTML = '<audio src="applause.ogg" autoplay></audio>';
    } else if (slot7 === slot8 && slot8 === slot9) {
      document.getElementById('win').innerHTML = 'You Won!';
      document.getElementById('sound').innerHTML = '<audio src="applause.ogg" autoplay></audio>';
    } else {
      document.getElementById('win').innerHTML = 'Spin again...';
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
