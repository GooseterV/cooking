class Purchaseable {
	constructor(price, name) {
		this.price = price;
		this.name = name;
	};
};

class Foodable extends Purchaseable {
	constructor (price, name, temperature) {
		super(price, name);
		this.temp = temperature;
	};
};


class Ingredient extends Foodable {
	constructor (price, name, cookPercent, cookMethod) {
		super(price, name);
		this.cookPercent = cookPercent;
		this.method = cookMethod;
	};
	asJson() {
		return {
			name:this.name,
			price:this.price,
			cookPercent:this.cookPercent,
			cookMethod:this.cookMethod,
			temp:this.temp
		};
	};
	fromJson(j) {
		this.name = j.name;
		this.price = j.price;
		this.cookPercent = j.cookPercent;
		this.cookMethod = j.cookMethod;
		this.temp = j.temp;
		return this;
	};
};

class Meal extends Foodable {
	constructor ({Name, Ingredients, Price}) {
		super(Price, Name);
		this.ingredients = Ingredients;
		this.ingrNames = Ingredients.map(v => {return v.Name;});
	};
};

class MealIngredient {
	constructor({Name, CookPercent, Method, Amount, Pieces}) {
		this.name = Name;
		this.cookPercent = CookPercent;
		this.cookMethod = Method;
		this.pieces = Pieces;
		this.amount = Amount;
	};
};

class Upgrade extends Purchaseable {
	constructor(price, name, use) {
		super(price, name);
		this.onuse = use;
	};
};

class Restaurant {
	constructor() {
		this.money = 0;
		this.meals = [];
		this.ingredients = [];
		this.upgrades = [];
	};

	fromJson(j) {
		this.money = j.money;
		this.meals = j.meals;
		this.ingredients = j.ingredients;
		this.upgrades = j.upgrades;
		return this;
	};

	toJson() {
		return {
			money:this.money,
			meals:this.meals,
			ingredients:this.ingredients,
			upgrades:this.upgrades
		};
	};
};


