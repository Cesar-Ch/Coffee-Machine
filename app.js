const input = require('sync-input');

let water = 400;
let milk = 540;
let coffee = 120;
let cups = 9;
let money = 550;


while (true) {
    console.log("Write action (buy, fill, take, remaining, exit):");
    let action = input();
    if (action == "buy") {
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
        let coffeeType = input();
        if (coffeeType == "1") {
            if (water - 250 >= 0 && coffee - 16 >= 0 && cups - 1 >= 0) {
                water -= 250;
                coffee -= 16;
                cups -= 1;
                money += 4;
            } else if( water - 250 < 0) {
                console.log("Sorry, not enough water!");
            } else if( coffee - 16 < 0) {
                console.log("Sorry, not enough coffee beans!");
            } else if( cups - 1 < 0) {
                console.log("Sorry, not enough cups!");
            }else {
                console.log("I have enough resources, making you a coffee!");
            }
        } else if (coffeeType == "2") {
            if (water - 350 >= 0 && milk - 75 >= 0 && coffee - 20 >= 0 && cups - 1 >= 0) {
                water -= 350;
                milk -= 75;
                coffee -= 20;
                cups -= 1;
                money += 7;
            } else if( water - 350 < 0) {
                console.log("Sorry, not enough water!");
            } else if( milk - 75 < 0) {
                console.log("Sorry, not enough milk!");
            } else if( coffee - 20 < 0) {
                console.log("Sorry, not enough coffee beans!");
            } else if( cups - 1 < 0) {
                console.log("Sorry, not enough cups!");
            } else {
                console.log("I have enough resources, making you a coffee!");
            }
        } else if (coffeeType == "3") {
            if (water - 200 >= 0 && milk - 100 >= 0 && coffee - 12 >= 0 && cups - 1 >= 0) {
                water -= 200;
                milk -= 100;
                coffee -= 12;
                cups -= 1;
                money += 6;
            } else if( water - 200 < 0) {
                console.log("Sorry, not enough water!");
            } else if( milk - 100 < 0) {
                console.log("Sorry, not enough milk!");
            } else if( coffee - 12 < 0) {
                console.log("Sorry, not enough coffee beans!");
            } else if( cups - 1 < 0) {
                console.log("Sorry, not enough cups!");
            } else {
                console.log("I have enough resources, making you a coffee!");
            }
        }
    } else if (action == "fill") {
        console.log("Write how many ml of water do you want to add:");
        let waterAdd = Number(input());
        console.log("Write how many ml of milk do you want to add:");
        let milkAdd = Number(input());
        console.log("Write how many grams of coffee beans do you want to add:");
        let coffeeAdd = Number(input());
        console.log("Write how many disposable cups of coffee do you want to add:");
        let cupsAdd = Number(input());
        water += waterAdd;
        milk += milkAdd;
        coffee += coffeeAdd;
        cups += cupsAdd;
    } else if (action == "take") {
        console.log(`I gave you $${money}`);
        money = 0;
    } else if (action == "remaining") {
        console.log(`The coffee machine has:
${water} of water
${milk} of milk
${coffee} of coffee beans
${cups} disposable cups
${money} of money`);
    } else if (action == "exit") {
        break;
    }
}
