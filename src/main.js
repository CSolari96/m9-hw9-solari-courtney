// Desserts Class
class Desserts {
	constructor(type, calories) {
		this.type = type;
		this.calories = calories;
	}
}

// Subclass IceCream that extends Desserts
class IceCream extends Desserts {
	constructor(type, calories, flavor, scoops) {
		super(type, calories);
		this.flavor = flavor;
		this.scoops = scoops;
	}

	includeSpoon() {
		console.log("Here is your spoon!");
	}
}

// Create new instance of IceCream
const vanillaIceCream = new IceCream("Ice Cream", 340, "Vanilla", 3);

// Log vanillaIceCream object
console.log(vanillaIceCream);