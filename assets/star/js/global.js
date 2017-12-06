const squares = [
	{ name: "Araña", number: "0", color: 0, position: { start: 350.5263157894738, end: 360 } },
	{ name: "Zamuro", number: "28", color: 1, position: { start: 341.0526315789475, end: 350.5263157894737 } },
	{ name: "Aguila", number: "09", color: 2, position: { start: 331.5789473684212, end: 341.0526315789474 } },
	{ name: "Vaca", number: "26", color: 1, position: { start: 322.1052631578948, end: 331.5789473684211 } },
	{ name: "Caiman", number: "30", color: 2, position: { start: 312.6315789473685, end: 322.1052631578947 } },
	{ name: "Gato", number: "11", color: 1, position: { start: 303.1578947368422, end: 312.6315789473684 } },
	{ name: "Loro", number: "07", color: 2, position: { start: 293.6842105263159, end: 303.1578947368421 } },
	{ name: "Puerco", number: "20", color: 1, position: { start: 284.2105263157896, end: 293.6842105263158 } },
	{ name: "Jirafa", number: "32", color: 2, position: { start: 274.7368421052633, end: 284.2105263157895 } },
	{ name: "Pavo", number: "17", color: 1, position: { start: 265.2631578947369, end: 274.7368421052632 } },
	{ name: "Leon", number: "05", color: 2, position: { start: 255.7894736842106, end: 265.2631578947368 } },
	{ name: "Camello", number: "22", color: 1, position: { start: 246.3157894736843, end: 255.7894736842105 } },
	{ name: "Pulpo", number: "34", color: 2, position: { start: 236.8421052631580, end: 246.3157894736842 } },
	{ name: "Zorro", number: "15", color: 1, position: { start: 227.3684210526317, end: 236.8421052631579 } },
	{ name: "Pinguino", number: "03", color: 2, position: { start: 217.8947368421054, end: 227.3684210526316 } },
	{ name: "Conejo", number: "24", color: 1, position: { start: 208.421052631580, end: 217.8947368421053 } },
	{ name: "Hormiga", number: "36", color: 2, position: { start: 198.9473684210527, end: 208.421052631579 } },
	{ name: "Mono", number: "13", color: 1, position: { start: 189.4736842105264, end: 198.9473684210526 } },
	{ name: "Buho", number: "01", color: 2, position: { start: 180.0000000000001, end: 189.4736842105263 } },
	{ name: "Culebra", number: "00", color: 0, position: { start: 170.5263157894738, end: 180 } },
	{ name: "Perro", number: "27", color: 2, position: { start: 161.0526315789475, end: 170.5263157894737 } },
	{ name: "Tigre", number: "10", color: 1, position: { start: 151.5789473684212, end: 161.0526315789474 } },
	{ name: "Chivo", number: "25", color: 2, position: { start: 142.1052631578948, end: 151.5789473684211 } },
	{ name: "Elefante", number: "29", color: 1, position: { start: 132.6315789473683, end: 142.1052631578947 } },
	{ name: "Caballo", number: "12", color: 2, position: { start: 123.1578947368422, end: 132.6315789473684 } },
	{ name: "Raton", number: "08", color: 1, position: { start: 113.6842105263158, end: 123.1578947368421 } },
	{ name: "Foca", number: "19", color: 2,position: { start: 104.2105263157896, end: 113.6842105263158 } },
	{ name: "Delfin", number: "31", color: 1, position: { start: 94.73684210526317, end: 104.2105263157895 } },
	{ name: "Burro", number: "18", color: 2, position: { start: 85.263157894736845, end: 94.73684210526316 } },
	{ name: "Sapo", number: "06", color: 1, position: { start: 75.789473684210529, end: 85.263157894736844 } },
	{ name: "Gallo", number: "21", color: 2, position: { start: 66.315789473684213, end: 75.789473684210528 } },
	{ name: "Rinoceronte", number: "33", color: 1, position: { start: 56.842105263157897, end: 66.315789473684212 } },
	{ name: "Oso", number: "16", color: 2, position: { start: 47.36842105263159, end: 56.842105263157896 } },
	{ name: "Alacran", number: "04", color: 1, position: { start: 37.894736842105265, end: 47.36842105263158 } },
	{ name: "Cebra", number: "23", color: 2, position: { start: 28.421052631578949, end: 37.894736842105264 } },
	{ name: "Hipopotamo", number: "35", color: 1, position: { start: 18.94736842105264, end: 28.421052631578948 } },
	{ name: "Paloma", number: "14", color: 2, position: { start: 9.473684210526317, end: 18.94736842105263 } },
	{ name: "Toro", number: "02", color: 1, position: { start: 0, end: 9.473684210526316 } }
];

const colors = ['#00571f', '#14121a', '#ae1b35'];


const defaultOptions = {
    elem		: '.roulette',
    duration	: 31000,
    turns		: 8
};

let arrows = [];
let spinning = false;

for (let i = 38; i >= 1; i--) {
	arrows[i-1] = 9.473684210526316 * i;
}
