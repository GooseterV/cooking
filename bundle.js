
const INGREDIENTS = {
	// veggies 
	"Vegetables":[
		"Tomato",
		"Onion", 	
		"Carrot", 
		"Potato",
		"Cucumber",
		"Leek", 
		"Garlic", 
		"Red Potato",  
		"Purple Potato",
		"Yellow Tomato", 
		"Lettuce", 
		"Cabbage", 
		"Red Cabbage",
		"Pumpkin",
		"Cucumbers",
		"Red Bell Pepper",
		"Orange Bell Pepper",
		"Yellow Bell Pepper",
		"Jalapeño",
		"Habanero",
		"Ginger Root",
		"Green Bell Pepper",
		"Radish",
		"Asparagus",
		"Brussel Sprout",
		"Beetroot",
		"Corn",
		"Mushroom",
		"Chili Pepper",
		"Eggplant",
		"Horseradish Root",
		"Zucchini"
	],
	// fruits
	"Fruits":[
		"Strawberry",
		"Mango",
		"Orange",
		"Blueberry",
		"Cherry",
		"Pineapple",
		"Tangerine",
		"Apple",
		"Banana",
		"Kiwi",
		"Lime",
		"Lemon",
		"Honey Mango",
		"Blackberry",
		"Raspberry"
	],
	// meats
	"Meats":[
		"Duck Breast",
		"T-Bone Steak",
		"Beef Patty",
		"Turkey Patty",
		"Steak",
		"Chicken Breast",
		"Chicken Thigh",
		"Chicken Wing",
		"Pork Tenderloin",
		"Turkey Bacon",
		"Bacon",
		"Turkey",
		"Roast Beef",
		"Ground Beef"
	],
	// seafood
	"Seafood":[
		"Oyster",
		"Cod",
		"Salmon",
		"Lake Whitefish",
		"Pufferfish",
		"Anchovy",
		"Sardine",
		"Trout",
		"Scallop",
		"Shrimp",
		"Swordfish"
	],
	// herbs 
	"Herbs":[
		"Dill",
		"Cilantro",
		"Rosemary",
		"Thyme",
		"Parsley",
		"Basil",
		"Lavender",
		"Bay Leaf",
		"Chives",
		"Sage",
		"Scallion"
	],
	// breads and pasta stuff
	"Carbs":[
		"White Bread",
		"Sourdough",
		"Rye Bread",
		"Whole Wheat Bread",
		"Ziti",
		"Penne",
		"Rigatoni",
		"Top Burger Bun",
		"Bottom Burger Bun",
		"Hotdog Bun",
		"Olive Bread",
		"Baguette",
		"Italian Bread",
		"Hardtack",
		"Challah Bread"
	],
	// dairies like milk and cheese
	"Dairy":[
		"Cheddar Cheese",
		"Goat Cheese",
		"Gouda",
		"Swiss Cheese",
		"Mozarrella",
		"Gorgonzola",
		"Feta",
		"Butter",
		"Cream Cheese",
		"Whole Milk",
		"Low-Fat Milk",
		"Skim Milk",
		"Goat Milk"
	],

	"Liquids":[
		"Almond Milk",
		"Coconut Milk",
		"Root Beer",
		"Red Wine",
		"Vodka",
		"White Wine",
		"Rice Wine",
		"Gin",
		"Rum",
		"Vinegar",
		"Sunflower Oil",
		"Vegetable Oil",
		"Olive Oil",
		"Water"


	],
	// seasonings, spices and powders
	"Seasonings":[
		"Flour",
		"Granulated Sugar",
		"Powdered Sugar",
		"Brown Sugar",
		"Almond Flour",
		"Wheat Flour",
		"Cinnamon Sugar",
		"Black Pepper",
		"Salt",
		"Allspice",
		"Cayenne Pepper Seasoning",
		"Chili Powder",
		"Red Pepper",
		"Paprika"
	],
	// other stuff such as eggs 
	"Other":[
		"Egg",
		"Apple Butter",
		"Walnut Butter",
		"Almond Butter",
		"Grape Jelly",
		"Strawberry Jelly",
		"Peanut Butter"
	],
};

const INGREDIENT_IMAGES = {
	"Almond": "src/almond.png",
	"Anchovy": "src/anchovy.png",
	"Apple": "src/apple.png",
	"Apple Butter": "src/apple_butter.png",
	"Apple Butter Liquid": "src/apple_butter_liquid.png",
	"Asparagus": "src/asparagus.png",
	"Avocado": "src/avocado.png",
	"Bacon": "src/bacon.png",
	"Banana": "src/banana.png",
	"Basil": "src/basil.png",
	"Bay": "src/bay.png",
	"Beef Chuck": "src/beefChuck.png",
	"Beef Patty": "src/beef_patty.png",
	"Beetroot": "src/beetroot.png",
	"Blackberry": "src/blackberry.png",
	"Black Pepper": "src/blackPepper.png",
	"Blueberry": "src/blueberry.png",
	"Box": "src/box.png",
	"Bread": "src/bread.png",
	"Broccoli": "src/broccoli.png",
	"Brussels Sprouts": "src/brusselsSprouts.png",
	"Burger Bun": "src/burgerBun.png",
	"Burger Patty": "src/burgerPatty.png",
	"Butter": "src/butter.png",
	"Button Mushroom": "src/buttonMushroom.png",
	"Cabbage": "src/cabbage.png",
	"Cantaloupe": "src/cantaloupe.png",
	"Carrot": "src/carrot.png",
	"Cashew": "src/cashew.png",
	"Charcoal": "src/charcoal.png",
	"Cheddar": "src/cheddar.png",
	"Cherry": "src/cherry.png",
	"Chicken Breast": "src/chickenBreast.png",
	"Chicken Leg": "src/chickenLeg.png",
	"Chicken Wing": "src/chickenWing.png",
	"Chili Pepper": "src/chili_pepper.png",
	"Chives": "src/chives.png",
	"Cilantro": "src/cilantro.png",
	"Cinnamon Stick": "src/cinnamonStick.png",
	"Cocoa": "src/cocoa.png",
	"Coconut": "src/coconut.png",
	"Cod": "src/cod.png",
	"Cooking Pot": "src/cooking_pot.png",
	"Cooking Pot Bubbles": "src/cooking_pot_bubbles.png",
	"Cooking Pot Bubbles 1": "src/cooking_pot_bubbles_1.png",
	"Cooking Pot Bubbles 2": "src/cooking_pot_bubbles_2.png",
	"Corn Cob": "src/cornCob.png",
	"Cucumber": "src/cucumber.png",
	"Dill": "src/dill.png",
	"Dollar": "src/dollar.png",
	"Duck Breast": "src/duck_breast.png",
	"Durian": "src/durian.png",
	"Egg": "src/egg.png",
	"Eggplant": "src/eggplant.png",
	"Empty Pan": "src/empty_pan.png",
	"English Muffin": "src/englishMuffin.png",
	"Feta": "src/feta.png",
	"Fig": "src/fig.png",
	"Fried Egg": "src/fried_egg.png",
	"Fusilli": "src/fusilli.png",
	"Garlic": "src/garlic.png",
	"Ginger": "src/ginger.png",
	"Glowing Blue Patty": "src/glowing_blue_patty.png",
	"Goat Cheese": "src/goatCheese.png",
	"Gorgonzola": "src/gorgonzola.png",
	"Gouda": "src/gouda.png",
	"Grandmas Ashes": "src/grandmas_ashes.png",
	"Grape": "src/grape.png",
	"Green Bell Pepper": "src/green_bell_pepper.png",
	"Guava": "src/guava.png",
	"Habanero": "src/habanero.png",
	"Ham": "src/ham.png",
	"Hardtack": "src/hardtack.png",
	"Honeydew": "src/honeydew.png",
	"Horseradish": "src/horseradish.png",
	"Jalapeno": "src/jalapeno.png",
	"Kiwi": "src/kiwi.png",
	"Lamb Chop": "src/lambChop.png",
	"Lasagna": "src/lasagna.png",
	"Lemon": "src/lemon.png",
	"Lime": "src/lime.png",
	"Lobster": "src/lobster.png",
	"Mango": "src/mango.png",
	"Meal Button": "src/meal_button.png",
	"Milk Jug": "src/milk_jug.png",
	"Milk Liquid": "src/milk_liquid.png",
	"Mint Leaf": "src/mintLeaf.png",
	"Mozzarella": "src/mozzarella.png",
	"Onion": "src/onion.png",
	"Orange": "src/orange.png",
	"Orange Bell Pepper": "src/orange_bell_pepper.png",
	"Oregano": "src/oregano.png",
	"Oyster": "src/oyster.png",
	"Pancake": "src/pancake.png",
	"Pancetta": "src/pancetta.png",
	"Pan With Egg": "src/pan_with_egg.png",
	"Parmesan": "src/parmesan.png",
	"Parsley": "src/parsley.png",
	"Parsley Root": "src/parsleyRoot.png",
	"Parsnip": "src/parsnip.png",
	"Peach": "src/peach.png",
	"Peanut": "src/peanut.png",
	"Pear": "src/pear.png",
	"Pecan": "src/pecan.png",
	"Penne": "src/penne.png",
	"Persimmon": "src/persimmon.png",
	"Pineapple": "src/pineapple.png",
	"Red Bell Pepper": "src/red_bell_pepper.png",
	"Root Beer": "src/root_beer.png",
	"Root Beer Liquid": "src/root_beer_liquid.png",
	"Skim Milk": "src/skim_milk.png",
	"Steak": "src/steak.png",
	"Swiss Cheese": "src/swiss_cheese.png",
	"Table": "src/table.png",
	"Tbone Steak": "src/tbone_steak.png",
	"Toggle Pan Button": "src/toggle_pan_button.png",
	"Tomato": "src/tomato.png",
	"Transparent": "src/transparent.png",
	"Turkey Patty": "src/turkey_patty.png",
	"Vodka": "src/vodka.png",
	"Water Liquid": "src/water_liquid.png",
	"Whole Milk": "src/whole_milk.png",
	"Yellow Bell Pepper": "src/yellow_bell_pepper.png",
	"Zucchini": "src/zucchini.png",
	"Top Burger Bun": "src/burgerBun.png",
	"Bottom Burger Bun":"src/burgerBun.png",
	"Whole Milk Liquid":"src/milk_liquid.png",
	"Skim Milk Liquid":"src/milk_liquid.png",
	"Low-Fat Milk Liquid":"src/milk_liquid.png",
	"Low-Fat Milk":"src/milk_jug.png",
	"Water":"src/water.png",
	"White Bread":"src/bread.png",
	"Orange Juice Liquid":"src/orange_juice_liquid.png",
	"Ziti":"src/ziti.png",
	"Challah Bread":"src/challah_bread.png",
	"Lake Whitefish":"src/lake_whitefish.png",
	"Scallop":"src/scallop.png",
	"Scallion":"src/scallion.png",
	"Trout":"src/trout.png",
	"Salmon":"src/salmon.png",
	"T-Bone Steak":"src/tbone_steak.png"

};

const CATGEGORIES = Object.keys(INGREDIENTS);
const MEALS = [
	new Meal({
		"Name":"Burger and Fries",
		"Ingredients":[
			new MealIngredient({
				"Name":"Potato",
				"Method":"Fried",
				"Pieces":20,
				"Amount":300,
				"CookPercent":100
			}),
			new MealIngredient({
				"Name":"Beef Patty",
				"Method":"Grilled",
				"Pieces":1,
				"Amount":235,
				"CookPercent":100
			}),
			new MealIngredient({
				"Name":"Tomato",
				"Method":"Slightly Grilled",
				"Pieces":1,
				"Amount":100,
				"CookPercent":25
			}),
			new MealIngredient({
				"Name":"Cheddar Cheese",
				"Method":"Barely Grilled",
				"Pieces":1,
				"Amount":50,
				"CookPercent":5
			}),
			new MealIngredient({
				"Name":"Top Burger Bun",
				"Method":"Raw",
				"Pieces":1,
				"Amount":150,
				"CookPercent":0
			}),
			new MealIngredient({
				"Ingredient":"Bottom Burger Bun",
				"Method":"Raw",
				"Pieces":1,
				"Amount":150,
				"CookPercent":0
			})
		],
		"Price":5
	}),
	new Meal({
		"Name":"Steak and Fries",
		"Ingredients":[
			new MealIngredient({
				"Name":"Steak",
				"Method":"Cooked",
				"Pieces":1,
				"Amount":300,
				"CookPercent":100
			}),
			new MealIngredient({
				"Name":"Potato",
				"Method":"Fried",
				"Pieces":15,
				"Amount":275,
				"CookPercent":100
			}),
		],
		"Price":19
	})
]
let INGREDIENTS_ACTIVE = false;
let ACTIVE_CATEGORIES = [];
let ACTIVE_INGREDIENT = null;
let PAN_ON = false;
let PAN_ON_INTERVAL;
let PAN_OFF_INTERVAL;
let POT_ON = false;
let POT_ON_INTERVAL;
let POT_OFF_INTERVAL;
let MEAL_INGREDIENTS = [];
let CONFIG_ON = false;
let CONFIG;
let RESTAURANT = new Restaurant();

const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

async function addFood(name, grams) {
	const food = {
		"name":name,
		"density":grams,
	};
	INGREDIENTS.push(food);

};

async function addMeal(name, ingredients) {
	const meal = {
		"name":name,
		"ingredients":ingredients
	}
	MEALS.push(meal);

};

async function * getIngredients(food) {
	for (let ingredient of food.ingredients) {
		yield ingredient;
	};
};

async function handleIngredientEvent(evt) {
	handleIngredientClick(evt.currentTarget.ingredient);
};

async function handleCategoryEvent(evt) {
	showIngredientsForCategory(evt.currentTarget.category, evt.currentTarget.isactive);
};

async function addIngredient(ingredient) {
	alert(`Added ingredient: ${ingredient}`);
};

async function showIngredientsForCategory(category) {
	const catIngredients = document.getElementById(`${category}-contents`);
	if (!(ACTIVE_CATEGORIES.includes(category))) {
		catIngredients.style = "";
		ACTIVE_CATEGORIES.push(category);
	} else if (ACTIVE_CATEGORIES.includes(category)) {
		catIngredients.style = "display:none;";
		ACTIVE_CATEGORIES = ACTIVE_CATEGORIES.filter((cat) => {cat !== category});
	};
};

async function showIngredients() {
	const ingredientsList = document.getElementById("ingredient-list");
	if (!(INGREDIENTS_ACTIVE)) {
		ingredientsList.style = "display:flex;";
		for (let category of CATGEGORIES) {
			let categoryIngredients = document.createElement("div");
			let categoryElement = document.createElement("span");
			categoryIngredients.style = "display:none;"
			categoryIngredients.className += "category-contents";
			categoryElement.className += "ingredient-button category";
			categoryIngredients.id = `${category}-contents`;
			categoryElement.innerText = category;
			categoryElement.addEventListener("click", handleCategoryEvent);
			categoryElement.category = category;
			categoryElement.isactive = false;
			for (let ingredient of INGREDIENTS[category]) {
				let ingredientElement = document.createElement("span");
				ingredientElement.className += "ingredient-button";
				ingredientElement.innerText = ingredient;
				ingredientElement.addEventListener("click", handleIngredientEvent);
				ingredientElement.ingredient = ingredient;
				categoryIngredients.appendChild(ingredientElement);
			};
			ingredientsList.appendChild(categoryElement);
			ingredientsList.appendChild(categoryIngredients);
		};
		INGREDIENTS_ACTIVE = true;
	} else if (INGREDIENTS_ACTIVE) {
		ingredientsList.style = "display:none;";
		ingredientsList.innerHTML = "";
		INGREDIENTS_ACTIVE = false;
	};

	
};

async function selectIngredient(ingredient) {
	ACTIVE_INGREDIENT = new Ingredient(67, ingredient, 0, "raw");
	alert(`Ingredient Selected: ${ACTIVE_INGREDIENT.name}`);
};

async function handleIngredientClick(ingredient) {
	if (ACTIVE_INGREDIENT !== null && ACTIVE_INGREDIENT.name === ingredient) {
		ACTIVE_INGREDIENT = null;
		alert(`Ingredient Deselected: ${ingredient}`);
	} else if (ACTIVE_INGREDIENT !== null && ingredient !== ACTIVE_INGREDIENT.name){
		selectIngredient(ingredient);
	} else {
		selectIngredient(ingredient);
	};
};

async function addIngredientToPan(ingredient) {
	const panElement = document.getElementById("pan-holder");
	const panDetails = document.getElementById("pan-details");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	ACTIVE_INGREDIENT = null;
	if (Object.keys(INGREDIENT_IMAGES).includes(ingredient.name) || INGREDIENTS.Liquids.includes(ingredient.name)) {
		if (ingredient.name === "Egg") {
			document.getElementById("pan-contents").src = INGREDIENT_IMAGES["Fried Egg"];
		} else if (INGREDIENTS.Liquids.includes(ingredient.name) ) {
			if (Object.keys(INGREDIENT_IMAGES).includes(`${ingredient.name} Liquid`)) {
				document.getElementById("pan-contents").src = INGREDIENT_IMAGES[`${ingredient.name} Liquid`];
			} else {
				alert("Liquid fluid image not yet added.");
			}
		} else {
			document.getElementById("pan-contents").src = INGREDIENT_IMAGES[ingredient.name];
		};
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${ingredient.name})
		`;
	} else {
		alert("Food image not yet added.");
	};
	
	panElement.setAttribute("data-contents", JSON.stringify(ingredient.asJson()));

};

async function addIngredientToPot(ingred) {
	const potElement = document.getElementById("pot-holder");
	const potDetails = document.getElementById("pot-details");
	const on = POT_ON ? "On":"Off";
	let ingredients = potElement.getAttribute("data-contents");
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	let ingredient = ingred.asJson();
	if ((ingredients !== "null" || ingredients !== "[]") && ingredients !== "null" ) {
		let ingr = JSON.parse(ingredients);	
		ingr.push(ingredient);
		potElement.setAttribute("data-contents", JSON.stringify(ingr));
	} else if ((ingredients === "null" || ingredients === "[]") && ingredients === "null") {
		let ingr = [];
		ingr.push(ingredient);
		potElement.setAttribute("data-contents", JSON.stringify(ingr));
	} else {
		let ingr = [];
		ingr.push(ingredient);
		potElement.setAttribute("data-contents", JSON.stringify(ingr));
	};
	
	ACTIVE_INGREDIENT = null;
	potDetails.innerHTML = `
		${temp}° (${on}) <img id="pot-toggle" src="src/toggle_pan_button.png" alt="Pan Toggle Button" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Full Pot 
	`;


};

async function handlePanClick(contents) {
	const panElement = document.getElementById("pan-holder");
	const panDetails = document.getElementById("pan-details");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	if (ACTIVE_INGREDIENT === null && contents !== "null") {
		ACTIVE_INGREDIENT = new Ingredient(null, null, null, null, null).fromJson(JSON.parse(contents));
		panElement.setAttribute("data-contents", "null");
		document.getElementById("pan-contents").src = "src/transparent.png";
		turnOffPan();
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Empty Pan
		`;
	} else if (contents === "null" && ACTIVE_INGREDIENT !== null) {
		addIngredientToPan(ACTIVE_INGREDIENT);
	} else if (contents !== "null" && ACTIVE_INGREDIENT !== null) {
		alert("Pan is already full!");
	};
};

async function handlePotClick(contents) {
	const potElement = document.getElementById("pot-holder");
	const potDetails = document.getElementById("pot-details");
	const on = POT_ON ? "On":"Off";
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	let ic = JSON.parse(contents);
	if (ACTIVE_INGREDIENT === null && contents !== "null") {
		ACTIVE_INGREDIENT = new Ingredient(null, null, null, null, null).fromJson(ic[ic.length-1]);
		ic.pop();
		potElement.setAttribute("data-contents", JSON.stringify(ic));
		potDetails.innerHTML = `
		${temp}° (${on}) <img id="pot-toggle" src="src/toggle_pan_button.png" alt="Pot Toggle Button" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	} else if (ACTIVE_INGREDIENT !== null) {
		addIngredientToPot(ACTIVE_INGREDIENT);
	};
};

async function increasePotTemperature() {
	const potDetails = document.getElementById("pot-details");
	const potElement = document.getElementById("pot-holder");
	const potContents = potElement.getAttribute("data-contents");
	const on = POT_ON ? "On":"Off";
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	potElement.setAttribute("data-temperature", String(temp+1))
	if (potContents !== "null") {
		if (temp > 500 && CONFIG.charcoalization) {
			potElement.setAttribute("data-contents", JSON.stringify([{"name":"Charcoal Stew", "cookMethod":"Burnt", "cookPercent":100, "temp":temp}]))
			potDetails.innerHTML = `
			${temp+1}° (${on}) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
			<br>
			Full Pot (Charcoal Stew)
			`;
		} else {
			let pc = JSON.parse(potContents);
			pc.forEach((p, i, a)=>{p.cookPercent += .25; p.temp += 1;});
			potElement.setAttribute("data-contents", JSON.stringify(pc));
			potDetails.innerHTML = `
			${temp+1}° (${on}) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
			<br>
			Full Pot
			`;
		};
	} else if (potContents === "null") {
		potDetails.innerHTML = `
		${temp+1}° (On) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	};
};

async function turnOnPot() {
	const potDetails = document.getElementById("pot-details");
	const potElement = document.getElementById("pot-holder");
	const potContents = potElement.getAttribute("data-contents");
	const cookingPot = document.getElementById("cooking-pot");
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	if (potContents !== "null") {
		potDetails.innerHTML = `
		${temp}° (On) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Full Pot
		`;
	} else if (potContents === "null") {
		potDetails.innerHTML = `
		${temp}° (On) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	};
	POT_ON = true;
	cookingPot.src = "src/cooking_pot.gif";
	clearInterval(POT_OFF_INTERVAL)
	POT_ON_INTERVAL = setInterval(increasePotTemperature, 1000);

};

async function decreasePotTemperature() {
	const potDetails = document.getElementById("pot-details");
	const potElement = document.getElementById("pot-holder");
	const potContents = potElement.getAttribute("data-contents");
	const on = POT_ON ? "On":"Off";
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	potElement.setAttribute("data-temperature", String(temp-1))
	if (potContents !== "null") {
		potDetails.innerHTML = `
		${temp-1}° (${on}) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Full Pot
		`;
	} else if (potContents === "null") {
		potDetails.innerHTML = `
		${temp-1}° (${on}) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	};
};

async function turnOffPot() {
	const potDetails = document.getElementById("pot-details");
	const potElement = document.getElementById("pot-holder");
	const cookingPot = document.getElementById("cooking-pot");
	const potContents = potElement.getAttribute("data-contents");
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	if (potContents !== "null") {
		potDetails.innerHTML = `
		${temp}° (Off) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Full Pot
		`;
	} else if (potContents === "null") {
		potDetails.innerHTML = `
		${temp}° (Off) <img id="pot-toggle" alt="Pot Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	};
	POT_ON = false;
	clearInterval(POT_ON_INTERVAL)
	cookingPot.src = "src/cooking_pot.png";
	POT_OFF_INTERVAL = setInterval(()=>{}, 1250);
};

async function handlePotToggle() {
	if (POT_ON) {
		turnOffPot();
	} else if (!(POT_ON)) {
		turnOnPot();
	};
};

async function increasePanTemperature() {
	const panDetails = document.getElementById("pan-details");
	const panElement = document.getElementById("pan-holder");
	const panContentsImage = document.getElementById("pan-contents");
	const panContents = panElement.getAttribute("data-contents");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	panElement.setAttribute("data-temperature", String(temp+1))
	if (panContents !== "null") {
		if (temp > 500 && CONFIG.charcoalization) {
			panElement.setAttribute("data-contents", JSON.stringify({"name":"Charcoal", "cookMethod":"Burnt", "cookPercent":100, "temp":temp}))
			panContentsImage.src = "src/charcoal.png";
			panContentsImage.style = `filter: brightness(${String(100-((temp-59)/4))}%);`;
			panDetails.innerHTML = `
			${temp+1}° (On) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
			<br>
			Full Pan (Charcoal)
			`;
		} else {
			let pc = JSON.parse(panContents);
			pc.cookPercent += .25;
			pc.temp += 1;
			panElement.setAttribute("data-contents", JSON.stringify(pc));
			panContentsImage.style = `filter: brightness(${String(100-((temp-59)/4))}%);`;
			panDetails.innerHTML = `
			${temp+1}° (On) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
			<br>
			Full Pan (${JSON.parse(panContents).name})
			`;
		};
	} else if (panContents === "null") {
		//panContentsImage.style = `filter: brightness(${String(100-(temp/2)+(59/2))}%);`;
		panDetails.innerHTML = `
		${temp+1}° (On) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Empty Pan
		`;
	};
};

async function turnOnPan() {
	const panDetails = document.getElementById("pan-details");
	const panElement = document.getElementById("pan-holder");
	const panContents = panElement.getAttribute("data-contents");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	if (panContents !== "null") {
		panDetails.innerHTML = `
		${temp}° (On) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${JSON.parse(panContents).name})
		`;
	} else if (panContents === "null") {
		panDetails.innerHTML = `
		${temp}° (On) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Empty Pan
		`;
	};
	PAN_ON = true;
	clearInterval(PAN_OFF_INTERVAL)
	PAN_ON_INTERVAL = setInterval(increasePanTemperature, 975);

};

async function decreasePanTemperature() {
	const panDetails = document.getElementById("pan-details");
	const panElement = document.getElementById("pan-holder");
	const panContents = panElement.getAttribute("data-contents");
	const panContentsImage = document.getElementById("pan-contents");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	panElement.setAttribute("data-temperature", String(temp-1))
	if (panContents !== "null") {
		panContentsImage.style = `filter: brightness(${String(100-((temp-59)/4))}%);`;
		panDetails.innerHTML = `
		${temp-1}° (Off) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${JSON.parse(panContents).name})
		`;
	} else if (panContents === "null") {
		//panContentsImage.style = `filter: brightness(${String(100-((temp-59)/4))}%);`;
		panDetails.innerHTML = `
		${temp-1}° (Off) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Empty Pan
		`;
	};
};

async function turnOffPan() {
	const panDetails = document.getElementById("pan-details");
	const panElement = document.getElementById("pan-holder");
	const panContents = panElement.getAttribute("data-contents");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	if (panContents !== "null") {
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${JSON.parse(panContents).name})
		`;
	} else if (panContents === "null") {
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" alt="Pan Toggle Button" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Empty Pan
		`;
	};
	PAN_ON = false;
	clearInterval(PAN_ON_INTERVAL);
	PAN_OFF_INTERVAL = setInterval(()=>{}, 1250);
};

async function handlePanToggle() {
	if (PAN_ON) {
		turnOffPan();
	} else if (!(PAN_ON)) {
		turnOnPan();
	};
};

async function attemptMakeMeal(ingredients) {
	let SELECTED_MEAL;
	for (let meal of MEALS) {
		if (meal.ingrNames.every(i=> [].concat(ingredients.map(e => e.name)).includes(i))) {
			SELECTED_MEAL = meal;
		};
	};
	alert("Attempted to make meal: " + SELECTED_MEAL.name)
};

async function addIngredientToMealHolder(ingredient) {
	const mealTable = document.getElementById("meal-maker");
	const mealImageHolder = document.getElementById("meal-contents-image-holder");
	if (Object.keys(INGREDIENT_IMAGES).includes(ingredient.name)) {
		let ingredientImage = document.createElement("img");
		ingredientImage.src = INGREDIENT_IMAGES[ingredient.name];
		ingredientImage.width = 27.5;
		ingredientImage.height = 27.5;
		ingredientImage.alt = `${ingredient.name} Image`;
		ingredientImage.style = `image-rendering: pixelated; filter: brightness(${100-parseInt(ingredient.cookPercent)}%);`;
		
		mealImageHolder.appendChild(ingredientImage);

	} else if (!(Object.keys(INGREDIENT_IMAGES).includes(ingredient.name))) {
		alert("Ingredient image not yet added." + ` (${ingredient.name})`);
	};
};

async function handleMealMakeClick() {
	const mealButton = document.getElementById("meal-maker");
	const mealIngredientsHolder = document.getElementById("meal-contents-image-holder");
	let mealIngredients = mealButton.getAttribute("data-ingredients");
	if (ACTIVE_INGREDIENT !== null && ACTIVE_INGREDIENT !== "null") {
		MEAL_INGREDIENTS.push(ACTIVE_INGREDIENT);
		if (MEAL_INGREDIENTS.length <= 3) {
			addIngredientToMealHolder(ACTIVE_INGREDIENT);
		};
		ACTIVE_INGREDIENT = null;
		mealButton.setAttribute("data-ingredients", JSON.stringify(MEAL_INGREDIENTS));
		//attemptMakeMeal(JSON.parse(mealIngredients));
	} else if (ACTIVE_INGREDIENT === null && mealIngredients === "null") {
		alert("Nothing is on the table and you have no ingredient selected!")
	} else if (ACTIVE_INGREDIENT === null && (mealIngredients !== "null" || mealIngredients === "[]")) {
		ACTIVE_INGREDIENT = MEAL_INGREDIENTS[MEAL_INGREDIENTS.length-1];
		MEAL_INGREDIENTS.pop(MEAL_INGREDIENTS.length-1);
		mealButton.setAttribute("data-ingredients", JSON.stringify(MEAL_INGREDIENTS));
		if (mealIngredientsHolder.lastElementChild.tagName === "IMG") {
			mealIngredientsHolder.lastElementChild.remove();
		};
		
	};
};

async function evenPanTemp() {
	const panElement = document.getElementById("pan-holder");
	const panTemp = parseInt(panElement.getAttribute("data-temperature"));
	if (!PAN_ON) {
		if (panTemp < 59) {
			await increasePanTemperature();
		} else if (panTemp > 63) {
			await decreasePanTemperature();
		};
	};
};

async function evenPotTemp() {
	const potElement = document.getElementById("pot-holder");
	const potTemp = parseInt(potElement.getAttribute("data-temperature"));
	if (!POT_ON) {
		if (potTemp < 59) {
			await increasePotTemperature();
		} else if (potTemp > 63) {
			await decreasePotTemperature();
		};
	};
};

async function evenActiveIngredientTemp() {
	if (ACTIVE_INGREDIENT !== null) {
		if (ACTIVE_INGREDIENT.temp < 69) {
			ACTIVE_INGREDIENT.temp += 1;
		} else if (ACTIVE_INGREDIENT.temp > 73) {
			ACTIVE_INGREDIENT.temp -= 1;
		};
	};
};

async function evenTableContentsTemp() {
	const table = document.getElementById("meal-maker");
	const tableContents = table.getAttribute("data-ingredients");
	if ((tableContents !== "[]" || tableContents !== "null") && tableContents !== "null") {
		let tblContents = JSON.parse(tableContents);
		for (let ingredient of tblContents) {
			if (ingredient.temp < 69) {
				ingredient.temp += 1;
			} else if (ingredient.temp > 73) {
				ingredient.temp -= 1;
			};

		};
		table.setAttribute("data-ingredients", JSON.stringify(tblContents));
	};
};

async function evenTemperatures() {
	setInterval(evenTableContentsTemp, 9750);
	setInterval(evenPotTemp, 15750);
	setInterval(evenPanTemp, 13575);
	setInterval(evenActiveIngredientTemp, 7895);
};

async function toggleConfig() {
	const configBox = document.getElementById('config-box');
	const main = document.getElementById("main");
	if (!CONFIG_ON) {
		main.style = "display:none;"
		configBox.style="";
		CONFIG_ON = true;
	} else if (CONFIG_ON) {
		main.style = "";
		configBox.style = "display:none";
		CONFIG_ON = false;
	};
};

async function updateConfig(newConfig) {
	CONFIG = newConfig;
	localStorage.config = JSON.stringify(CONFIG);
	document.body.style = "background:" + CONFIG.theme.background_color + ";";
};


async function resetConfig() {
	const configJson = document.getElementById("config-json");
	CONFIG = {
		"normalization":true,
		"charcoalization":true,
		"pot_mode":"stew",
		"theme":{
			"background_color":"#ff4d74"
		}
	};
	localStorage.config = JSON.stringify(CONFIG);
	configJson.innerText = JSON.stringify(CONFIG, null, 2);
	updateConfig(CONFIG);

};

const onStartup = async () => {
	const configJson = document.getElementById("config-json");
	if (localStorage.config) {
		CONFIG = JSON.parse(localStorage.config);
		configJson.innerText = JSON.stringify(CONFIG, null, 2);
		updateConfig(CONFIG);
	} else if (!localStorage.config) {
		CONFIG = {
			"normalization":true,
			"charcoalization":true,
			"pot_mode":"stew",
			"theme":{
				"background_color":"#ff4d74"
			}
		};
		localStorage.config = JSON.stringify(CONFIG);
		configJson.innerText = JSON.stringify(CONFIG, null, 2);
		
	};

	if (CONFIG.normalization) {
		await evenTemperatures();
	};


};

onStartup();

