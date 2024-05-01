let entrees = [];
let entreeNames = [];
let entreeList = [];
let mains = [];
let mainNames = [];
let mainList = [];

let sides = [];
let sideNames = [];
let sideList = [];

let preparation = [];
let preparationNames = [];
let preparationList = [];
let currentMenu = [];

let entreeChoice, mainChoice, sideChoice1, sideChoice2
let entreePrice, mainPrice, side1Price, side2Price
let entreeComment, mainComment, side1Comment, side2Comment


let preparationChoice = 'none';
let preparationPrice = 0;
let preparationComment

let bill = 0;

const entreeHeader = 'ENTREE';
const mainsHeader = 'MAIN';
const sidesHeader = 'SIDE';
const drinksHeader = 'DRINK';

let sideOrDrink = '';

let hours
let visitTime
let mealTime

class MenuError extends Error {
        constructor(msg = 'An error occurred', ...params) {
            super(...params);
            this.name = this.constructor.name;
            this.msg = msg;
        }
    }

function visitTimeCheck(time) {
time = parseInt(time, 10);
if (isNaN(time) || time < 0 || time > 23) {
    alert(`Please enter a number between 0 and 23.`)
    welcomeClients();
} else {
    hours = time;
    setmealTime(hours);
    menuBuilder(mealTime, dishes);
    showMenu(mealTime);
}
}
      
function setmealTime(hours) {
try {
if ((hours >= 17 && hours <= 23) || (hours >= 0 && hours <= 5)) {
    mealTime = 'Dinner';
} else if (hours >= 6 && hours <= 11) {
    mealTime = 'Breakfast';
} else if (hours >= 12 && hours < 17) {
    mealTime = 'Lunch';
}
} catch(e) {
throw new MenuError('MenuError', 'Error with the hours setting.', e);
}
}

const dishes = [
  { name: 'Season Salad', price: 5, comment: "We use locally-grown lettuce in that salad.", alt:'salad', meal: 'Lunch', list: 'entree' },
  { name: "Granmas Soup", price: 4.5, comment: "A classic and comforting soup.", alt:'soup', meal: 'Lunch', list: 'entree' },
  { name: 'Cheese Omelette', price: 3, comment: "The melted cheese in it is simply delicious.", alt:'omelette', meal: 'Lunch', list: 'entree' },
  { name: 'Sirloin', price: 12, comment: "A prime beef cut from grass-fed cows.", alt:'steak', meal: 'Lunch', list: 'main' },
  { name: 'Grilled Salmon', price: 15, comment: "If you like fish, you'll love our salmon.", alt:'salmon', meal: 'Lunch', list: 'main' },
  { name: 'Veggie Steak', price: 9, comment: "It's a rich dish full of flavor.", alt:'veggie', meal: 'Lunch', list: 'main' },
  { name: 'Fries', price: 5, comment: 'A classic for children and adults alike.', alt:'potatoes', meal: 'Lunch', list: 'side' },
  { name: 'Rice', price: 4, comment: 'We steam our rice with herbs.', alt:'rice', meal: 'Lunch', list: 'side' },
  { name: 'Steamed Veggies', price: 3, comment: 'Our veggie selection changes with the season.', alt:'vegetables', meal: 'Lunch', list: 'side' },
  { name: 'Charcoal-grilled', price: 2, comment: 'It gives the dish a wonderful aroma.', alt:'charcoal', meal: 'Lunch', list: 'preparation' },
  { name: 'Steamed', price: -1, comment: "Keeps the juices and vitamins.", alt:'steamed', meal: 'Lunch', list: 'preparation'  },
  { name: 'Deep-fried', price: 3, comment: 'It gives the dish the ultimate touch.', alt:'fried', meal: 'Lunch', list: 'preparation' },
  
  { name: 'Season Salad', price: 6, comment: "We use locally-grown lettuce in that salad.", alt:'salad', meal: 'Dinner', list: 'entree' },
  { name: "Granmas Soup", price: 5.5, comment: "A classic and comforting soup.", alt:'soup', meal: 'Dinner', list: 'entree' },
  { name: 'Cheese Omelette', price: 4, comment: "The melted cheese in it is simply delicious.", alt:'omelette', meal: 'Dinner', list: 'entree' },
  { name: 'Sirloin', price: 13, comment: "A prime beef cut from grass-fed cows.", alt:'steak', meal: 'Dinner', list: 'main' },
  { name: 'Grilled Salmon', price: 16, comment: "If you like fish, you'll love our salmon.", alt:'salmon', meal: 'Dinner', list: 'main' },
  { name: 'Veggie Steak', price: 10, comment: "It's a rich dish full of flavor.", alt:'veggie', meal: 'Dinner', list: 'main' },
  { name: 'Fries', price: 6, comment: 'A classic for children and adults alike.', alt:'potatoes', meal: 'Dinner', list: 'side' },
  { name: 'Rice', price: 5, comment: 'We steam our rice with herbs.', alt:'rice', meal: 'Dinner', list: 'side' },
  { name: 'Steamed Veggies', price: 4, comment: 'Our veggie selection changes with the season.', alt:'vegetables', meal: 'Dinner', list: 'side' },
  { name: 'Charcoal-grilled', price: 3, comment: 'It gives the dish a wonderful aroma.', alt:'charcoal', meal: 'Dinner', list: 'preparation' },
  { name: 'Steamed', price: 0, comment: "Keeps the juices and vitamins.", alt:'steamed', meal: 'Dinner', list: 'preparation'  },
  { name: 'Deep-fried', price: 4, comment: 'It gives the dish the ultimate touch.', alt:'fried', meal: 'Dinner', list: 'preparation' },
  
  { name: 'Fruit Bowl', price: 5, comment: 'A perfect combination of seasonal fruits.', alt:'fruit', meal: 'Breakfast', list: 'entree'},
  { name: "Granmas Porridge", price: 3, comment: 'Slow-cooked porridge with full-fat milk.', alt:'porridge', meal: 'Breakfast', list: 'entree' },
  { name: 'French Omelette', price: 2, comment: 'A classic omelette, if done right, never fails to impress.', alt:'omelette', meal: 'Breakfast', list: 'entree' },
  { name: 'Pancakes', price: 8, comment: 'Our best dish to treasure your breakfast.', alt:'pancake', meal: 'Breakfast', list: 'main'  },
  { name: 'Toast', price: 5, comment: 'A simple yet delicious way to start your day.', alt:'toast', meal: 'Breakfast', list: 'main' },
  { name: 'Scones', price: 6, comment: 'An English classic for every moment.', alt:'scones', meal: 'Breakfast', list: 'main'  },
  { name: 'Fresh coffee', price: 2, comment: 'We always use fair trade coffee beans.', alt:'coffee', meal: 'Breakfast', list: 'side' },
  { name: 'Earl Grey Tea', price: 1, comment: "It's a great way to warm up if you don't like coffee.", alt:'tea', meal: 'Breakfast', list: 'side'  },
  { name: 'Orange Juice', price: 3, comment: 'We make it fresh on the spot.', alt:'juice', meal: 'Breakfast', list: 'side' },
  { name: 'With butter', price: 2, comment: 'It gives the dish a wonderful flavour.', alt:'butter', meal: 'Breakfast', list: 'preparation' },
  { name: 'With marmelade', price: 1, comment: "Nothing like a touch of fruit.", alt:'marmelade', meal: 'Breakfast', list: 'preparation'  },
  { name: 'With honey', price: 3, comment: "It's my favourite sweetener.", alt:'honey', meal: 'Breakfast', list: 'preparation' },

]

try {
function menuBuilder(meal, dishes) {
  for (const dish of dishes) {
    if (dish.meal === meal) {
      const dishLowerCase = {
        ...dish,
        name: dish.name.toLowerCase()
      };
      if (dish.list === 'entree') {
        currentMenu.push(dishLowerCase);
        entrees.push(`${dish.name} (${dish.price} €)`);
        entreeList.push(`${dish.name}`, `${dish.alt}`);
        entreeNames = entreeList.map(name => name.toLowerCase());
      } 
      if (dish.list === 'main') {
        currentMenu.push(dishLowerCase);
        mains.push(`${dish.name} (${dish.price} €)`);
        mainNames.push(`${dish.name}`, `${dish.alt}`);
        mainList.push(`${dish.name}`, `${dish.alt}`);
        mainNames = mainList.map(name => name.toLowerCase());
      }
      if (dish.list === 'preparation') {
        currentMenu.push(dishLowerCase);
        preparation.push(`${dish.name} (${dish.price} €)`);
        preparationNames.push(`${dish.name}`, `${dish.alt}`);
        preparationList.push(`${dish.name}`, `${dish.alt}`);
        preparationNames = preparationList.map(name => name.toLowerCase());
      }
      if (dish.list === 'side') {
        currentMenu.push(dishLowerCase);
        sides.push(`${dish.name} (${dish.price} €)`);
        sideNames.push(`${dish.name}`, `${dish.alt}`);
        sideList.push(`${dish.name}`, `${dish.alt}`);
        sideNames = sideList.map(name => name.toLowerCase());
      }
    }
  }
  return [entreeNames, mainNames, sideNames, preparationNames];
}
} catch(e) {
  throw new MenuError('MenuError', 'Error with the menuBuilder function.', e);
}
menuBuilder(mealTime, dishes);


try {
function showMenu (mealTime) {
  if (mealTime != 'Breakfast') {
    alert(`                                       ${mealTime} Menu
    ———————————————————————————
    ${entreeHeader}S
    ${entrees.join(' | ')}

    ${mainsHeader}S
    ${mains.join(' | ')}
    ${preparation.join(' | ')}

    ${sidesHeader}S
    ${sides.join(' | ')}`);
    sideOrDrink = 'side';
  } else {
    alert(`                                       ${mealTime} Menu
    ———————————————————————————
    ${entreeHeader}S
    ${entrees.join(' | ')}

    ${mainsHeader}S
    ${mains.join(' | ')}
    Extra: ${preparation.join(' | ')}

    ${drinksHeader}S
    ${sides.join(' | ')}`);
    sideOrDrink = 'drink';
  }
}
} catch(e) {
  throw new MenuError('MenuError', 'Error with the showMenu function.', e);
}

try {
function dishFinder (dish, menu) {
for (i = 0; i < menu.length; i++) {
  if (menu[i]['name'] === dish || menu[i]['alt'] === dish) {
    const price = menu[i]['price'];
    const comment = menu[i]['comment'];
    return [price, comment]
    break;
  }
}
}
} catch(e) {
  throw new MenuError('MenuError', 'Error with the dishFinder function.', e);
}

function welcomeClients () {
visitTime = prompt(`Welcome to the Bottega DevCamp Diner!🍴

Please enter the hour of the day for your visit
and I'll show you the corresponding menu.

                ~~ Our Meal Times ~~                
Breakfast 6-11 | Lunch 12-16 | Dinner 17-5`, `(Type a number from 0 to 23)`)
    visitTimeCheck(visitTime);
}
welcomeClients()

function orderEntree() {
try {
entreeChoice = prompt(`What would you like to order as entree?
${entrees.join(' | ')}`);
  let result = choiceChecker(entreeChoice, entreeNames)
  if (result === null) {
    alert(`Please pick something from the menu.`)
    orderEntree();           
  } else {
    [entreeChoice, entreePrice, entreeComment] = result;
    confirm(`So ${entreeChoice}, right?\n${entreeComment}\nThat would be ${entreePrice} €.`);
    bill += entreePrice;
  } 
} catch(e) {
  throw new MenuError('MenuError', 'Error with the entree prompt.', e);
}
}
orderEntree();

function orderMain() {
try {
mainChoice = prompt(`What would you like to order as main dish?
${mains.join(' | ')}`);
  let result = choiceChecker(mainChoice, mainNames)
  if (result === null) {
    alert(`Please pick something from the menu.`)
    orderMain();          
  } else {
    [mainChoice, mainPrice, mainComment] = result;
    confirm(`So ${mainChoice}, right?\n${mainComment}\nThat would be ${mainPrice} €.`);
    bill += mainPrice;
  } 
} catch(e) {
  throw new MenuError('MenuError', 'Error with the main prompt.', e);
}
}
orderMain();

function orderPreparation() {
try {
preparationChoice = prompt(`How would you like us to prepare your ${mainChoice}?
${preparation.join(' | ')}`);
  let result = choiceChecker(preparationChoice, preparationNames)
  if (result === null) {
    alert(`Please pick something from the menu.`)
    orderPreparation();   
  } else {
    [preparationChoice, preparationPrice, preparationComment] = result;
    confirm(`So ${preparationChoice}, right?\n${preparationComment}\nThat would be ${preparationPrice} €.`);
    bill += preparationPrice;
  }
} catch(e) {
  throw new MenuError('MenuError', 'Error with the preparation prompt.', e);
}
}
orderPreparation();

function orderSide1() {
try {
sideChoice1 = prompt(`What would you like to order as first ${sideOrDrink}?
${sides.join(' | ')}`);
let result = choiceChecker(sideChoice1, sideNames)
  if (result === null) {
    alert(`Please pick something from the menu.`)
    orderSide1();           
  } else {
    [sideChoice1, side1Price, side1Comment] = result;
    confirm(`So ${sideChoice1}, right?\n${side1Comment}\nThat would be ${side1Price} €.`);
    bill += side1Price;
  } 
} catch(e) {
  throw new MenuError('MenuError', 'Error with the side1 prompt.', e);
}
}
orderSide1();
  
function orderSide2() {
try {
sideChoice2 = prompt(`What would you like to order as second ${sideOrDrink}?
${sides.join(' | ')}`);
let result = choiceChecker(sideChoice2, sideNames)
  if (result === null) {
    alert(`Please pick something from the menu.`)
    orderSide2();           
  } else {
    [sideChoice2, side2Price, side2Comment] = result;
    confirm(`So ${sideChoice2}, right?\n${side2Comment}\nThat would be ${side2Price} €.`);
    bill += side2Price;
  }
} catch(e) {
  throw new MenuError('MenuError', 'Error with the side2 prompt.', e);
}
}
orderSide2();

try {
confirm(`Ok, so summing up you will be having:
${entreeHeader}: ${entreeChoice} (${entreePrice} €)
${mainsHeader}: ${mainChoice} (${mainPrice} €) [${preparationChoice} (${preparationPrice} €)]
${sideOrDrink.toUpperCase()} 1: ${sideChoice1} (${side1Price} €)
${sideOrDrink.toUpperCase()} 2: ${sideChoice2} (${side2Price} €)
The total would be ${bill} €.
Enjoy your meal!`);
} catch(e) {
  throw new MenuError('MenuError', 'Error with the menu final confirmation prompt.', e);
}


function choiceChecker (choice, list) {
  if (typeof choice !== 'string') {
    return null;
  } else {
    choice = choice.toLowerCase();
    if (list.includes(choice) === false || choice.trim() === '') {
    return null;
  } else {
  let [choicePrice, choiceComment] = dishFinder(choice, currentMenu);
      return [choice, choicePrice, choiceComment];
    }
}
}

try {
function confirmationPrompt(choice) {
  if (choice === true) {
    welcomeClients(mealTime);
  }
}
} catch(e) {
  throw new MenuError('MenuError', 'Error with the confirmation function.', e);
}