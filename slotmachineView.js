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
    let winElement = document.createElement('div');
    winElement.setAttribute('id', 'win');
    document.body.appendChild(winElement);

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
    let a = document.getElementsByClassName('slotRowOne')[0].innerHTML;
    let b = document.getElementsByClassName('slotRowOne')[1].innerHTML;
    let c = document.getElementsByClassName('slotRowOne')[2].innerHTML;

    if (a === b && b === c) {
       document.getElementById('win').innerHTML = 'You Won!';
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
    let d = document.getElementsByClassName('slotRowTwo')[0].innerHTML;
    let e = document.getElementsByClassName('slotRowTwo')[1].innerHTML;
    let f = document.getElementsByClassName('slotRowTwo')[2].innerHTML;

    if (d === e && e === f) {
      document.getElementById('win').innerHTML = 'You Won!';
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
    let g = document.getElementsByClassName('slotRowThree')[0].innerHTML;
    let h = document.getElementsByClassName('slotRowThree')[1].innerHTML;
    let j = document.getElementsByClassName('slotRowThree')[2].innerHTML;

    if (g === h && h === j) {
      document.getElementById('win').innerHTML = 'You Won!';
    } else if (a === e && e === j) {
      document.getElementById('win').innerHTML = 'You Won!';
    } else if (c === e && e === g) {
      document.getElementById('win').innerHTML = 'You Won!';
    }
    else if (a === d && d === g) {
      document.getElementById('win').innerHTML = 'You Won!';
    }
    else if (b === e && e === h) {
      document.getElementById('win').innerHTML = 'You Won!';
    }
    else if (c === f && f === j) {
      document.getElementById('win').innerHTML = 'You Won!';
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
