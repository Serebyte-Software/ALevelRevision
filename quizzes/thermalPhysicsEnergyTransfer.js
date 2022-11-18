var title = "Thermal Physics - Energy Transfer";
var quiz = [
	[
		"Thermal energy, also called `, is the energy that a system has due to its `.",
		"none",
		"heat",
		"temperature"
	],
	
	[
		"The thermal energy of a system is related to the average ` energy of the particles in said system - a high ` is caused by particles in the system moving around and ` very quickly.",
		"none",
		"kinetic",
		"temperature",
		"vibrating"
	],
	
	[
		"Particles in a fluid will move with ` distributed speeds and directions. Therefore, they will have different ` energies. Because of this, the temperature of the system is related to the ` kinetic energy of the particles.",
		"none",
		"randomly",
		"kinetic",
		"average"
	],
	
	[
		"Particles in a system also have another form of energy - ` energy. This is different to kinetic energy, since it is the energy particles have due to their ` relative to one another.",
		"none",
		"potential",
		"position"
	],
	
	[
		"Particles in a substance have ` energy because they are all attracted to each other via ` forces and thus work must be done to separate them. We say that this work goes into the ` store of the particles.",
		"none",
		"potential",
		"intermolecular",
		"potential"
	],
	
	[
		"` have a large amount of potential energy, ` will have some potential energy and ` will have very little potential energy in comparison.</li>",
		"none",
		"Gases",
		"liquids",
		"solids"
	],
	
	[
		"Internal energy is the ` of the ` and ` energies of the particles in a system.",
		"none",
		"sum",
		"kinetic",
		"potential"
	],
	
	[
		"A closed system is a system in which no ` can enter or exit the system.",
		"none",
		"matter"
	],
	
	[
		"If a system is closed, and no energy can enter or exit it, the ` energy of the system will be constant.",
		"none",
		"internal"
	],
	
	[
		"Note that even in a closed system, particles will constantly transfer energy between their ` and ` stores, as they all move about and change position ` to each other. The ` energy will remain the same overall, though, provided that no energy can enter or exit the system.",
		"none",
		"kinetic",
		"potential",
		"relative",
		"internal"
	],
	
	[
		"If ` is done on a system, its internal energy will `.",
		"none",
		"work",
		"increase"
	],
	
	[
		"If a system is allowed to cool (or energy is made to leave it via some other form), its internal energy will `.",
		"none",
		"decrease"
	],
	
	[
		"When a substance changes `, its particles gain ` energy, as they are separated further from one another.",
		"none",
		"state",
		"potential"
	],
	
	[
		"During a state change, a substance's ` will not change. This is because the kinetic energy of the particles do not change, only the ` energy.",
		"none",
		"temperature",
		"potential"
	],
	
	[
		"Note that the temperature and thus ` energy of the particles in a substance must reach a threshold before a state change can occur, but for the duration of the state change, the ` of the substance will not change.",
		"none",
		"kinetic",
		"temperature"
	],
	
	[
		"The energy required for an object to change state depends on the ` of the object and the ` the object is made from.",
		"none",
		"mass",
		"material"
	],
	
	[
		"` ` ` is the amount of energy required, per unit mass, to change the state of a material.",
		"none",
		"Specific",
		"latent",
		"heat"
	],
	
	[
		"Specific latent heat gives the energy per unit mass required to change state from ` to ` or ` to `, and also gives the energy per unit mass released to the surroundings when a material changes from a ` to a ` or from a ` to a `.",
		"none",
		"solid",
		"liquid",
		"liquid",
		"gas",
		"gas",
		"liquid",
		"liquid",
		"solid"
	],
	
	[
		"There are two different types of specific latent heat: the specific latent heat of fusion (for ` and `) and the specific latent heat of vaporisation (for ` or `).",
		"none",
		"melting",
		"freezing",
		"evaporation",
		"condensation"
	],
	
	[
		"` ` ` is the energy required per unit mass to increase the temperature of a material by one degree Kelvin.",
		"none",
		"Specific",
		"heat",
		"capacity"
	],
	
	[
		"Specific heat capacity is calculated using the equation: ` = ` × ` ` ` × change in `.",
		"none",
		"energy",
		"mass",
		"specific",
		"heat",
		"capacity",
		"temperature"
	],
	
	[
		"Sepcific heat capacity can be calculated via experiment. The first step involves setting up a ` ` `  with a `, a ` supply, an `, a ` and two `.",
		"none",
		"continuous",
		"flow",
		"calorimeter",
		"heater",
		"power",
		"ammeter",
		"voltmeter",
		"thermometers"
	],
	
	[
		"The second step of the continuous flow calorimeter experiment is to turn on the `, and then the power supply. Make sure to record the ` difference and the `.",
		"./images/continuousFlowCalorimeter.bmp",
		"water",
		"potential",
		"current"
	],
	
	[
		"The third step of the continuous flow calorimeter experiment is to measure the ` of the water flowing in, as well as the temperature of the water flowing out and use these to calculate the ` in temperature.",
		"./images/continuousFlowCalorimeter.bmp",
		"temperature",
		"change"
	],
	
	[
		"The fourth step of the continuous flow calorimeter experiment is to record the rate of ` ` out of the pipe. Stop the water flow after a fixed amount of time. After stopping the experiment, calculate the input energy using ` × ` ` × ` - H, where H is the heat energy lost to the surroundings. Calculate the mass of water using ` rate × `.",
		"./images/continuousFlowCalorimeter.bmp",
		"water",
		"flow",
		"current",
		"potential",
		"difference",
		"time",
		"flow",
		"time"
	],
	
	[
		"The fifth step of the continuous flow calorimeter experiment is to repeat the experiment, changing both the ` ` of the water and the ` of the power supply so that the ` change remains constant.",
		"./images/continuousFlowCalorimeter.bmp",
		"flow",
		"rate",
		"power",
		"temperature"
	],
	
	[
		"The sixth step of the continuous flow calorimeter experiment is to equate the two equations: `₁ = `₁ × ` ×Δθ + H, `₂ = `₂ × ` ×Δθ + H. We know the input thermal energies, the masses and the change in temperature. By subtracting the second equation from the first, we get `₁ - `₂ = (`₁ × ` ×Δθ + H) - (`₂ × ` ×Δθ + H). This simplifies to ` = (`₁ - `₂) / (Δθ(`₁ - `₂)).",
		"./images/continuousFlowCalorimeter.bmp",
		"Q",
		"m",
		"c",
		"Q",
		"m",
		"c",
		"Q",
		"Q",
		"m",
		"c",
		"m",
		"c",
		"c",
		"Q",
		"Q",
		"m",
		"m"
	]
];