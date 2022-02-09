const INGREDIENTS = [
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
	"Red Cabbage"
];
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

async function addIngredient(ingredient) {
	alert(`Added ingredient: ${ingredient}`);
};

async function showIngredients() {
	const ingredientsList = document.getElementById("ingredient-list");
	if (!(INGREDIENTS_ACTIVE)) {
		ingredientsList.style = "display:flex;";
		for (let ingredient of INGREDIENTS) {
			let ingredientElement = document.createElement("span");
			ingredientElement.className += "ingredient-button";
			ingredientElement.innerText = ingredient;
			ingredientElement.addEventListener("click", addIngredient, ingredient);
			ingredientsList.appendChild(ingredientElement);
		};
		INGREDIENTS_ACTIVE = true;
	} else if (INGREDIENTS_ACTIVE) {
		ingredientsList.style = "display:none;";
		ingredientsList.innerHTML = "";
		INGREDIENTS_ACTIVE = false;
	};

	
};
