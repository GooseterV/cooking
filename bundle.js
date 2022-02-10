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
		"Pumpkin"
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
		"Banana"
	],

};
const CATGEGORIES = Object.keys(INGREDIENTS);
const MEALS = [];
let INGREDIENTS_ACTIVE = false;
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
	addIngredient(evt.currentTarget.ingredient);
};

async function addIngredient(ingredient) {
	alert(`Added ingredient: ${ingredient}`);
};

async function showIngredients() {
	const ingredientsList = document.getElementById("ingredient-list");
	if (!(INGREDIENTS_ACTIVE)) {
		ingredientsList.style = "display:flex;";
		
		for (let category of CATGEGORIES) {
			let categoryIngredients = document.createElement("div");
			categoryIngredients.className += "ingredient-column";
			for (let ingredient of INGREDIENTS[category]) {
				let ingredientElement = document.createElement("span");
				ingredientElement.className += "ingredient-button";
				ingredientElement.innerText = ingredient;
				ingredientElement.addEventListener("click", handleIngredientEvent);
				ingredientElement.ingredient = ingredient;
				categoryIngredients.appendChild(ingredientElement);
			};
			ingredientsList.appendChild(categoryIngredients);
		};
		INGREDIENTS_ACTIVE = true;
	} else if (INGREDIENTS_ACTIVE) {
		ingredientsList.style = "display:none;";
		ingredientsList.innerHTML = "";
		INGREDIENTS_ACTIVE = false;
	};

	
};
