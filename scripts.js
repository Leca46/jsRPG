// Global variables
let xp = 0;
let heatlh = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xptext');
const healthText = document.querySelector('#healthtext');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
    button1.innerText = 'Buy 10 health (10 gold)';
    button2.innerText = 'Buy weapon (30 gold)';
    button3.innerText = 'Go to town square';
}

function goCave() {
    
}

function fightDragon() {
    
}