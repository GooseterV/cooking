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
		"Hotdog Bun"
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
	"Egg":"src/egg_full.png",
	"Fried Egg":"src/egg_fried.png",
	"Steak":"src/steak.png",
	//"Ginger Root":"src/ginger.png",
	"Tomato":"src/tomato.png",
	"Garlic":"src/garlic.png",
	"Carrot":"src/carrot.png",
	"Red Bell Pepper":"src/red_bell_pepper.png",
	"Orange Bell Pepper":"src/orange_bell_pepper.png",
	"Green Bell Pepper":"src/green_bell_pepper.png",
	"Habanero":"src/habanero.png",
	"Jalapeño":"src/jalapeno.png",
	"Chili Pepper":"src/chili_pepper.png",
	"Swiss Cheese":"src/swiss_cheese.png",
	"Orange":"src/orange.png",
	"Pear":"src/pear.png",
	"Apple":"src/apple.png",
	"Lime":"src/lime.png",
	"Lemon":"src/lemon.png",
	"Yellow Bell Pepper":"src/yellow_bell_pepper.png",
	"Turkey Patty":"src/turkey_patty.png",
	"Beef Patty":"src/beef_patty.png"

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
	ACTIVE_INGREDIENT = ingredient;
	alert(`Ingredient Selected: ${ACTIVE_INGREDIENT}`);
};

async function handleIngredientClick(ingredient) {
	if (ACTIVE_INGREDIENT === null && ACTIVE_INGREDIENT !== ingredient) {
		selectIngredient(ingredient);
	} else if (ACTIVE_INGREDIENT !== null && ACTIVE_INGREDIENT === ingredient) {
		ACTIVE_INGREDIENT = null;
		alert(`Ingredient Deselected: ${ingredient}`);
	} else if (ACTIVE_INGREDIENT !== null && ingredient !== ACTIVE_INGREDIENT){
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
	if (Object.keys(INGREDIENT_IMAGES).includes(ingredient)) {
		if (ingredient === "Egg") {
			document.getElementById("pan-contents").src = INGREDIENT_IMAGES["Fried Egg"];
		} else {
			document.getElementById("pan-contents").src = INGREDIENT_IMAGES[ingredient];
		};
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${ingredient})
		`;
	} else {
		alert("Food image not yet added.");
	};
	
	panElement.setAttribute("data-contents", ingredient);

};

async function handlePanClick(contents) {
	const panElement = document.getElementById("pan-holder");
	const panDetails = document.getElementById("pan-details");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	if (ACTIVE_INGREDIENT === null && contents !== "null") {
		ACTIVE_INGREDIENT = contents;
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

async function increasePanTemperature() {
	const panDetails = document.getElementById("pan-details");
	const panElement = document.getElementById("pan-holder");
	const panContents = panElement.getAttribute("data-contents");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	panElement.setAttribute("data-temperature", String(temp+1))
	if (panContents !== "null") {
		panDetails.innerHTML = `
		${temp+1}° (On) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${panContents})
		`;
	} else if (panContents === "null") {
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
		Full Pan (${panContents})
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
	const panContents = panElement.getAttribute("data-contents");
	let temp = parseInt(panElement.getAttribute("data-temperature"));
	panElement.setAttribute("data-temperature", String(temp-1))
	if (panContents !== "null") {
		panDetails.innerHTML = `
		${temp-1}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Full Pan (${panContents})
		`;
	} else if (panContents === "null") {
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
		Full Pan (${panContents})
		`;
	} else if (panContents === "null") {
		panDetails.innerHTML = `
		${temp}° (Off) <img id="pan-toggle" src="src/toggle_pan_button.png" width="25px" height="25px" style="position:relative; top:5px; z-index: index 200;" onclick="handlePanToggle()"/>
		<br>
		Empty Pan
		`;
	};
	PAN_ON = false;
	clearInterval(PAN_ON_INTERVAL)
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
		if (meal["Ingredient Names"].all(i=> ingredients.includes(i))) {
			SELECTED_MEAL = meal;
		};
	};
	alert("Attempted to make meal: " + SELECTED_MEAL)
};

async function addIngredientToMealHolder(ingredient) {
	const mealTable = document.getElementById("meal-maker");
	const mealImageHolder = document.getElementById("meal-contents-image-holder");
	if (Object.keys(INGREDIENT_IMAGES).includes(ingredient)) {
		let ingredientImage = document.createElement("img");
		ingredientImage.src = INGREDIENT_IMAGES[ingredient];
		ingredientImage.width = 27.5;
		ingredientImage.height = 27.5;
		//ingredientImage.style = "image-rendering: pixelated;";
		
		mealImageHolder.appendChild(ingredientImage);

	} else if (!(Object.keys(INGREDIENT_IMAGES).includes(ingredient))) {
		alert(ingredient);
		alert("Ingredient image not yet added.");
	};
};

async function handleMealMakeClick() {
	const mealButton = document.getElementById("meal-maker");
	const mealIngredientsHolder = document.getElementById("meal-contents-image-holder");
	let mealIngredients = mealButton.getAttribute("data-ingredients");
	if (ACTIVE_INGREDIENT !== null || ACTIVE_INGREDIENT) {
		MEAL_INGREDIENTS.push(ACTIVE_INGREDIENT);
		if (MEAL_INGREDIENTS.length < 3) {
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