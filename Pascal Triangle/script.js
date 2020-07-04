const slider = document.getElementById("myRange");
const output = document.getElementById("demo");


const mainContainer = document.getElementById("container");

// First two rows:
const firstRow = [1];
let prevRow = [1, 1];

const firstRowElement = document.createElement("div");
firstRowElement.setAttribute("class", "rowContainer");

const secondRowElement = document.createElement("div");
secondRowElement.setAttribute("class", "rowContainer");

firstRowElement.innerHTML = '<span class = "odd">1</span>';
secondRowElement.innerHTML = '<span class = "odd">1</span><span class = "odd">1</span>';

mainContainer.appendChild(firstRowElement);
mainContainer.appendChild(secondRowElement);

// Pascal Triangle

function isOdd(num) {
	if (num % 2 == 0) {
		return false;
	}
	return true;
}

function generate(){
  refresh();
  let rows = slider.value;
  if (rows < 2){} else {
    for (let i = 3; i <= rows; i++) {
    	let row = [];

    	for (let j = 0; j < prevRow.length - 1; j++) {
    		row.push(prevRow[j] + prevRow[j + 1]);
    	}
    	row.unshift(1);
    	row.push(1);

    	prevRow = row;

    	let rowContainer = document.createElement("div");
    	rowContainer.setAttribute("class", "rowContainer");

    	// take all array elements, and put them in a cell and appendChild to a row div
    	for (let k = 0; k < row.length; k++) {
    		let rowCell = document.createElement("span");
    		rowCell.setAttribute("class", "cell");
    		rowCell.innerHTML = row[k];
    		if (isOdd(row[k])) {
    			rowCell.setAttribute("class", "odd");
    		}
    		rowContainer.appendChild(rowCell);
    	}

    	mainContainer.appendChild(rowContainer);
    }
  }

}

function refresh(){
  mainContainer.innerHTML = '';
  prevRow = [1, 1];
  mainContainer.appendChild(firstRowElement);
  mainContainer.appendChild(secondRowElement);
}
