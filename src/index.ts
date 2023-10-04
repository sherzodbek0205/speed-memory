import "./main.css";

let NUMBER_OF_CELLS = 16;
let NUMBER_OF_INIT_CELLS = 4;
const boardElm: HTMLDivElement = document.querySelector("#board")!;
const level: HTMLDivElement =document.querySelector(".level")!;
let cells: string[] = [];
let correctAnswers = 0;
let count =1;
let counter = 0;
// let time=15;
// HANDLE FUNCTIONS
function handleCell(cell: HTMLDivElement, cellIdx: number) {
	if (!cells[cellIdx]) {
		alert("FAIL 💣");
		cell.style.pointerEvents = "none";
		return 0;
	}

	correctAnswers++;
	cell.classList.add("active");

	if (correctAnswers === NUMBER_OF_INIT_CELLS) {
		NUMBER_OF_INIT_CELLS=NUMBER_OF_INIT_CELLS+1;
		count++;
		counter++;
		level.innerText = `Level-${count}`;

		if(counter===4) {
			let sqrt =Math.sqrt(NUMBER_OF_CELLS)+1;
			NUMBER_OF_CELLS=sqrt*sqrt;
			boardElm.style.gridTemplateRows  = `repeat(${sqrt},1fr)`;
			boardElm.style.gridTemplateColumns = `repeat(${sqrt},1fr)`;
			NUMBER_OF_INIT_CELLS=4;
			counter=0;
		}
		setTimeout(init, 0);
	}

}


// RENDER FUNCTIONS
function renderCells() {
	boardElm.innerHTML = "";
	const initCellElms: HTMLDivElement[] = [];

	for (let idx = 0; idx < cells.length; idx++) {
		const cell = cells[idx];
		const cellElm = document.createElement("div");
		cellElm.classList.add("cell");

		if (cell) {
			cellElm.classList.add("active");
			cellElm.innerText = cell;
			initCellElms.push(cellElm);
		}

		cellElm.onclick = (e) => handleCell(e.target as HTMLDivElement, idx);
		boardElm.append(cellElm);
	}

	setTimeout(() => {
		for (const cellElm of initCellElms) cellElm.classList.remove("active");
	}, 1000);
}

// LOGIC FUNCTIONS

function init() {
	correctAnswers = 0;
	cells = new Array(NUMBER_OF_INIT_CELLS).fill("🚀");
	const stayCells = new Array(NUMBER_OF_CELLS - NUMBER_OF_INIT_CELLS).fill("");

	cells = [...cells, ...stayCells].sort(() => Math.random() - 0.5);

	renderCells();
}
const btnreset:HTMLDivElement = document.querySelector(".restart")!;
btnreset.onclick = () => {
	count = 0;
	counter=0;
	NUMBER_OF_INIT_CELLS = 4;
	level.innerText = "Level-1";
	NUMBER_OF_CELLS = 16;
	boardElm.style.gridTemplateRows  = "repeat(4,1fr)";
	boardElm.style.gridTemplateColumns = "repeat(4,1fr)";
	init();
}
init();
