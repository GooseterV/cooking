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
	ACTIVE_INGREDIENT = null;
	if (Object.keys(INGREDIENT_IMAGES).includes(ingredient)) {
		if (ingredient === "Egg") {
			panElement.children[1].src = INGREDIENT_IMAGES["Fried Egg"];
		} else {
			panElement.children[1].src = INGREDIENT_IMAGES[ingredient];
		};
		panDetails.innerText = `
		0° (F)
		Full Pan (${ingredient})
		`;

	} else {
		alert("Food image not yet added.");
	};
	
	panElement.setAttribute("data-contents", ingredient);

};

async function handlePanClick(contents) {
	const panElement = document.getElementById("pan-holder");
	if (ACTIVE_INGREDIENT === null && contents !== "null") {
		ACTIVE_INGREDIENT = contents;
		panElement.setAttribute("data-contents", "null");
		panElement.children[1].src = "src/transparent.png";
	} else if (contents === "null" && ACTIVE_INGREDIENT !== null) {
		addIngredientToPan(ACTIVE_INGREDIENT);
	} else if (contents !== "null" && ACTIVE_INGREDIENT !== null) {
		alert("Pan is already full!")
	}
};