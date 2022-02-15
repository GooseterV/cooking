
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
		"Scallion",
		"Oyster",
		"Cod",
		"Salmon",
		"Whitefish",
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
		"Sage"
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
		"Almond Butter"
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
	"Bottom Burger Bun":"src/burgerBun.png"
};

const CATGEGORIES = Object.keys(INGREDIENTS);
const MEALS = [
	{
		"Name":"Burger and Fries",
		"Ingredients":[
			{
				"Ingredient":"Potato",
				"Method":"Fried",
				"Pieces":"20",
				"Amount":"300"
			},
			{
				"Ingredient":"Beef Patty",
				"Method":"Grilled",
				"Pieces":"1",
				"Amount":"235"
			},
			{
				"Ingredient":"Tomato",
				"Method":"Slightly Grilled",
				"Pieces":"1",
				"Amount":"100"
			},
			{
				"Ingredient":"Cheddar Cheese",
				"Method":"Raw",
				"Pieces":"1",
				"Amount":"50"
			},
			{
				"Ingredient":"Top Burger Bun",
				"Method":"Raw",
				"Pieces":"1",
				"Amount":"150"
			},
			{
				"Ingredient":"Bottom Burger Bun",
				"Method":"Raw",
				"Pieces":"1",
				"Amount":"150"
			}
		],
		"Ingredient Names":[
			"Tomato",
			"Beef Patty",
			"Top Burger Bun",
			"Bottom Burger Bun",
			"Cheddar Cheese"
		]
	},
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
	ACTIVE_INGREDIENT = {
		"Name":ingredient,
		"Method":"raw",
		"Cooked Percent":0
	};
	alert(`Ingredient Selected: ${ACTIVE_INGREDIENT.Name}`);
};

async function handleIngredientClick(ingredient) {
	if (ACTIVE_INGREDIENT !== null && ACTIVE_INGREDIENT.Name === ingredient) {
		ACTIVE_INGREDIENT = null;
		alert(`Ingredient Deselected: ${ingredient}`);
	} else if (ACTIVE_INGREDIENT !== null && ingredient !== ACTIVE_INGREDIENT.Name){
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
	if (Object.keys(INGREDIENT_IMAGES).includes(ingredient.Name)) {
		if (ingredient.Name === "Egg") {
			document.getElementById("pan-contents").src = INGREDIENT_IMAGES["Fried Egg"];
		} else {
			document.getElementById("pan-contents").src = INGREDIENT_IMAGES[ingredient.Name];
		};
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${ingredient.Name})
		`;
	} else {
		alert("Food image not yet added.");
	};
	
	panElement.setAttribute("data-contents", JSON.stringify(ingredient));

};

async function addIngredientToPot(ingredient) {
	const potElement = document.getElementById("pot-holder");
	const potDetails = document.getElementById("pot-details");
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	ACTIVE_INGREDIENT = null;
	potDetails.innerHTML = `
		${temp}° (Off) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Full Pot 
	`;
	
	potElement.setAttribute("data-contents", JSON.stringify(ingredient));

};

async function handlePanClick(contents) {
	const panElement = document.getElementById("pan-holder");
	const panDetails = document.getElementById("pan-details");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	if (ACTIVE_INGREDIENT === null && contents !== "null") {
		ACTIVE_INGREDIENT = JSON.parse(contents);
		panElement.setAttribute("data-contents", "null");
		document.getElementById("pan-contents").src = "src/transparent.png";
		turnOffPan();
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
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
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	if (ACTIVE_INGREDIENT === null && contents !== "null") {
		ACTIVE_INGREDIENT = JSON.parse(contents);
		potElement.setAttribute("data-contents", "null");
		turnOffPot();
		potDetails.innerHTML = `
		${temp}° (Off) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	} else if (contents === "null" && ACTIVE_INGREDIENT !== null) {
		addIngredientToPot(ACTIVE_INGREDIENT);
	} else if (contents !== "null" && ACTIVE_INGREDIENT !== null) {
		alert("Pot is already full!");
	};
};

async function increasePotTemperature() {
	const potDetails = document.getElementById("pot-details");
	const potElement = document.getElementById("pot-holder");
	const potContents = potElement.getAttribute("data-contents");
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	potElement.setAttribute("data-temperature", String(temp+1))
	if (potContents !== "null") {
		if (temp > 250) {
			potElement.setAttribute("data-contents", JSON.stringify({"Name":"Charcoal", "Method":"Burnt", "Cook Percentage":100}))
			potDetails.innerHTML = `
			${temp+1}° (On) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
			<br>
			Full Pot (Charcoal)
			`;
		} else {
			potDetails.innerHTML = `
			${temp+1}° (On) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
			<br>
			Full Pot
			`;
		};
	} else if (potContents === "null") {
		potDetails.innerHTML = `
		${temp+1}° (On) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	};
};

async function turnOnPot() {
	const potDetails = document.getElementById("pot-details");
	const potElement = document.getElementById("pot-holder");
	const potContents = potElement.getAttribute("data-contents");
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	if (potContents !== "null") {
		potDetails.innerHTML = `
		${temp}° (On) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Full Pot
		`;
	} else if (potContents === "null") {
		potDetails.innerHTML = `
		${temp}° (On) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	};
	POT_ON = true;
	clearInterval(POT_OFF_INTERVAL)
	POT_ON_INTERVAL = setInterval(increasePotTemperature, 1000);

};

async function decreasePotTemperature() {
	const potDetails = document.getElementById("pot-details");
	const potElement = document.getElementById("pot-holder");
	const potContents = potElement.getAttribute("data-contents");
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	potElement.setAttribute("data-temperature", String(temp-1))
	if (potContents !== "null") {
		potDetails.innerHTML = `
		${temp-1}° (Off) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Full Pot
		`;
	} else if (potContents === "null") {
		potDetails.innerHTML = `
		${temp-1}° (Off) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	};
};

async function turnOffPot() {
	const potDetails = document.getElementById("pot-details");
	const potElement = document.getElementById("pot-holder");
	const potContents = potElement.getAttribute("data-contents");
	let temp = parseInt(potElement.getAttribute("data-temperature"));
	if (potContents !== "null") {
		potDetails.innerHTML = `
		${temp}° (Off) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Full Pot
		`;
	} else if (potContents === "null") {
		potDetails.innerHTML = `
		${temp}° (Off) <img id="pot-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePotToggle()"/>
		<br>
		Empty Pot
		`;
	};
	POT_ON = false;
	clearInterval(POT_ON_INTERVAL)
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
		if (temp > 250) {
			panElement.setAttribute("data-contents", JSON.stringify({"Name":"Charcoal", "Method":"Burnt", "Cook Percentage":100}))
			panContentsImage.src = "src/charcoal.png";
			panContentsImage.style = `filter: brightness(${String(100-(temp/2)+(59/2))}%);`;
			panDetails.innerHTML = `
			${temp+1}° (On) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
			<br>
			Full Pan (Charcoal)
			`;
		} else {
			let pc = JSON.parse(panContents);
			pc["Cook Percentage"] = (temp/2)+(59/2);
			panElement.setAttribute("data-contents", JSON.stringify(pc));
			panContentsImage.style = `filter: brightness(${String(100-(temp/2)+(59/2))}%);`;
			panDetails.innerHTML = `
			${temp+1}° (On) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
			<br>
			Full Pan (${JSON.parse(panContents).Name})
			`;
		};
	} else if (panContents === "null") {
		//panContentsImage.style = `filter: brightness(${String(100-(temp/2)+(59/2))}%);`;
		panDetails.innerHTML = `
		${temp+1}° (On) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
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
		${temp}° (On) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${JSON.parse(panContents).Name})
		`;
	} else if (panContents === "null") {
		panDetails.innerHTML = `
		${temp}° (On) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
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
	const panContents = JSON.parse(panElement.getAttribute("data-contents"));
	const panContentsImage = document.getElementById("pan-contents");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	panElement.setAttribute("data-temperature", String(temp-1))
	if (panContents !== "null") {
		panContentsImage.style = `filter: brightness(${String(100-(temp/2)+(59/2))}%);`;
		panDetails.innerHTML = `
		${temp-1}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${JSON.parse(panContents).Name})
		`;
	} else if (panContents === "null") {
		panContentsImage.style = `filter: brightness(${String(100-(temp/2)+(59/2))}%);`;
		panDetails.innerHTML = `
		${temp-1}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
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
		${temp}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${JSON.parse(panContents).Name})
		`;
	} else if (panContents === "null") {
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
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
		if (ingredients.every(i=> meal["Ingredient Names"].includes(i.Name))) {
			SELECTED_MEAL = meal;
		};
	};
	alert("Attempted to make meal: " + SELECTED_MEAL.Name)
};

async function addIngredientToMealHolder(ingredient) {
	const mealTable = document.getElementById("meal-maker");
	const mealImageHolder = document.getElementById("meal-contents-image-holder");
	if (Object.keys(INGREDIENT_IMAGES).includes(ingredient.Name)) {
		let ingredientImage = document.createElement("img");
		ingredientImage.src = INGREDIENT_IMAGES[ingredient.Name];
		ingredientImage.width = 27.5;
		ingredientImage.height = 27.5;
		ingredientImage.style = `image-rendering: pixelated; filter: blur(${100-ingredient["Cook Percentage"]}%);`;
		
		mealImageHolder.appendChild(ingredientImage);

	} else if (!(Object.keys(INGREDIENT_IMAGES).includes(ingredient.Name))) {
		alert("Ingredient image not yet added." + ` (${ingredient.Name})`);
	};
};

async function handleMealMakeClick() {
	const mealButton = document.getElementById("meal-maker");
	const mealIngredientsHolder = document.getElementById("meal-contents-image-holder");
	let mealIngredients = mealButton.getAttribute("data-ingredients");
	if (ACTIVE_INGREDIENT !== null) {
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