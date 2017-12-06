const squares = [
	{ number: "0", color: 0, position: { start: 350.2702702702703, end: 360 } },
	{ number: "32", color: 2, position: { start: 340.5405405405405, end: 350.2702702702703 } },
	{ number: "15", color: 1, position: { start: 330.8108108108108, end: 340.5405405405405 } },
	{ number: "19", color: 2, position: { start: 321.0810810810811, end: 330.8108108108108 } },
	{ number: "04", color: 1, position: { start: 311.3513513513514, end: 321.0810810810811 } },
	{ number: "21", color: 2, position: { start: 301.6216216216216, end: 311.3513513513514 } },
	{ number: "02", color: 1, position: { start: 291.8918918918919, end: 301.6216216216216 } },
	{ number: "25", color: 2, position: { start: 282.1621621621622, end: 291.8918918918919 } },
	{ number: "17", color: 1, position: { start: 272.4324324324324, end: 282.1621621621622 } },
	{ number: "34", color: 2, position: { start: 262.7027027027027, end: 272.4324324324324 } },
	{ number: "06", color: 1, position: { start: 252.972972972973, end: 262.7027027027027 } },
	{ number: "27", color: 2, position: { start: 243.2432432432432, end: 252.972972972973 } },
	{ number: "13", color: 1, position: { start: 233.5135135135135, end: 243.2432432432432 } },
	{ number: "36", color: 2, position: { start: 223.7837837837838, end: 233.5135135135135 } },
	{ number: "11", color: 1, position: { start: 214.0540540540541, end: 223.7837837837838 } },
	{ number: "30", color: 2, position: { start: 204.3243243243243, end: 214.0540540540541 } },
	{ number: "08", color: 1, position: { start: 194.5945945945946, end: 204.3243243243243 } },
	{ number: "23", color: 2, position: { start: 184.8648648648649, end: 194.5945945945946 } },
	{ number: "10", color: 1, position: { start: 175.1351351351351, end: 184.8648648648649 } },
	{ number: "05", color: 2, position: { start: 165.4054054054054, end: 175.1351351351351 } },
	{ number: "24", color: 1, position: { start: 155.6756756756757, end: 165.4054054054054 } },
	{ number: "16", color: 2, position: { start: 145.9459459459459, end: 155.6756756756757 } },
	{ number: "33", color: 1, position: { start: 136.2162162162162, end: 145.9459459459459 } },
	{ number: "01", color: 2, position: { start: 126.4864864864865, end: 136.2162162162162 } },
	{ number: "20", color: 1, position: { start: 116.7567567567568, end: 126.4864864864865 } },
	{ number: "14", color: 2, position: { start: 107.027027027027, end: 116.7567567567568 } },
	{ number: "31", color: 1, position: { start: 97.2972972972973, end: 107.027027027027 } },
	{ number: "09", color: 2, position: { start: 87.56756756756758, end: 97.2972972972973 } },
	{ number: "22", color: 1, position: { start: 77.83783783783784, end: 87.56756756756757 } },
	{ number: "18", color: 2, position: { start: 68.10810810810811, end: 77.83783783783784 } },
	{ number: "29", color: 1, position: { start: 58.37837837837838, end: 68.10810810810811 } },
	{ number: "07", color: 2, position: { start: 48.64864864864865, end: 58.37837837837838 } },
	{ number: "28", color: 1, position: { start: 38.91891891891892, end: 48.64864864864865 } },
	{ number: "12", color: 2, position: { start: 29.18918918918919, end: 38.91891891891892 } },
	{ number: "35", color: 1, position: { start: 19.45945945945946, end: 29.18918918918919 } },
	{ number: "03", color: 2, position: { start: 9.72972972972973, end: 19.45945945945946 } },
	{ number: "26", color: 1, position: { start: 0, end: 9.72972972972973 } }
];

// VERDE - NEGRO - ROJO
const colors = ['#00571f', '#14121a', '#ae1b35'];

let spinning = false;
let arrows = [];

for (let i = 37; i >= 1; i--) {
	arrows[i-1] = 9.72972972972973 * i;
}
