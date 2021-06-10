  //initial hero stats
  let hero = {
    name: 'hero',
    health: 100,
    score: 0,
    attack: 3,
    points: 0,
    poisoned: false // still under development
}
let list = []

//buy stuff
function buy() {
if (hero.score-50>=0){   if (hero.health + 30 >= 100) {
        hero.health = 100;
        hero.score -= 50;
    } else {
        hero.health += 30;
        hero.score -= 50;
    }
}else {

}
document.getElementById('merch').innerHTML=''
}
// leveling up system
function leveling(level) {
    let varible = 0

    if (level < 10) {

        varible = 1
    } else if (level < 30) {
        varible = 2
    } else if (level < 100) {
        varible = 3
    } else if (level < 200) {
        varible = 4
    } else if (level > 400) {

        variable = 5
    }
    return varible;
}
//fighting system 
function battle(x) {

    if (x.attack >= hero.health && x.name !== 'potion' && x.name !== 'treasure' && x.name !== "stronger weapon" && x.name !== "Merchant") {
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

    }
    else {
        for (let index = 0; index < x.health; index++) {
            x.health -= hero.attack;
            hero.health -= x.attack;
            if (x.health <= 0) {
                hero.score += Number(x.gold);
               hero.points+= x.points;
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
        points: 1
    }
    const troll = {
        name: 'troll',
        health: 3,
        gold: 8,
        attack: 3,
        points: 2
    }
    const bat = {
        name: 'bat',
        health: 2,
        gold: 6,
        attack: 2,
        points: 2
    }

    const goblin = {
        name: 'goblin',
        health: 3,
        gold: 6,
        attack: 3,
        points: 2
    }
    const orc = {
        name: 'orc',
        health: 5,
        gold: 6,
        attack: 4,
        points: 2,
    }
    const zombie = {
        name: 'zombie',
        health: 3,
        gold: 3,
        attack: 3,
        points:2
    }
    //stronger monsters (level 3)
    const golem = {
        name: 'golem',
        health: 10,
        gold: 10,
        attack: 9,
        points: 5
    }
    const werewolf = {
        name: 'werewolf',
        health: 15,
        gold: 15,
        attack: 10,
        points: 7,
        poison: true
    }
    const vampire = {
        name: 'vampire',
        health: 17,
        gold: 25,
        attack: 19,
        points: 10,
        poison: true
    }
    const whiteWalker = {
        name: "White walker",
        health: 23,
        gold: 35,
        attack: 22,
        points: 15,
        poison: true
    }
    const strongerZombie = {
        name: "zombie",
        health: 15,
        gold: 20,
        points: 12,
        attack: 18
    }
    const scorpio = {
        name: "Giant scorpio",
        health: 15,
        gold: 22,
        attack: 18,
        points: 12,
        poison: true

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
        attack: 80,
        points: 80,
        poison: true

    }
    const demon = {
        name: "Demon",
        health: 200,
        gold: 350,
        attack: 70,
        points: 70
    }
    const sauron = {
        name: "Sauron",
        health: 500,
        gold: 1000,
        attack: 150,
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
    // NPCs (this section is still under development)
    const merchant = {
        name: "Merchant",
        health: 10,
        price: 50
    }
    const blacksmith = {
        name: "Blacksmith",
        attack: 5,
        price: 70
    }
    const questGiver = {
        name: "King",
        prize: 150

    }

    /*places 
    // the main idea is that there should be a place like town, villige or a camp, probably a boss level. With my skills up to this point 06/06/2021
    // is going to be poorly executed so no for now there are not going have such objects*/
    let basicEnemies = [rat, troll, bat, goblin, potion, treasure, weapon, orc, zombie, merchant]
    let strongerEnemies = [golem, werewolf, vampire, whiteWalker, strongerZombie, scorpio, potion, weapon, treasure, merchant]
    let specialEnemies = [boyko, azis, trump, obama, mercury, potion, treasure, weapon, dragon, ktulu, demon, sauron]


    let value = {}
    if ((leveling(hero.points) < 3)) {
        value = basicEnemies[Math.floor(Math.random() * basicEnemies.length)]
    } else if (leveling(hero.points) >= 3) {
        value = strongerEnemies[Math.floor(Math.random() * strongerEnemies.length)]
    } else if (leveling(hero.points) >= 5) {
        value = specialEnemies[Math.floor(Math.random() * specialEnemies.length)]
    }
    value = battle(value)
    return value['name'];
}
function game() { // this function is the link to the HTML file
    let status = enemy()
    let result = ''
    let advesery = ''
    if (hero.health > 0 && status !== 'treasure' && status !== 'potion' && status !== "stronger weapon" && status !== 'Merchant') {

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
    } else if (hero.health > 0 && status === 'Merchant' && leveling(hero.points) >=2 ) {
		 advesery = "You met a " + status
       document.getElementById('merch').innerHTML= `<input type="button" value="buy" onclick="buy()">` + `<input type="button" value="no, thanks" onclick="document.getElementById('merch').innerHTML=''">`
    }else if (hero.health>0 && status === 'Merchant' && leveling(hero.points) ===1 ){
		advesery ="You are going deeper in the dungeon..."
	}
    else {
        result = "lost"
        let listAsString = list.join(', ');
        document.getElementById("button").setAttribute("onclick", "location.reload()")
        document.getElementById("button").setAttribute("value", "Farewell")
        advesery = "You are killed by a " + status + "<br>" + "You killed: " + listAsString;
    }

    document.getElementById("intro").innerHTML = "You: " + result + "<br>" + advesery


    document.getElementById("battle").innerHTML = 'You have ' + ' ' + hero.score + 'gold' +
        '<br>' + 'Health: ' + hero.health + " "

    document.getElementById('level').innerHTML = 'Your level: ' + leveling(hero.points) + "<br>" + "Your attack: " + hero.attack
}