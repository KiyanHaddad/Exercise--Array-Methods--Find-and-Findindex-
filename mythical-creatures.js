const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// Task 1: Find the first "Water" type creature
function findFirstWaterCreature(creatures) {
	const firstWaterCreature = creatures.find(function (creature) {
		return creature.type === "Water";
	});
	return firstWaterCreature ? firstWaterCreature.name : "No Water creature found";
}
console.log(findFirstWaterCreature(mythicalCreatures));

// Task 2: Find the index of "Griffin"
function findGriffinIndex(creatures) {
	const griffinIndex = creatures.findIndex(function (creature) {
		return creature.name === "Griffin";
	});
	return griffinIndex !== -1 ? griffinIndex : "Griffin not found";
}
console.log(findGriffinIndex(mythicalCreatures));

// Task 3: Find the first creature last seen in "Enchanted Forest"
function findCreatureInEnchantedForest(creatures) {
	const enchantedForestCreature = creatures.find(function (creature) {
		return creature.lastSeen === "Enchanted Forest";
	});
	return enchantedForestCreature ? enchantedForestCreature.name : "No creature found in Enchanted Forest";
}
console.log(findCreatureInEnchantedForest(mythicalCreatures));
