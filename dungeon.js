//initial hero stats


let hero = {
    name: '',
    health: 100,
    score: 0,
    attack: 3,
    points: 0,
    apples: 0,
    poisoned: false // still under development
}

let list = []
let count = 0;
//buy stuff
function buy() {
    if (hero.score - 50 >= 0) {
        if (hero.health + 30 >= 100) {
            hero.health = 100;
            hero.score -= 50;
        } else {
            hero.health += 30;
            hero.score -= 50;
        }
    } else {

    }
    document.getElementById('merch').innerHTML = ''

}

function improveWeapon() {
    if (hero.score - 50 >= 0) {

        hero.attack += 10;
        hero.score -= 50;

    } else {

    }

    document.getElementById('merch').innerHTML = ''

}

function quest() {
   
    let applesNeeded = Math.floor(Math.random() * 101)+ 1;
   alert(`The king needs ${applesNeeded} apples!`)
    if (hero.apples >= applesNeeded) {
        alert(`The king is pleased, ${hero.name} !`)

        hero.score += 500;
        hero.apples -= applesNeeded;
count = 1;
    }else {
        alert (`You don't have enough apples, ${hero.name}!`)
    }
    
    document.getElementById('merch').innerHTML = ''
}
// leveling up system
function leveling(level) {
    let varible = 0

    if (level < 10) { // level 1

        varible = 1
    } else if (level < 30) { // level 2
        varible = 2
    } else if (level < 50) { // level 3
        varible = 3
    } else if (level < 80) { // level 4
        varible = 4
    } else if (level < 120) { // level 5

        varible = 5
    } else if (level < 150) { // level 6

        varible = 6
    } else if (level < 200) {// level 7

        varible = 7
    } else if (level < 250) {//level 8

        varible = 8
    } else if (level < 350) {// level 9


        varible = 9
    } else if (level <= 410) {// level 10

        varible = 10
    } else if ( level<= 500) {// level 11

        varible = 11
    }else if ( level<600){// level 12

variable =12

    }else if (level <= 700){ // level 13

variable = 13

    }else if (level> 700){ // level 14

        variable = 14
    }
    return varible;
}
//fighting system 
function battle(x) {

    if (x.attack >= hero.health && x.name !== 'potion' && x.name !== 'treasure' && x.name !== "stronger weapon" && x.name !== "Merchant" && x.name !== "Blacksmith" && x.name != "King") {
        hero.health = 0;
    } else if (x.name === 'potion') {
        if (hero.health + x.health >= 100) {
            hero.health = 100;
        } else {
            hero.health += Number(x.health);
        }

    } else if (x.name === 'treasure') {
        hero.score += Number(x.gold);
    } else if (x.name === 'stronger weapon') {
        hero.attack += Number(x.attack);
    } else if (x.name === 'Merchant') {
        if (hero.health === 100){

        }else {
            document.getElementById('merch').innerHTML = `<input type="button" value="buy" onclick="buy()">` + `<input type="button" value="no, thanks" onclick="document.getElementById('merch').innerHTML=''">`
        }
       
    } else if (x.name === "Blacksmith") {
        document.getElementById('merch').innerHTML = `<input type="button" value="buy" onclick="improveWeapon()">` + `<input type="button" value="no, thanks" onclick="document.getElementById('merch').innerHTML=''">`
    } else if (x.name === "King" && count === 0) {

        document.getElementById('merch').innerHTML = `<input type="button" value="Accept the quest" onclick="quest()">` + `<input type="button" value="no, thanks" onclick="document.getElementById('merch').innerHTML=''">`
    }
    else {
        for (let index = 0; index < x.health; index++) {
            x.health -= hero.attack;
            hero.health -= x.attack;
            if (x.health <= 0) {
                hero.score += Number(x.gold);
                hero.points += x.points;
                if (x.hasOwnProperty('apples')){
                 hero.apples += x.apples;  
             }
                
               
                break;
            }
            if (hero.health <= 0) {

                hero.health = 0;
                break;
            }
        }

    }
    return x
}
// selecting an enemy system
function enemy() {

    //monsters        
    const rat = {
        name: 'rat',
        health: 2,
        gold: 5,
        attack: 1,
        points: 1,
        apples: Math.floor(Math.random() * 6),
        picture: 'https://i.pinimg.com/564x/c5/ea/24/c5ea242b36434b79d5fa9256b6a290ee.jpg'
    }
    const troll = {
        name: 'troll',
        health: 3,
        gold: 8,
        attack: 3,
        points: 2,
        apples: Math.floor(Math.random() * 6)
    }
    const bat = {
        name: 'bat',
        health: 2,
        gold: 6,
        attack: 2,
        points: 2,
        apples: Math.floor(Math.random() * 6)
    }

    const goblin = {
        name: 'goblin',
        health: 3,
        gold: 6,
        attack: 3,
        points: 2,
        apples: Math.floor(Math.random() * 6)
    }
    const orc = {
        name: 'orc',
        health: 5,
        gold: 6,
        attack: 4,
        points: 2,
        apples: Math.floor(Math.random() * 6)
    }
    const zombie = {
        name: 'zombie',
        health: 3,
        gold: 3,
        attack: 3,
        points: 2,
        apples: Math.floor(Math.random() * 6)
    }
    const bear = {
        name: 'bear',
        health: 6,
        gold: 5,
        attack: 3,
        points: 3,
        apples: Math.floor(Math.random() * 6)

    }
    const wolf = {
        name: 'wolf',
        health: 5,
        gold: 5,
        attack: 3,
        points: 3,
        apples: Math.floor(Math.random() * 6)

    }
    const spider = {
        name: "spider",
        health: 2,
        gold: 3,
        attack: 2,
        points: 3,
        apples: Math.floor(Math.random() * 10)
        
    }


    //stronger monsters (level 3)
    const golem = {
        name: 'golem',
        health: 10,
        gold: 10,
        attack: 9,
        points: 5,
        apples: Math.floor(Math.random() * 10)

    }
    const werewolf = {
        name: 'werewolf',
        health: 15,
        gold: 15,
        attack: 10,
        points: 7,
        poison: true,
        apples: Math.floor(Math.random() * 10),
        
    }
    const vampire = {
        name: 'vampire',
        health: 17,
        gold: 25,
        attack: 19,
        points: 10,
        poison: true,
        apples: Math.floor(Math.random() * 6)
    }
    const whiteWalker = {
        name: "White walker",
        health: 23,
        gold: 35,
        attack: 22,
        points: 15,
        poison: true,
        apples: Math.floor(Math.random() * 6)
    }
    const strongerZombie = {
        name: "zombie",
        health: 15,
        gold: 20,
        points: 12,
        attack: 18,
        apples: Math.floor(Math.random() * 10)
    }
    const scorpio = {
        name: "Giant scorpio",
        health: 15,
        gold: 22,
        attack: 18,
        points: 12,
        poison: true,
        apples: Math.floor(Math.random() * 10)

    }
    const packOfWolves = {

        name: "pack of wolves",
        health: 18,
        gold: 23,
        attack: 15,
        points: 23,
        apples: Math.floor(Math.random() * 10)
    }
    const giant = {
        name: "giant",
        health: 20,
        attack: 15,
        points: 15,
        gold: 12,
        apples: Math.floor(Math.random() * 10)
    }

    const drawf = {
        name: "drawf",
        health: 15,
        attack: 9,
        points: 9,
        gold: 11,
        apples: Math.floor(Math.random() * 10)



    }
    const giantRat = {

        name: "Rat King",
        health: 17,
        attack: 14,
        points: 15,
        gold: 25,
        apples: Math.floor(Math.random() * 10)
    }

    //famous people and legendary monsters (level 5)
    const boyko = {
        name: 'Boiko Borisov',
        health: 11,
        gold: 30,
        attack: 6,
        points: 50
    }
    const azis = {
        name: 'Azis',
        health: 11,
        gold: 35,
        attack: 6,
        points: 1
    }
    const trump = {
        name: 'Donald Trump',
        health: 11,
        gold: 45,
        attack: 7,
        points: 10
    }
    const obama = {
        name: "Barrack Obama",
        health: 11,
        gold: 40,
        attack: 6,
        points: 10
    }

    const mercury = {
        name: "Freddy Mercury",
        health: 11,
        gold: 37,
        attack: 6,
        points: 9
    }
    const dragon = {
        name: "dragon",
        health: 50,
        gold: 300,
        attack: 55,
        points: 70
    }
    const ktulu = {
        name: "Ktulu",
        health: 250,
        gold: 900,
        attack: 40,
        points: 80,
        poison: true

    }
    const demon = {
        name: "Demon",
        health: 40,
        gold: 350,
        attack: 70,
        points: 70
    }
    const sauron = {
        name: "Sauron",
        health: 50,
        gold: 1000,
        attack: 60,
        points: 200
    }
    //items
    const weapon = {

        name: "stronger weapon",
        attack: 1
    }
    const potion = {
        name: 'potion',
        health: 5
    }
    const treasure = {
        name: 'treasure',
        gold: 50
    }
    // NPCs 
    const merchant = {
        name: "Merchant",
        health: 10,
        price: 50
    }
    const blacksmith = {
        name: "Blacksmith",
        attack: 10,
        price: 70
    }
    const questGiver = {
        name: "King",
        prize: 150

    }
    let level1Enemies = [rat, bat, troll, wolf, spider, potion, weapon]
    let level2Enemies = [goblin, troll, bat, potion, treasure, weapon, merchant, zombie, bear, rat]
    let level3Enemies = [werewolf, orc, scorpio, potion, blacksmith, merchant, treasure, weapon, zombie, giant, drawf, questGiver]
    let level4Enemies = [golem, vampire, whiteWalker, strongerZombie, scorpio, potion, treasure, merchant, weapon, blacksmith, packOfWolves, drawf, giantRat, werewolf ]
    let level5Enemies = [boyko, azis, trump, obama, mercury, potion, treasure, weapon, dragon, ktulu, demon, sauron, merchant, blacksmith]
    let value = {}
    if ((leveling(hero.points) === 1)) {
        value = level1Enemies[Math.floor(Math.random() * level1Enemies.length)]
    } else if (leveling(hero.points) === 2) {
        value = level2Enemies[Math.floor(Math.random() * level2Enemies.length)]
    } else if (leveling(hero.points) === 3) {
        value = level3Enemies[Math.floor(Math.random() * level3Enemies.length)]
    } else if (leveling(hero.points) === 4) {

        value = level4Enemies[Math.floor(Math.random() * level4Enemies.length)]
    } else if (leveling(hero.points) >= 5) {

        value = level5Enemies[Math.floor(Math.random() * level5Enemies.length)]

    }
    value = battle(value)
    return value['name'];
}
function game() { // this function is the link to the HTML file
    hero.name= document.getElementById('hero').value
    document.getElementById('hero').setAttribute("type", "hidden")
    let status = enemy()
    let result = ''
    let advesery = ''
    if (hero.health > 0 && status !== 'treasure' && status !== 'potion' && status !== "stronger weapon" && status !== 'Merchant' && status !== 'Blacksmith' && status !== "King") {

        result = "win"

        advesery = "You killed a " + status 

        document.getElementById("button").setAttribute("value", "Carry On")
        list.push(status)


    } else if (hero.health > 0 && status === "potion") {
        result = "healed"
        advesery = "You drank a " + status
    } else if (hero.health > 0 && status === 'treasure') {
        result = "are getting rich fast"
        advesery = "You found a " + status
    } else if (hero.health > 0 && status === "stronger weapon") {

        result = "are getting stronger"
        advesery = "You found a " + status
    } else if (hero.health > 0&& hero.health<100 && status === 'Merchant') {
        result = " met a " + status
       

    } else if (hero.health > 0  && status === 'Blacksmith') {

        result = " met a " + status
      
    } else if (hero.health === 100 && status === "Merchant") {

        result = " are going deeper in the dungeon..."
    } else if (hero.health > 0 && status === "King") {

        result = " met a " + status
    }
    else if (hero.health <= 0) {
        hero.health = 0
        result = "lost"
        let listAsString = list.join(', ');
        document.getElementById("button").setAttribute("onclick", "location.reload()")
        document.getElementById("button").setAttribute("value", "Farewell")
        advesery = "You are killed by a " + status + "<br>" + "You killed: " + listAsString;
    }

    document.getElementById("intro").innerHTML = "You: " + result + "<br>" + advesery


    document.getElementById("battle").innerHTML = 'You have ' + ' ' + hero.score + 'gold' +
        '<br>' + 'Health: ' + hero.health + " "

    document.getElementById('level').innerHTML = `Greetings, ${hero.name}!` +"<br>"+'Your level: ' + leveling(hero.points) + "<br>" + "Your attack: " + hero.attack
    + "<br>"+ "You have: " + hero.apples + " apples"

}
