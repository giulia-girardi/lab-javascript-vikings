// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else if (this.health <= 0){
            return `${this.name} has died in act of combat`;
        } 
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (this.health <= 0) {
            return "A Saxon has died in combat";
        };
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(oneViking) {
        this.vikingArmy.push(oneViking);
    }
    addSaxon(oneSaxon) {
        this.saxonArmy.push(oneSaxon);
    }
    

    vikingAttack(){
  
        let i = Math.floor(Math.random() * this.saxonArmy.length);
        let x = Math.floor(Math.random() * this.vikingArmy.length);
    
        let result = this.saxonArmy[i].receiveDamage(this.vikingArmy[x].attack()); 
    
        if (this.saxonArmy[i].health <= 0){
            this.saxonArmy.splice(i);
        }
    
        return result;
    }
    saxonAttack(){
    
        let i = Math.floor(Math.random() * this.saxonArmy.length);
        let x = Math.floor(Math.random() * this.vikingArmy.length);
    
        let result = this.vikingArmy[x].receiveDamage(this.saxonArmy[i].attack()); 
    
        if (this.vikingArmy[x].health <= 0){
            this.vikingArmy.splice(x);
        }
    
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

const warOne = new War();
const firstViking = new Viking("Giulia", 100, 800)
//warOne.addViking(firstViking)
warOne.addViking(firstViking)
const firstSaxon = new Saxon("Mat", 200, 500)
warOne.addSaxon(firstSaxon)
warOne.vikingAttack()
