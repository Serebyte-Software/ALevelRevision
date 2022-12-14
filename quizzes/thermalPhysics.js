var title = "Thermal Physics";
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
		"Note that the temperature and thus ` energy of the particles in a substance must reach a threshold before a state change can occur, but for the duration of the state change, the ` of the substance wil not change.",
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
		"Specific heat capacity is calculated using the equation: ` = ` ?? ` ` ` ?? change in `.",
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
		"The fourth step of the continuous flow calorimeter experiment is to record the rate of ` ` out of the pipe. Stop the water flow after a fixed amount of time. After stopping the experiment, calculate the input energy using ` ?? ` ` ?? ` - H, where H is the heat energy lost to the surroundings. Calculate the mass of water using ` rate ?? `.",
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
		"The sixth step of the continuous flow calorimeter experiment is to equate the two equations: `??? = `??? ?? ` ?????? + H, `??? = `??? ?? ` ?????? + H. We know the input thermal energies, the masses and the change in temperature. By subtracting the second equation from the first, we get `??? - `??? = (`??? ?? ` ?????? + H) - (`??? ?? ` ?????? + H). This simplifies to ` = (`??? - `???) / (????(`??? - `???)).",
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
	],
	
	[
		"There is a minimum possible temperature, where a particle theoretically has zero ` energy. This is called ` `.",
		"none",
		"kinetic",
		"absolute",
		"zero"
	],
	
	[
		"The Kelvin scale is an ` scale. Zero Kelvin is equal to absolute zero. A unit increase of one Kelvin is equal in magnitude to a unit increase of one ` `. Zero degrees Celsius is equal to ` Kelvin.",
		"none",
		"absolute",
		"degree",
		"Celsius",
		"273"
	],
	
	[
		"Using the Kelvin scale, temperature is ` ` to the energy of the particle.",
		"none",
		"directly",
		"proportional"
	],

	[
		"There are three main gas laws. They are each only true for a ` ` of gas.",
		"none",
		"fixed",
		"mass"
	],

	[
		"Boyle's Law states that ` is ` proportional to `, under ` conditions. In symbols it is written as: ` = k / `.",
		"none",
		"pressure",
		"inversely",
		"volume",
		"isothermic",
		"p",
		"V"
	],

	[
		"Boyle's Law is true because, if a ` mass of gas is compressed to a smaller volume, its particles will collide much more often with the surface of the container, thus increasing the `	on the container walls.",
		"none",
		"fixed",
		"pressure"
	],

	[
		"For a constant temperature, a ` (y-axis) against ` (x-axis) graph will product a k / ` graph. The larger the `, the larger k will be and the higher up the curve will be. In the diagram below, ` shows the lowest temperature and ` shows the highest temperature of the three.",
		"./images/BoylesLawGraph.bmp",
		"pressure",
		"volume",
		"x",
		"temperature",
		"T1",
		"T3"
	],

	[
		"Charles' Law states that ` is ` proportional to ` `, under ` conditions. In symbols it is written as: ` = k`.",
		"none",
		"volume",
		"directly",
		"absolute",
		"temperature",
		"isobaric",
		"T",
		"V"
	],

	[
		"Charles' Law is true because particles with a higher ` will have more ` energy. Therefore, they will move about more and spread out more, hence volume will ` on average.",
		"none",
		"temperature",
		"kinetic",
		"increase"
	],

	[
		"For a constant pressure, a ` (y-axis) against ` (x-axis) graph will be a ` ` graph. If temperature is measured in `, the graph will pass through the origin. If temperature is measured in degrees Celsius, the line will pass through the x-axis at x = ` degrees Celsius.",
		"./images/CharlesLawGraph.bmp",
		"volume",
		"temperature",
		"straight",
		"line",
		"Kelvin",
		"-273"
	],

	[
		"The Pressure Law states that ` is directly proportional to ` ` when ` is constant. In symbols, this is written as: ` = k`.",
		"none",
		"pressure",
		"absolute",
		"temperature",
		"volume",
		"p",
		"T"
	],

	[
		"The Pressure Law is true because particles with a greater ` have more ` energy, and thus collide with the surface more frequently and with greater `, thus increasing `.",
		"none",
		"temperature",
		"kinetic",
		"energy",
		"pressure"
	],

	[
		"For a constant volume, a graph of ` (y-axis) against ` (x-axis) will be a ` `. If temperature is measured in Kelvin, the line will pass through the `. If temperature is measured in degrees Celsius, the line will pass through the x-axis at x = ` degrees Celsius.",
		"./images/PressureLawGraph.bmp",
		"pressure",
		"temperature",
		"straight",
		"line",
		"origin",
		"-273"
	],

	[
		"Boyle's Law can be investigated experimentally. The first step involves setting up equipment. Set up a ` ` with a ` scale (e.g. a sealed measuring cylinder) and a fixed volume of ` inside. Connect this to a ` ` (for measuring pressure), and a `.",
		"./images/BoylesLawEquipment.bmp",
		"sealed",
		"tube",
		"volume",
		"oil",
		"Bourdon",
		"Gauge",
		"pump"
	],

	[
		"The second step in the Boyle's Law experiment involves recording the initial ` and pressure (i.e.` pressure).",
		"./images/BoylesLawEquipment.bmp",
		"volume",
		"atmospheric"
	],

	[
		"The third step in the Boyle's Law experiment involves increasing the ` using the `. Every time ` is increased, record the ` of the air in the cylinder. The exerted pressure should cause the oil to move up the cylinder. After each pump, the oil will move upwards until the pressure exerted on the oil by the air is ` to the pressure of exerted on the ` by the `. This means that the reading of the ` ` will give you the pressure on the air as well as on the oil. Record the new pressure and volume of the air each time.",
		"./images/BoylesLawEquipment.bmp",
		"pressure",
		"pump",
		"pressure",
		"volume",
		"equal",
		"air",
		"oil",
		"Bourdon",
		"Gauge"
	],

	[
		"The fourth step in the Boyle's Law experiment involves plotting a graph of pressure against ` / `. The result should be a ` ` that passes through the `.",
		"./images/BoylesLawEquipment.bmp",
		"1",
		"volume",
		"straight",
		"line",
		"origin"
	],

	[
		"Charles' Law can also be investigated experimentally. The first step involves setting up equipment. Set up a ` ` with a drop of ` ` inside it, and place it next to a ` in some near-boiling water, inside a beaker. Make sure that their is an air gap below the ` `.",
		"none",
		"capillary",
		"tube",
		"sulfuric",
		"acid",
		"thermometer",
		"sulfuric",
		"acid"
	],

	[
		"The second step in the Charles' Law experiment involves waiting for the temperature of the water to cool about 5 degrees Celsius and recording the new temperature and the ` of the ` ` beneath the ` ` drop. Repeat this until the water reaches room temperature.",
		"./images/CharlesLawEquipment.bmp",
		"length",
		"air",
		"bubble",
		"sulfuric",
		"acid"
	],

	[
		"The third step in the Charles' Law experiment involves repeating steps 1 and 2 at least ` times and taking an average ` ` height for each temperature.",
		"./images/CharlesLawEquipment.bmp",
		"three",
		"air",
		"bubble",
		"temperature"
	],

	[
		"The fourth step in the Charles' Law experiment involves converting temperatures to ` and plotting a graph of air-gap length against ` `. The line should be ` and pass through (or close to) the origin, as length is directly proportional to volume and volume is directly proportional to temperature, so ` is directly proportional to `.",
		"./images/CharlesLawEquipment.bmp",
		"Kelvin",
		"absolute",
		"temperature",
		"straight",
		"length",
		"temperature"
	],

	[
		"The ` ` of a compound is the mass of one molecule of said compound. It may be given in kilograms, but most commonly it is given as a value relative to `. For example, carbon dioxide is made up of a carbon atom (with a relative atomic mass of 12) and two oxygen atoms (each with a relative atomic mass of 16). Therefore, the relative molecular mass of carbon dioxide is ` + ` + ` = `.",
		"none",
		"molecular",
		"mass",
		"Carbon-12",
		"12",
		"16",
		"16",
		"44"
	],

	[
		"The ` `, often written as NA (often with the A in subscript), is equal to 6.02 ?? 10????. A group of 6.02 ?? 10???? molecules (or atoms, or any other object really) is called a `.",
		"none",
		"Avogadro",
		"Constant",
		"mole"
	],

	[
		"A single ` of a substance will have a mass in grams equal to the ` atomic/molecular mass of the substance. For example, a mole of carbon-12 atoms will have a mass of ` `. A mole of hydrogen gas (H???) will have a mass of ` `.",
		"none",
		"mole",
		"relative",
		"12",
		"grams",
		"2",
		"grams"
	],

	[
		"In equations, a number of moles may be represented with the letter `, and will use the unit ` (1 ` is a single mole of a substance).",
		"none",
		"n",
		"mol",
		"mol"
	],

	[
		"An ` ` is one that perfectly follows Boyle's Law, Charles' Law and the Pressure Law.",
		"none",
		"ideal",
		"gas"
	],

	[
		"Boyle's Law, Charles' Law and the Pressure Law all explain the behaviour of two of the gas quantities when the third is `. The ` ` ` explains what happens when all three vary.",
		"none",
		"constant",
		"ideal",
		"gas",
		"equation"
	],

	[
		"The ideal gas equation states that: ` ?? ` = number of ` ?? ` ` ` ?? `.",
		"none",
		"pressure",
		"volume",
		"moles",
		"molar",
		"gas",
		"constant",
		"temperature"
	],

	[
		"The ideal gas equation can be explained multiple ways. One way of thinking about it is viewing it as a mix of all three gas laws. Boyle's Law states that ` ?? ` = ` (when temperature is constant), Charles' Law states that ` / ` = ` (when pressure is constant) and the Pressure Law states that ` / ` = ` (when volume is constant). Therefore, it stands to reason that ` ?? ` / ` should be constant.",
		"none",
		"pressure",
		"volume",
		"constant",
		"volume",
		"temperature",
		"constant",
		"pressure",
		"temperature",
		"constant",
		"pressure",
		"volume",
		"temperature"
	],

	[
		"The pressure and volume of a gas are directly proportional to the number of ` of said gas - the more particles there are, the more ` per unit ` they will exert on a container, and the more space they will take up. For a given amount of internal energy, the temperature is ` ` to the number of moles. If there are fewer particles for a fixed amount of energy, each particle will get ` energy, so the gas will be hotter.",
		"none",
		"moles",
		"force",
		"area",
		"inversely",
		"proportional",
		"more"
	],

	[
		"If ` ?? ` / ` = constant, pressure and volume are proportional to number of ` of gas and temperature is ` ` to the number of moles of gas, it stands to reason that ` ?? ` / ` is directly proportional to the number of ` of gas. Therefore, pressure ?? volume / temperature = number of moles ?? constant, so ` ?? ` = number of ` ?? ` ?? `. This gives the ideal gas equation.",
		"none",
		"pressure",
		"volume",
		"temperature",
		"moles",
		"inversely",
		"proportional",
		"pressure",
		"volume",
		"moles",
		"pressure",
		"volume",
		"moles",
		"constant",
		"temperature"
	],

	[
		"Another way of thinking about the ideal gas equation is by starting with Boyle's Law: ` ?? ` = ` at a constant temperature. This shows that the value of pressure ?? volume is somehow related to the `. We can say that pressure ?? volume = f(temperature), where f is a function. Since Charles' Law states that ` is directly proportional to ` when pressure is constant, we can see that ` ?? ` = ` ?? `, as volume must be directly proportional to temperature when pressure does not change (e.g. in the Charles' Law experiment). Since the pressure and volume are each proportional to the number of `, it stands to reason that ` ?? ` = number of ` ?? ` ` ` ?? `.",
		"none",
		"pressure",
		"volume",
		"constant",
		"temperature",
		"volume",
		"temperature",
		"pressure",
		"volume",
		"constant",
		"temperature",
		"moles",
		"pressure",
		"volume",
		"moles",
		"molar",
		"gas",
		"constant",
		"temperature"
	],

	[
		"The molar gas constant is equal in value to ` Jmol?????Kg?????.",
		"none",
		"8.31"
	],

	[
		"The ideal gas equation can also be written in terms of molecules. The number of molecules may be denoted by a capital N. The ` ` is the constant used for the ideal gas equation when number of ` is used instead of number of `. Its value is calculated by dividing the molar gas constant by the ` `, and is equal to ` ?? 10??????? JKg?????.",
		"none",
		"Boltzmann",
		"Constant",
		"molecules",
		"moles",
		"Avogadro",
		"Constant",
		"1.38"
	],

	[
		"Note that most gases are not \"ideal gases\" but follow the ideal gas equation closely enough. The ideal gas equation can only be used as an approximation for gases with relatively ` temperatures and ` pressures.",
		"none",
		"high",
		"low"
	],

	[
		"For a gas at a constant pressure, work must be done to cause the gas to expand or contract. ` is ` to move gas molecules apart from each other, causing the gas to `. When a gas contracts at a constant temperature, it means that energy has been ` to the `.",
		"none",
		"Work",
		"done",
		"expand",
		"transferred",
		"surroundings"
	],

	[
		"According to Charles' Law, ` is directly proportional to `. Therefore, work is often done in the form of heating to ` a gas.",
		"none",
		"volume",
		"temperature",
		"expand"
	],

	[
		"An example of work being done on a gas at constant pressure is a balloon. A balloon at a fixed height will always have a constant pressure, since the balloon will always expand or contract until the pressure of the air inside is equal to the ` pressure outside. Therefore, the balloon's internal pressures must be equal to the atmospheric pressure at all times. If a balloon is heated, the gas inside it will gain `, and thus volume (because of Charles' Law), causing the balloon to expand. If the heat source is removed, some of the ` energy of the gas will be transferred to the surroundings, and the temperature and volume of the balloon will each decrease.",
		"none",
		"atmospheric",
		"temperature",
		"internal"
	],

	[
		"The work done when the volume of a gas is changed at constant temperature is equal to ` ?? change in `. This works because pressure is ` per unit ` and volume is equal to area ?? distance. Therefore, pressure ?? change in volume = (` / `) ?? (` ?? `) = force ?? distance = work done.",
		"none",
		"pressure",
		"volume",
		"force",
		"area",
		"force",
		"area",
		"area",
		"distance"
	],

	[
		"The pressure of an ideal gas equation states that: ` ?? ` = (`/`) ?? number of ` ?? ` ` ?? (` ` ` `)??, where molecular mass is given in kilograms.",
		"none",
		"pressure",
		"volume",
		"moelcules",
		"molecular",
		"mass",
		"root",
		"mean",
		"square",
		"speed"
	],

	[
		"The first step in deriving the pressure of an ideal gas equation is to imagine a single gas ` striking a surface of a ` container of length L head on (i.e. in a ` direction to the surface).",
		"none",
		"molecule",
		"cubic",
		"perpendicular"
	],

	[
		"The second step in deriving the pressure of an ideal gas equation is to calculate the momentum of the gas molecule using ` ?? `.",
		"none",
		"mass",
		"velocity"
	],

	[
		"The third step in deriving the pressure of an ideal gas equation is to assume it bounces back `, with the same speed in the opposite direction. This means that the change in momentum would be -2 ?? ` ?? `. The change in momentum is equal to the `.",
		"none",
		"elastically",
		"mass",
		"velocity",
		"impulse"
	],

	[
		"The fourth step in deriving the pressure of an ideal gas equation is to calculate the time taken between collisions with the same wall. As the molecule moves with constant magnitude of velocity it will take ` / ` seconds to travel from one end of the cubic container to the other, and it will take ` ?? ` / ` to travel to the other side and back - this is the time taken between collisions.",
		"none",
		"length",
		"velocity",
		"2",
		"length",
		"velocity"
	],

	[
		"The fifth step in deriving the pressure of an ideal gas equation is to calculate the average force exerted on the wall by a single molecule. This will be the same as the average force exerted on the molecule by the container, but in the reverse direction because of Newton's Third Law. Force = change in ` / `, so we can say that the average force on the particle = (-2 ?? mass ?? velocity) / (2 * length / velocity), which simplifies to -(` ?? `??) / `. Therefore the average force on the wall, which is of the same magnitude but in the opposite direction due to Newton's Third Law is equal to (` ?? `??) / `.",
		"none",
		"momentum",
		"time",
		"mass",
		"velocity",
		"length",
		"mass",
		"velocity",
		"length"
	],

	[
		"The sixth step in deriving the pressure of an ideal gas equation is to calculate the total average force on a single container wall. This can be done by multiplying the force exerted on the wall by a single molecule by the number of molecules, and using the average speed of the molecules instead of the velocity of a single molecule. This gives the equation: Force on wall = (number of ` ?? ` ?? (average `)??) / (`)",
		"none",
		"molecules",
		"mass",
		"speed",
		"length"
	],

	[
		"The seventh step in deriving the pressure of an ideal gas equation is to calculate the pressure on the wall by dividing the average force on the wall by the area of the wall, since pressure = force / area. Note that area is equal to length??. This gives: pressure = (number of ` ?? ` ?? (average `)??) / (`??). This can be simplified to pressure = (number of ` ?? ` ?? (average `)??) / `.",
		"none",
		"molecules",
		"mass",
		"speed",
		"length",
		"molecules",
		"mass",
		"speed",
		"volume"
	],

	[
		"The eighth step in deriving the pressure of an ideal gas equation is to consider that the gas molecule moves in all three dimensions, and the equation only accounts for the average square speed in the dimension ` to the surface of the container, and not the overall average speed of the molecule in all dimensions (which is often referred to as the ` ` ` speed). Using Pythagoras' Theorem we can demonstrate that the mean square speed is equal to the sum of the squares of the speeds in each dimension: C?? = x?? + y?? + z??, where C is the overall mean square speed and x, y and z are the speeds in their respective dimensions. As the speed in each dimension will be about the same on average, we can say that C?? = x?? + x?? + x??, where x is the speed in the dimension perpendicular to the surface. Therefore, C?? = `x??, so the average speed perpendicular to the surface, x??, is equal to (1/3) ?? (` ` ` `)??. Therefore, in our equation we can substitute (average speed)?? (which refers the the average speed in the perpendicular direction) for (1 / `) ?? (` ` ` `)??.",
		"none",
		"perpendicular",
		"root",
		"mean",
		"square",
		"3",
		"root",
		"mean",
		"square",
		"speed",
		"3",
		"root",
		"mean",
		"square",
		"speed"
	],

	[
		"The ninth step in deriving the pressure of an ideal gas equation is to write out the equation in full: ` ?? ` = (1/`) ?? number of ` ?? ` ?? (` ` ` `)??",
		"none",
		"pressure",
		"volume",
		"3",
		"molecules",
		"mass",
		"root",
		"mean",
		"square",
		"speed"
	],

	[
		"In real life, most gases are not ` `, at least not under all conditions anyway.",
		"none",
		"ideal",
		"gases"
	],

	[
		"The pressure of an ideal gas equation makes assumptions about gases. This means it can be used for ` and averages, but not necessarily for 100% accurate values.",
		"none",
		"approximations"
	],

	[
		"One of the simplifying assumptions is that all molecules move about with ` distributed speeds and directions.",
		"none",
		"randomly"
	],

	[
		"Another simplifying assumption is that all collisions are `.",
		"none",
		"elastic"
	],

	[
		"A third assumption is that the molecules all obey ` `.",
		"none",
		"Newton's",
		"Laws"
	],

	[
		"A fourth assumption is that molecules travel in ` ` and do not ` with each other, only with the walls.",
		"none",
		"straight",
		"lines",
		"collide"
	],

	[
		"A fifth assumption is that the forces that act on the molecules at the surfaces last for a ` amount of time (so that the time between the collisions is much greater than it).",
		"none",
		"negligible"
	],

	[
		"By equating the ideal gas equation and the pressure of an ideal gas equation, we can calculate the average ` ` of a gas molecule.",
		"none",
		"kinetic",
		"energy"
	],

	[
		"Using the ideal gas equation and the pressure of an ideal gas equation, we can see that ` ?? ` = number of ` ?? ` Constant ?? ` ` = (1/`) ?? number of ` ?? ` of molecule ?? (` ` ` speed)??. This is the first step in deriving the equation for the average kinetic energy of a gas molecule.",
		"none",
		"pressure",
		"volume",
		"moelcules",
		"Boltzmann",
		"absolute",
		"temperature",
		"3",
		"molecules",
		"mass",
		"root",
		"mean",
		"square"
	],

	[
		"The second step in derving the kinetic energy of a gas molecule equation is to divide by the number of molecules on each side to get: ` Constant ?? absolute ` = (1/3) ?? ` of molecule ?? (` ` ` `)??.",
		"none",
		"Boltzmann",
		"temperature",
		"mass",
		"root",
		"mean",
		"square",
		"speed"
	],

	[
		"The third step in deriving the kinetic energy of a gas molecule equation is to multiply each side by 3/2 to get: (`/`) ?? ` Constant ?? ` ` = (1/2) ?? ` of molecule ?? (` ` ` `)??. The right hand side of this is the kinetic energy of a gas molecule.",
		"none",
		"3",
		"2",
		"Boltzmann",
		"absolute",
		"temperature",
		"mass",
		"root",
		"mean",
		"square",
		"speed"
	],

	[
		"Since the Boltzmann Constant is equal to the ` ` constant divided by the ` constant, the kinetic energy of a gas molecule can be written as: (` ?? ` ` constant ?? absolute `) / (2 ?? ` Constant) = (1/2) ?? mass ?? (root mean square speed)??.",
		"none",
		"molar",
		"gas",
		"Avogadro",
		"3",
		"molar",
		"gas",
		"temperature",
		"Avogadro"
	],

	[
		"Scientific laws can be empirical or theoretical. ` laws are based on observations and experiental evidence, whereas ` laws are derived from existing knowledge.",
		"none",
		"empirical",
		"theoretcical"
	],

	[
		"The gas laws are `, whereas kinetic theory is `.",
		"none",
		"empirical",
		"theoretcical"
	],

	[
		"The Ancient Greeks and Romans were the first to propose anything similar to modern kinetic theory. The philosopher ` had proposed a similar idea about ` years ago.",
		"none",
		"Democritus",
		"2000"
	],

	[
		"` ` discovered Boyle's Law in `.",
		"none",
		"Robert",
		"Boyle",
		"1662"
	],

	[
		"` ` discovered Charles' Law in `.",
		"none",
		"Jacques",
		"Charles",
		"1787"
	],

	[
		"` ` discovered the Pressure Law in `, although it was rediscovered by ` ` ` in `.",
		"none",
		"Guillaume",
		"Amontons",
		"1699",
		"Joseph",
		"Louis",
		"Gay-Lussac",
		"1809"
	],

	[
		"In the `s, ` ` proposed kinetic theory to explain Boyle's Law.",
		"none",
		"1700",
		"Daniel",
		"Bernoulli"
	],

	[
		"In `, ` ` discovered Brownian motion, which provides evidence for ` theory.",
		"none",
		"1827",
		"Robert",
		"Brown",
		"kinetic"
	],

	[
		"Brownian motion describes the motion of solid particles in a fluid, for example pollen grains in water. The solid particles will move in ` zig-zag paths. This is because they are being pushed constantly by the ` in the fluid, which are too small to see.",
		"none",
		"random",
		"atoms"
	],

	[
		"` motion provides evidence that fluids are made up of `.",
		"none",
		"Brownian",
		"atoms"
	],

	[
		"Scientific ideas cannot be immediately accepted, they must be demonstrated to be correct via ` review and experimental observation. Experiments and hypotheses must be independently ` before they can be accepted.",
		"none",
		"peer",
		"validated"
	],

	[
		"For example, Daniel Bernoulli's proposition of ` ` was not immediately accepted. It wasn't recognised as an accurate model of the universe until much later, when ` was able to use ideas of kinetic theory to predict Brownian motion that kinetic theory was fully accepted.",
		"none",
		"kinetic",
		"theory",
		"Einstein"
	]
];