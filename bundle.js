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
		"Habañero",
		"Ginger Root"
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
		"Kiwi"
	],
	// meats
	"Meats":[
		"Duck Breast",
		"T-Bone Steak",
		"Steak Patty",
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
		"Scallions",
		"Oysters",
		"Cod",
		"Salmon",
		"Whitefish",
		"Pufferfish"
	],
	// herbs 
	"Herbs":[
		"Dill",
		"Silantro",
		"Rosemary",
		"Thyme",
		"Parsley"
	],
	// other stuff such as eggs
	"Other":[
		"Egg"
	],
};

const INGREDIENT_IMAGES = {
	"Egg":"src/egg_full.png",
	"Fried Egg":"src/egg_fried.png",
	"Steak":"src/steak.png",
	//"Ginger Root":"src/ginger.png",
	"Tomato":"src/tomato.png",
	"Garlic":"src/garlic.png"
};
const CATGEGORIES = Object.keys(INGREDIENTS);
const MEALS = [];
let INGREDIENTS_ACTIVE = false;
let ACTIVE_CATEGORIES = [];
let ACTIVE_INGREDIENT = null;
let PAN_ON = false;
let PAN_ON_INTERVAL;
let PAN_OFF_INTERVAL;
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
	PAN_OFF_INTERVAL = setInterval(()=> {
		if (PAN_ON) {
			return
		} else if (!(PAN_ON)) {

		};
	}, 1250);
};

async function handlePanToggle() {
	if (PAN_ON) {
		turnOffPan();
	} else if (!(PAN_ON)) {
		turnOnPan();
	};
};